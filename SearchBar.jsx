import React from "react";
 
const SearchBar =({handleSubmit, query, isLoading, setQuery})=> {
    return (
        <form onSubmit={handleSubmit}>
            <input>
            value={query}
            className="form-control"
            placeholder="Search Recipe"
            name="query"
            disabled={isLoading}
            onChange={(event) => setQuery(event.target.value)}
            </input>
            <input>
            disabled={isLoading || !query}
            type="submit"
            className="btn"
            value="Search"
            </input>
        </form>
    )
};
export default SearchBar;