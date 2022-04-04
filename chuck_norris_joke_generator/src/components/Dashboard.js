import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRandomJoke } from '../api';

function JokeCard({ iconUrl, text }) {
    return (
        <div>
            <img src={iconUrl} alt="image" />
            <h3> {text}</h3>
        </div>
    );
}

export default function Dashboard() {
    const joke = useSelector((state) => state.joke);
    const dispatch = useDispatch();

    return (
        <section className="container py-4">
            <div className="row">
                <div className="col-md-12">
                    <h2>Chuck Norris Joke Generator</h2>
                    <ul id="tabs" className="nav nav-tabs">
                        <li className="nav-item">
                            <a
                                href=""
                                data-target="#random"
                                data-toggle="tab"
                                className="nav-link small text-uppercase active"
                            >
                                Random
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href=""
                                data-target="#category"
                                data-toggle="tab"
                                className="nav-link small text-uppercase"
                            >
                                Category
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href=""
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
                        <div id="random" className="tab-pane fade">
                            <button
                                type="button"
                                className="btn btn-primary w-100"
                                onClick={() => dispatch(getRandomJoke())}
                            >
                                Get joke
                            </button>
                            {joke && (
                                <JokeCard
                                    iconUrl={joke.iconUrl}
                                    text={joke.text}
                                />
                            )}
                        </div>
                        <div
                            id="category"
                            className="tab-pane fade active show"
                        ></div>
                        <div id="free_search" className="tab-pane fade"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
