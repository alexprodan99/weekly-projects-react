import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
    setSearchText,
    getFetchResults,
    setSortingCriteria,
} from '../../actions';
import ReactPaginate from 'react-paginate';
import * as locationTagMap from '../../locationTagMap.json';
import { getDiffDates } from '../../common/utils/moment';
import Question from '../../common/components/Question';

export default function AskStoriesPage() {
    const searchResults = useSelector((state) => state.searchResults);
    const searchText = useSelector((state) => state.searchText);
    const sortingCriteria = useSelector((state) => state.sortingCriteria);
    const dispatch = useDispatch();

    const data = searchResults ? searchResults.hits : [];
    const pageCount = searchResults ? searchResults.nbPages : 0;

    const location = useLocation();
    console.log('data=', data);
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
        );
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
        );
    };
    return (
        <div>
            {data
                ? data.map((item, index) => {
                      return (
                          <Question
                              key={index}
                              title={item.title}
                              author={item.author}
                              story_text={item.story_text}
                              tags={item._tags}
                              created_at={getDiffDates(
                                  new Date(item.created_at)
                              )}
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
