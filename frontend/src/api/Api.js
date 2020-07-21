import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001';

class JoblyApi {
  static async request(endpoint, paramsOrData = {}, verb = "get") {
    paramsOrData._token = localStorage.getItem('jobly-token');
    console.debug("API Call:", endpoint, paramsOrData, verb);
  
    try {
      return (await axios({
        method: verb,
        url: `${BASE_URL}/${endpoint}`,
        [verb === "get" ? "params" : "data"]: paramsOrData})).data;
        // axios sends query string data via the "params" key,
        // and request body data via the "data" key,
        // so the key we need depends on the HTTP verb
    }
    
    catch(err) {
        console.error("API Error:", err.response);
        let message = err.response.data.message;
        throw Array.isArray(message) ? message : [message];
      }
  }
    
  static async register(data){
    let res = await this.request('users', data, 'post');
    /** Store token that is received when registering new User */
    return res.token;
  }

  static async login(data){
    let res = await this.request('login', data, 'post');
    /** Store token that is received when logging user in */
    return res.token;
  }

  static async getCurrentUserData(username){
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  static async getCompanies(search){
    /** On the backend, our `Company` model has a query that filters
     * the data we receive back, if `search` is passed into the parameters
    */
    let res = await this.request('companies', { search });
    return res.companies;
  }

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async getJobs(search){
    let res = await this.request('jobs', {search});
    return res.jobs;
  }

  static async getJob(id){
      let res = await this.request(`jobs/${id}`);
      return res.job;
  }

  static async applyToJob(id){
    let res = await this.request(`jobs/${id}/apply`, {}, 'post');
    return res.message;
  }

  static async saveProfile(username, data){
    let res = await this.request(`users/${username}`, data, 'patch');
    return res.user;
  }
    
}

export default JoblyApi;