import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
    setSearchText,
    getFetchResults,
    setSortingCriteria,
    setResultItems,
} from '../../actions';
import ResultItem from './ResultItem';
import ReactPaginate from 'react-paginate';
import { collectPageResults } from '../utils/api';
import * as locationTagMap from '../../locationTagMap.json';


export default function ResultItems({ title }) {
    const searchResults = useSelector((state) => state.searchResults);
    const searchText = useSelector((state) => state.searchText);
    const sortingCriteria = useSelector((state) => state.sortingCriteria);
    const resultItems = useSelector((state) => state.resultItems);
    const dispatch = useDispatch();
    const pageCount = searchResults ? searchResults.nbPages : 0;

    const location = useLocation();

    console.log(resultItems);
    useEffect(() => {
        dispatch(setSearchText(''));
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
    }, []);

    const handlePageClick = (event) => {
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
            {resultItems
                ? resultItems.map((item, index) => {
                      return (
                          <ResultItem
                              key={index}
                              title={item.title}
                              author={item.author}
                              text={item.text}
                              tags={item.tags}
                              created_at={item.created_at}
                          />
                      );
                  })
                : ''}
            <ReactPaginate
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
        </div>
    );
}
