import axios from "axios";

class JoblyApi {
    static async request(endpoint, paramsOrData = {}, verb = "get") {
      paramsOrData._token = ( 
        // for now, hardcode token for "testing"
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc" +
        "3RpbmciLCJpc19hZG1pbiI6ZmFsc2UsImlhdCI6MTU1MzcwMzE1M30." +
        "COmFETEsTxN_VfIlgIKw0bYJLkvbRQNgO1XCSE8NZ0U");
  
      console.debug("API Call:", endpoint, paramsOrData, verb);
  
      try {
        return (await axios({
          method: verb,
          url: `http://localhost:3001/${endpoint}`,
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
  }

  export default JoblyApi;