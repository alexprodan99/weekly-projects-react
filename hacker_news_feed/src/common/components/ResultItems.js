import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
    setSearchText,
    getFetchResults,
    getResultDetails,
    setSortingCriteria,
    addResultItem,
    setResultItems,
} from '../../actions';
import ResultItem from './ResultItem';
import ReactPaginate from 'react-paginate';

import * as locationTagMap from '../../locationTagMap.json';
import { getDiffDates } from '../../common/utils/moment';

const _collectPageResults = (dispatch, searchResults, sortingCriteria) => {
    for (const item of searchResults) {
        dispatch(getResultDetails(item.objectID, sortingCriteria)).then(
            (data) => {
                dispatch(
                    addResultItem({
                        title: item.title,
                        author: item.author,
                        text: data.hits[0].story_text,
                        tags: item._tags,
                        created_at: getDiffDates(new Date(item.created_at)),
                    })
                );
            }
        );
    }
};

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
        dispatch(setResultItems([]));
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
            _collectPageResults(dispatch, data.hits, 'sort_by_relevance');
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
            _collectPageResults(dispatch, data.hits, 'sort_by_relevance');
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
