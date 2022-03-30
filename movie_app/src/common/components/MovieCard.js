import React, { useEffect } from 'react';

export default function MovieCard({ title, genre, posterPath, voteAverage }) {
    useEffect(() => {}, []);
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src="" class="card-img-top" alt="movie image" />
            <div className="card-body">
                <h5 className="card-text"> {title}</h5>
                <h4 className="card-text"> {genre}</h4>
            </div>
        </div>
    );
}
