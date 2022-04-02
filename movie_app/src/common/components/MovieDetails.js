import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetails } from '../../api';

export default function MovieDetails() {
    const { movieId } = useParams();
    const dispatch = useDispatch();
    const movieDetails = useSelector((state) => state.movieDetails);
    useEffect(() => {
        dispatch(getMovieDetails(movieId));
    }, []);

    return (
        <div className="">
            {movieDetails && (
                <div
                    className="movie-details"
                    style={{
                        backgroundImage: `url(${`https://image.tmdb.org/t/p/w1280/${movieDetails.posterPath}`})`,
                    }}
                >
                    <h3 class="title">
                        {movieDetails.title} <i className="bi bi-star"></i>
                        {movieDetails.voteAverage}
                    </h3>
                    <span className="tagline"> "{movieDetails.tagline}"</span>

                    <img
                        src={`https://image.tmdb.org/t/p/w1280/${movieDetails.backdropPath}`}
                        width="100%"
                        height="500"
                    />
                    <div className="inline-elements">
                        <span className="badges">
                            {movieDetails.genres.map((item, index) => {
                                return (
                                    <span
                                        key={index}
                                        className="badge badge-secondary mr-1"
                                    >
                                        {item}
                                    </span>
                                );
                            })}
                            <span className="badge badge-secondary mr-1">
                                {movieDetails.releaseDate}
                            </span>
                            <span className="badge badge-secondary mr-1">
                                {movieDetails.runtime}min
                            </span>
                        </span>

                        <span className="inline-btns">
                            <span className="home-btn">
                                <i className="bi bi-house-fill"></i>
                            </span>
                            <span className="watch-trailer-btn">
                                <a href="#" target="__blank">
                                    WATCH TRAILER
                                </a>
                            </span>
                        </span>
                    </div>

                    <p className="overview">{movieDetails.overview} </p>
                </div>
            )}
        </div>
    );
}
