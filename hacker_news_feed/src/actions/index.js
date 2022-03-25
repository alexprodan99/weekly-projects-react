import {
    API,
    FETCH_RESULTS,
    SET_FETCH_RESULTS,
    SET_SEARCH_TEXT,
    SET_SORTING_CRITERIA
} from './types';

const _constructEndpoint = (query, tags, numericFilters, page, sortingCriteria) => {
    let endpoint = (sortingCriteria === 'sort_by_relevance') ? `search?query=${query}` : `search_by_date?query=${query}`;
    console.log('TAGS=', tags);
    if (tags.length) {
        if (tags.length === 1) {
            endpoint += '&tags=';
            endpoint += tags[0];
        } else {
            endpoint += '&tags=(';
            for (const tag of tags) {
                endpoint += `${tag},`;
            }
            endpoint = endpoint.slice(0, -1);
            endpoint += ')';
        }
    }

    if (numericFilters.length) {
        endpoint += '&numericFilters=';

        for (const numericFilter of numericFilters) {
            const filter = numericFilter.filter;
            const operator = numericFilter.operator;
            const value = numericFilter.value;

            endpoint += `${filter}${operator}${value},`;
        }

        endpoint = endpoint.slice(0, -1);
    }

    if (page) {
        endpoint += '&page=' + page;
    }
    console.log('ENDPOINT=', endpoint);

    return endpoint;
};
function apiAction({
    url = '',
    method = 'GET',
    data = null,
    accessToken = null,
    onSuccess = () => {},
    onFailure = () => {},
    label = '',
    headersOverride = null,
}) {
    return {
        type: API,
        payload: {
            url,
            method,
            data,
            accessToken,
            onSuccess,
            onFailure,
            label,
            headersOverride,
        },
    };
}

export const getFetchResults = (
    query,
    tags = [],
    numericFilters = [],
    page = 1,
    sortingCriteria = 'sort_by_relevance'
) => {
    return apiAction({
        url: `${process.env.REACT_APP_BASE_URL}/${_constructEndpoint(
            query,
            tags,
            numericFilters,
            page,
            sortingCriteria
        )}`,
        onSuccess: setFetchResults,
        onFailure: () => console.log('Error occured loading news'),
        label: FETCH_RESULTS,
    });
};

export const setFetchResults = (data) => {
    return {
        type: SET_FETCH_RESULTS,
        payload: data,
    };
};

export const setSortingCriteria = (newSortingCriteria) => {
    return {
        type: SET_SORTING_CRITERIA,
        payload: newSortingCriteria
    }
}

export const setSearchText = (searchText) => {
    return {
        type: SET_SEARCH_TEXT,
        payload: searchText,
    };
};
