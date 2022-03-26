export const constructSearchEndpoint = (
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
    return endpoint;
};

export const constructCommentsEndpoint = (objectId, sortingCriteria) => {
    const searchOption =
        sortingCriteria === 'sort_by_relevance' ? 'search' : 'search_by_date';
    return `${searchOption}?tags=comments,story_${objectId}`;
};

export const constructResultDetailsEndpoint = (objectId, sortingCriteria) => {
    const searchOption =
        sortingCriteria === 'sort_by_relevance' ? 'search' : 'search_by_date';

    return `${searchOption}?tags=story,story_${objectId}`;
};
