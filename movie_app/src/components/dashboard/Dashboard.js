import React, { useEffect } from 'react';
import './Dashboard.css';
import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { getPopularMovies } from '../../api';

export default function Dashboard() {
    const movieList = useSelector((state) => state.movieList);
    const dispatch = useDispatch();
    console.log(movieList);
    useEffect(() => {
        dispatch(getPopularMovies());
    }, []);
    return (
        <div className="container">
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

            <div className="row">
                <div className="col">
                    <div className="genres-list">
                        <ul>
                            <li>
                                <a href="#">ALL GENRES</a>
                            </li>
                            <li>
                                <a href="#">ACTION</a>
                            </li>
                            <li>
                                <a href="#">ADVENTURE</a>
                            </li>
                            <li>
                                <a href="#">ANIMATION</a>
                            </li>
                            <li>
                                <a href="#">COMEDY</a>
                            </li>
                            <li>
                                <a href="#">CRIME</a>
                            </li>
                            <li>
                                <a href="#">DOCUMENTARY</a>
                            </li>
                            <li>
                                <a href="#">DRAMA</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col">
                    <div className="movie-list row">
                        {movieList && movieList.length
                            ? movieList.map((item, index) => {
                                  return (
                                      <div key={index} className="col">
                                          {' '}
                                          {item.title}
                                      </div>
                                  );
                              })
                            : ''}
                    </div>
                </div>
            </div>
        </div>
    );
}
