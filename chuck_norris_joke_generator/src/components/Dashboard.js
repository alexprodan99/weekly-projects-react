import React, { useEffect } from 'react';
import { TwitterShareButton, TwitterIcon } from 'react-share';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSearchText, setJoke, setJokeList } from '../actions';
import {
    getCategories,
    getJokeByCategory,
    getRandomJoke,
    searchJoke,
} from '../api';

function JokeCard({ text }) {
    return (
        <div className="card">
            <h4 className="card-text"> {text}</h4>
            <TwitterShareButton
                url={`https://twitter.com/intent/tweet?text=${text}`}
            >
                {' '}
                <TwitterIcon size={32} />{' '}
            </TwitterShareButton>
        </div>
    );
}

export default function Dashboard() {
    const joke = useSelector((state) => state.joke);
    const jokeList = useSelector((state) => state.jokeList);
    const categories = useSelector((state) => state.categories);
    const category = useSelector((state) => state.category);
    const searchText = useSelector((state) => state.searchText);
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.isLoading);
    const errorMsg = useSelector((state) => state.errorMsg);

    useEffect(() => {
        dispatch(getCategories());
    }, []);
    return (
        <section className="container py-4">
            <div className="row">
                <div className="col-md-12">
                    <h2>Chuck Norris Joke Generator</h2>
                    <ul id="tabs" className="nav nav-tabs">
                        <li className="nav-item">
                            <a
                                href="#"
                                data-target="#random"
                                data-toggle="tab"
                                className="nav-link small text-uppercase active"
                            >
                                Random
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#"
                                data-target="#category"
                                data-toggle="tab"
                                className="nav-link small text-uppercase"
                            >
                                Category
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#"
                                data-target="#free_search"
                                data-toggle="tab"
                                className="nav-link small text-uppercase"
                            >
                                Free search
                            </a>
                        </li>
                    </ul>
                    <br />
                    <div id="tabsContent" className="tab-content">
                        <div id="random" className="tab-pane fade active show">
                            <button
                                type="button"
                                className="btn btn-primary w-100"
                                onClick={() => dispatch(getRandomJoke())}
                            >
                                Get joke
                            </button>
                        </div>
                        <div id="category" className="tab-pane fade">
                            <select
                                className="select-input w-50"
                                value={category}
                                onChange={(event) => {
                                    dispatch(setCategory(event.target.value));
                                    dispatch(setJokeList(null));
                                }}
                            >
                                {categories &&
                                    categories.map((item, index) => {
                                        return (
                                            <option key={index} value={item}>
                                                {item}
                                            </option>
                                        );
                                    })}
                            </select>

                            <button
                                type="button"
                                className="btn btn-primary w-30"
                                onClick={() => {
                                    dispatch(getJokeByCategory(category));
                                    dispatch(setJokeList(null));
                                }}
                            >
                                Get joke
                            </button>
                        </div>

                        <div id="free_search" className="tab-pane fade">
                            <input
                                type="text"
                                className="search-input w-50"
                                value={searchText}
                                onChange={(event) =>
                                    dispatch(setSearchText(event.target.value))
                                }
                            ></input>
                            <button
                                type="button"
                                className="btn btn-primary w-30"
                                onClick={() => {
                                    dispatch(searchJoke(searchText));
                                    dispatch(setJoke(null));
                                }}
                            >
                                Get joke
                            </button>
                        </div>
                        <div className="result-panel">
                            {errorMsg && (
                                <div className="alert alert-danger">
                                    {' '}
                                    {errorMsg}
                                </div>
                            )}

                            {joke && <JokeCard text={joke.text} />}

                            {jokeList && jokeList.length ? (
                                jokeList.map((item, index) => {
                                    return (
                                        <JokeCard
                                            key={index}
                                            text={item.text}
                                        />
                                    );
                                })
                            ) : isLoading ? (
                                <center style={{ marginTop: '20px' }}>
                                    <div
                                        className="spinner-border text-primary"
                                        role="status"
                                    >
                                        <span className="sr-only">
                                            Loading...
                                        </span>
                                    </div>
                                </center>
                            ) : (
                                ''
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
