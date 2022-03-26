import {
    API,
    FETCH_RESULTS,
    FETCH_COMMENTS,
    SET_FETCH_RESULTS,
    SET_SEARCH_TEXT,
    SET_SORTING_CRITERIA,
    SET_COMMENTS,
} from './types';

const _constructSearchEndpoint = (
    query,
    tags,
    numericFilters,
    page,
    sortingCriteria
) => {
    const searchOption =
        sortingCriteria === 'sort_by_relevance' ? 'search' : 'search_by_date';
    let endpoint = `${searchOption}?query=${query}`;
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

const _constructCommentsEndpoint = (objectId, sortingCriteria) => {
    const searchOption =
        sortingCriteria === 'sort_by_relevance' ? 'search' : 'search_by_date';
    return `${searchOption}?tags=comments,story_${objectId}`;
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
        url: `${process.env.REACT_APP_BASE_URL}/${_constructSearchEndpoint(
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

export const getComments = (objectId, sortingCriteria) => {
    return apiAction({
        url: `${process.env.REACT_APP_BASE_URL}/${_constructCommentsEndpoint(
            objectId,
            sortingCriteria
        )}`,
        onSuccess: setComments,
        onFailure: () => console.log('Error occured loading news'),
        label: FETCH_COMMENTS,
    });
};

const setComments = (comments) => {
    return {
        type: SET_COMMENTS,
        payload: comments,
    };
};
export const setSortingCriteria = (newSortingCriteria) => {
    return {
        type: SET_SORTING_CRITERIA,
        payload: newSortingCriteria,
    };
};

export const setSearchText = (searchText) => {
    return {
        type: SET_SEARCH_TEXT,
        payload: searchText,
    };
};
