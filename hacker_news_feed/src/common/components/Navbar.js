import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    getFetchResults,
    setCurrentPage,
    setSearchText,
    setSortingCriteria,
} from '../../actions';
import * as locationTagMap from '../../locationTagMap.json';
import { collectPageResults } from '../utils/api';

export default function Navbar() {
    const searchText = useSelector((state) => state.searchText);
    const sortingCriteria = useSelector((state) => state.sortingCriteria);
    const dispatch = useDispatch();
    const location = useLocation();

    const onSearch = (searchText, sortingCriteria) => {
        dispatch(setCurrentPage(0));
        dispatch(
            getFetchResults(
                searchText,
                [locationTagMap[location.pathname]],
                [],
                1,
                sortingCriteria
            )
        ).then((data) => {
            collectPageResults(dispatch, data.hits, sortingCriteria);
        });
    };
    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark"
            style={{
                backgroundColor: '#282f40',
                boxShadow: '2px 2px 5px #282c34',
            }}
        >
            <Link className="navbar-brand" to="/">
                Hacker News
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
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/new">
                            New Stories
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/ask">
                            Ask Stories
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/show">
                            Show Stories
                        </Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        value={searchText}
                        onChange={(event) =>
                            dispatch(setSearchText(event.target.value))
                        }
                    />
                    <select
                        className="form-control mr-sm-2"
                        onChange={(event) => {
                            dispatch(setSortingCriteria(event.target.value));
                            onSearch(searchText, event.target.value);
                        }}
                    >
                        <option value="sort_by_relevance">
                            Sort By Relevance
                        </option>
                        <option value="sort_by_date">Sort by Date</option>
                    </select>
                    <button
                        className="btn btn-outline-success my-2 my-sm-0"
                        type="submit"
                        onClick={(event) => {
                            event.preventDefault();
                            onSearch(searchText, sortingCriteria);
                        }}
                    >
                        Search
                    </button>
                </form>
            </div>
        </nav>
    );
}
