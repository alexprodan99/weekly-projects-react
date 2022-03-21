import axiosClient from './axios-client';

const _constructEndpoint = (query, tags, numericFilters, page) => {
    let endpoint = `/search?query=${query}`;

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

const getSearchResults = (query, tags = [], numericFilters = [], page = '') => {
    const endpoint = _constructEndpoint(query, tags, numericFilters, page);
    return axiosClient.get(endpoint);
};

export { getSearchResults };
