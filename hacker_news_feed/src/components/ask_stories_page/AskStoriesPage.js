import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setSearchText, getFetchResults } from '../../actions';
import ReactPaginate from 'react-paginate';
import * as locationTagMap from '../../locationTagMap.json';

export default function AskStoriesPage() {
    const searchResults = useSelector((state) => state.searchResults);
    const searchText = useSelector((state) => state.searchText);

    const dispatch = useDispatch();

    const filteredData = searchResults
        ? searchResults.hits.filter((item) => item.url)
        : [];
    const pageCount = searchResults ? searchResults.nbPages : 0;

    const location = useLocation();
    console.log(searchResults);
    useEffect(() => {
        dispatch(setSearchText(''));
        dispatch(getFetchResults('', [locationTagMap[location.pathname]]));
    }, []);

    const handlePageClick = (event) => {
        dispatch(
            getFetchResults(
                searchText,
                [locationTagMap[location.pathname]],
                [],
                event.selected
            )
        );
    };
    return (
        <div>
            {filteredData
                ? filteredData.map((item, index) => {
                      return (
                          <li key={index}>
                              {item.title} -{' '}
                              <a href={item.url} target="__blank">
                                  Link
                              </a>{' '}
                              {item.created_at}
                          </li>
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
