import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setGenreOption, setSearchText, setSortingOption } from '../../actions';
import { searchMovies, filterMovies } from '../../api';

export default function Navbar() {
    const dispatch = useDispatch();
    const searchText = useSelector((state) => state.searchText);
    const sortingOption = useSelector((state) => state.sortingOption);
    const page = useSelector((state) => state.page);
    const sortingOptions = {
        popularity: 'Sort by popularity',
        release_date: 'Sort by release date',
        revenue: 'Sort by revenue',
        primary_release_date: 'Sort by primary release date',
        vote_average: 'Sort by vote average',
        vote_count: 'Sort by vote count',
    };

    const filterMovieData = (sortingOption, genre, page = 1) => {
        dispatch(setSearchText(''));
        dispatch(filterMovies(sortingOption, genre, page));
    };

    const searchMovieData = (searchText, page = 1) => {
        dispatch(setSortingOption('popularity'));
        dispatch(setGenreOption('all'));
        dispatch(searchMovies(searchText, page));
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
                <input
                    className="form-control mr-sm-2 w-75 search-bar"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                    value={searchText}
                    onChange={(event) => {
                        dispatch(setSearchText(event.target.value));
                        searchMovieData(event.target.value, page);
                    }}
                />
                <select
                    className="form-control mr-sm-2 w-25"
                    value={sortingOption}
                    onChange={(event) => {
                        dispatch(setSortingOption(event.target.value));
                        filterMovieData(event.target.value, page);
                    }}
                >
                    {Object.keys(sortingOptions).map((key, index) => {
                        return (
                            <option key={index} value={key}>
                                {' '}
                                {sortingOptions[key]}
                            </option>
                        );
                    })}
                </select>
            </div>
        </nav>
    );
}
