import React, {useState} from 'react';

/** SearchBar Component
 *  `searchFor` is a function we will pass `search` into
 *  our API call and should return our search results. 
*/
function SearchBar({searchFor}){

    /** State for search bar */
    const [search, setSearch] = useState('');

    /** Passes current state values to `searchFor` to 
     *  return only companies that match our search.
     */
    function handleSubmit(e){
        e.preventDefault();
        searchFor(search);
    }

    /** update state onChange */
    function handleChange(e){
        setSearch(e.target.value);
    }

    return(
        <div className="SearchBar input-group mb-3 mt-3">
            <form className="input-group m-auto w-75" onSubmit={handleSubmit}>
                <input 
                    className="form-control" 
                    name="search" 
                    type="text" 
                    placeholder="Enter search term..." 
                    value={search}
                    onChange={handleChange}
                />
                <div className="input-group-append">
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;