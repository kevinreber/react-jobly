import React from 'react';

function SearchBar(){
    return(
        <div className="SearchBar input-group mb-3 mt-3">
            <form className="input-group m-auto w-75">
                <input className="form-control" name="search" type="text" placeholder="Enter search term..." />
                <div className="input-group-append">
                    <button className="btn btn-primary" type="button">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;