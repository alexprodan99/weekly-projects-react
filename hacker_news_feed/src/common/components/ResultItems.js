import React, { useEffect } from 'react';
import { useDispatch, useSelector, batch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
    setSearchText,
    getFetchResults,
    setSortingCriteria,
    setCurrentPage,
} from '../../actions';
import ResultItem from './ResultItem';
import ReactPaginate from 'react-paginate';
import { collectPageResults } from '../utils/api';
import * as locationTagMap from '../../locationTagMap.json';

export default function ResultItems({ title }) {
    const searchResults = useSelector((state) => state.searchResults);
    const searchText = useSelector((state) => state.searchText);
    const sortingCriteria = useSelector((state) => state.sortingCriteria);
    const isFetchingData = useSelector((state) => state.isFetchingData);
    const resultItems = useSelector((state) => state.resultItems);
    const currentPage = useSelector((state) => state.currentPage);

    const dispatch = useDispatch();
    const pageCount = searchResults ? searchResults.nbPages : 0;

    const location = useLocation();

    useEffect(() => {
        batch(() => {
            dispatch(setSearchText(''));
            dispatch(setCurrentPage(0));
            dispatch(setSortingCriteria('sort_by_relevance'));
            dispatch(
                getFetchResults(
                    '',
                    [locationTagMap[location.pathname]],
                    [],
                    1,
                    'sort_by_relevance'
                )
            ).then((data) => {
                collectPageResults(dispatch, data.hits, 'sort_by_relevance');
            });
        });
    }, []);

    const handlePageClick = (event) => {
        dispatch(setCurrentPage(event.selected));
        dispatch(
            getFetchResults(
                searchText,
                [locationTagMap[location.pathname]],
                [],
                event.selected,
                sortingCriteria
            )
        ).then((data) => {
            collectPageResults(dispatch, data.hits, sortingCriteria);
        });
    };
    return (
        <div>
            {resultItems && resultItems.length > 0 && !isFetchingData ? (
                resultItems.map((item, index) => {
                    return (
                        <ResultItem
                            key={index}
                            id={index}
                            title={item.title}
                            author={item.author}
                            text={item.text}
                            tags={item.tags}
                            created_at={item.created_at}
                        />
                    );
                })
            ) : (
                <center style={{ marginTop: '20px' }}>
                    <div
                        class="spinner-border text-primary"
                        style={{ width: '3rem', height: '3rem' }}
                        role="status"
                    >
                        <span class="sr-only">Loading...</span>
                    </div>
                </center>
            )}
            {resultItems && resultItems.length > 0 && !isFetchingData ? (
                <ReactPaginate
                    forcePage={currentPage}
                    breakLabel="..."
                    nextLabel="next >"
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
    );
}
