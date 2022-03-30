import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark"
            style={{
                backgroundColor: '#282f40',
                boxShadow: '2px 2px 5px #282c34',
            }}
        >
            <Link className="navbar-brand" to="/">
                MovieDB
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <form className="form-inline my-2 my-lg-0 w-100">
                    <input
                        className="form-control mr-sm-2 w-50 search-bar"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        // value={searchText}
                        // onChange={(event) =>
                        //     dispatch(setSearchText(event.target.value))
                        // }
                    />
                    <select
                        className="form-control mr-sm-2 w-25"
                        // onChange={(event) => {
                        //     dispatch(setSortingCriteria(event.target.value));
                        //     onSearch(searchText, event.target.value);
                        // }}
                    >
                        <option value="sort_by_relevance">
                            Sort By Relevance
                        </option>
                        <option value="sort_by_date">Sort by Date</option>
                    </select>
                    <button
                        className="btn btn-outline-success my-2 my-sm-0"
                        type="submit"
                    >
                        Search
                    </button>
                </form>
            </div>
        </nav>
    );
}
