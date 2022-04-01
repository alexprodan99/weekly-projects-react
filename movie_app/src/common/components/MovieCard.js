import React, { useEffect } from 'react';

export default function MovieCard({ title, genre, posterPath, voteAverage }) {
    useEffect(() => {}, []);
    return (
        <div
            className="card hover-zoomin"
            style={{ width: '200px', height: '450px', marginBottom: '20px' }}
        >
            <img
                src={`https://image.tmdb.org/t/p/w1280/${posterPath}`}
                className="card-img-top"
                alt="movie image"
            />
            <div className="card-body">
                <h5 className="card-text"> {title}</h5>
                <h6 className="card-text">
                    {' '}
                    <span className="badge badge-secondary">{genre}</span>
                </h6>
                <h6 className="card-text">
                    {' '}
                    <i className="bi bi-star"></i>
                    {voteAverage}
                </h6>
            </div>
        </div>
    );
}
