import React, { useEffect } from 'react';
import './Dashboard.css';
import { useSelector, useDispatch } from 'react-redux';
import { filterMovies, getMoviesGenres, searchMovies } from '../../api';
import MovieCard from '../../common/components/MovieCard';
import { setSearchText, setGenreOption, setPage } from '../../actions';
import ReactPaginate from 'react-paginate';
import Navbar from '../../common/components/Navbar';
import NoResultsPage from '../../common/components/NoResultsPage';

export default function Dashboard() {
    const movieList = useSelector((state) => state.movieList);
    const genresDict = useSelector((state) => state.genresDict);
    const genres = genresDict ? ['all', ...Object.values(genresDict)] : [];
    const genreOption = useSelector((state) => state.genreOption);
    const searchText = useSelector((state) => state.searchText);
    const sortingOption = useSelector((state) => state.sortingOption);
    const page = useSelector((state) => state.page);
    const pageCount = useSelector((state) => state.totalPages);
    const errorMsg = useSelector((state) => state.errorMsg);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMoviesGenres()).then(() => {
            dispatch(filterMovies('popularity', 'all'));
        });
    }, []);

    const handlePageClick = (event) => {
        dispatch(setPage(event.selected + 1));
        if (searchText) {
            dispatch(searchMovies(searchText, event.selected + 1));
        } else {
            dispatch(
                filterMovies(sortingOption, genreOption, event.selected + 1)
            );
        }
    };
    return (
        <div>
            <Navbar />
            {errorMsg && <div className="alert alert-danger"> {errorMsg}</div>}
            <div className="container dashboard">
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
                                                      dispatch(
                                                          setSearchText('')
                                                      );
                                                      dispatch(
                                                          setGenreOption(item)
                                                      );
                                                      dispatch(setPage(1));
                                                      dispatch(
                                                          filterMovies(
                                                              sortingOption,
                                                              item,
                                                              1
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
                            {movieList && movieList.length && genresDict ? (
                                movieList.map((item, index) => {
                                    return (
                                        <div key={index} className="col">
                                            <MovieCard
                                                id={item.id}
                                                title={item.title}
                                                genre={
                                                    genresDict[
                                                        item.genre_ids[0]
                                                    ]
                                                }
                                                posterPath={item.poster_path}
                                                voteAverage={item.vote_average}
                                            />
                                        </div>
                                    );
                                })
                            ) : (
                                <NoResultsPage searchText={searchText} />
                            )}
                        </div>
                    </div>
                </div>
                {page && pageCount ? (
                    <ReactPaginate
                        className="pagination"
                        breakLabel="..."
                        nextLabel="next >"
                        forcePage={page - 1}
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel="< previous"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        containerClassName="pagination"
                        activeClassName="active"
                        renderOnZeroPageCount={null}
                    />
                ) : (
                    ''
                )}
            </div>
        </div>
    );
}
