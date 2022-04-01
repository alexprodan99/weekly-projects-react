import React, { useEffect } from 'react';
import './Dashboard.css';
import { useSelector, useDispatch } from 'react-redux';
import { filterMovies, getMoviesGenres } from '../../api';
import MovieCard from '../../common/components/MovieCard';
import { setSearchText, setGenreOption } from '../../actions';

export default function Dashboard() {
    const movieList = useSelector((state) => state.movieList);
    const genresDict = useSelector((state) => state.genresDict);
    const genres = genresDict ? ['all', ...Object.values(genresDict)] : [];
    const genreOption = useSelector((state) => state.genreOption);
    const sortingOption = useSelector((state) => state.sortingOption);
    const page = useSelector((state) => state.page);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMoviesGenres()).then(() => {
            dispatch(filterMovies('popularity', 'all'));
        });
    }, []);

    return (
        <div className="container">
            <div className="row" style={{ marginTop: '20px' }}>
                <div className="col-sm-1" style={{ marginRight: '60px' }}>
                    <div className="genres-list">
                        <ul>
                            {genres.length
                                ? genres.map((item, index) => {
                                      return (
                                          <li
                                              key={index}
                                              className={`genre-option ${
                                                  item === genreOption
                                                      ? 'active'
                                                      : ''
                                              }`}
                                              onClick={(event) => {
                                                  dispatch(setSearchText(''));
                                                  dispatch(
                                                      setGenreOption(item)
                                                  );
                                                  dispatch(
                                                      filterMovies(
                                                          sortingOption,
                                                          item,
                                                          page
                                                      )
                                                  );
                                              }}
                                          >
                                              {' '}
                                              {item.toUpperCase()}
                                          </li>
                                      );
                                  })
                                : ''}
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
