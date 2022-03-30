import React, { useEffect } from 'react';
import './Dashboard.css';
import { useSelector, useDispatch } from 'react-redux';
import { getMoviesGenres, getPopularMovies } from '../../api';
import MovieCard from '../../common/components/MovieCard';

export default function Dashboard() {
    const movieList = useSelector((state) => state.movieList);
    const genresDict = useSelector((state) => state.genresDict);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPopularMovies());
        dispatch(getMoviesGenres());
    }, []);

    console.log(movieList);

    return (
        <div className="container">
            <div className="row" style={{ marginTop: '20px' }}>
                <div className="col-sm-1" style={{ marginRight: '60px' }}>
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
                        {movieList && movieList.length && genresDict
                            ? movieList.map((item, index) => {
                                  return (
                                      <div key={index} className="col">
                                          <MovieCard
                                              title={item.title}
                                              genre={
                                                  genresDict[item.genre_ids[0]]
                                              }
                                              posterPath={item.poster_path}
                                              voteAverage={item.vote_average}
                                          />
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
