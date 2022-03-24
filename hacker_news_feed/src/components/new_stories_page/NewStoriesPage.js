import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setSearchText, getFetchResults } from '../../actions';
import * as locationTagMap from '../../locationTagMap.json';

export default function NewStoriesPage() {
    const searchResults = useSelector((state) => state.searchResults);
    const dispatch = useDispatch();

    const filteredData = searchResults
        ? searchResults.hits.filter((item) => item.url)
        : [];

    const location = useLocation();
    console.log(searchResults);
    useEffect(() => {
        dispatch(setSearchText(''));
        dispatch(getFetchResults('', [locationTagMap[location.pathname]]));
    }, []);
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
        </div>
    );
}
