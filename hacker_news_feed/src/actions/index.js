import {
    API,
    FETCH_RESULTS,
    SET_FETCH_RESULTS,
    SET_SEARCH_TEXT,
} from './types';

const _constructEndpoint = (query, tags, numericFilters, page) => {
    let endpoint = `search?query=${query}`;

    if (tags) {
        endpoint += '&tags=';

        if (tags.length === 1) {
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

    if (numericFilters) {
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

    return endpoint;
};

export const getFetchResults = (
    query,
    tags = [],
    numericFilters = [],
    page = ''
) => {
    return apiAction({
        url: `${process.env.REACT_APP_BASE_URL}/${_constructEndpoint(
            query,
            tags,
            numericFilters,
            page
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

export const setSearchText = (searchText) => {
    return {
        type: SET_SEARCH_TEXT,
        payload: searchText,
    };
};
