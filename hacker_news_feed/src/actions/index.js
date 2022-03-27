import {
    API,
    FETCH_RESULTS,
    FETCH_COMMENTS,
    FETCH_RESULT_DETAILS,
    SET_FETCH_RESULTS,
    SET_SEARCH_TEXT,
    SET_SORTING_CRITERIA,
    SET_COMMENTS,
    SET_CURRENT_PAGE,
    SET_RESULT_DETAILS,
    ADD_RESULT_ITEM,
    SET_RESULT_ITEMS,
    SET_IS_FETCHING_DATA,
    SET_MODAL,
} from './types';
import {
    constructSearchEndpoint,
    constructCommentsEndpoint,
    constructResultDetailsEndpoint,
} from '../common/utils/endpoint';

// API ACTIONS
function apiAction({
    url = '',
    method = 'GET',
    data = null,
    accessToken = null,
    onSuccess = () => {},
    nextDispatch = () => {},
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
            nextDispatch,
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
        url: `${process.env.REACT_APP_BASE_URL}/${constructSearchEndpoint(
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
        url: `${process.env.REACT_APP_BASE_URL}/${constructCommentsEndpoint(
            objectId,
            sortingCriteria
        )}`,
        onSuccess: setComments,
        onFailure: () => console.log('Error occured loading comments'),
        label: FETCH_COMMENTS,
    });
};

export const setComments = (comments) => {
    return {
        type: SET_COMMENTS,
        payload: comments,
    };
};

export const getResultDetails = (objectId, sortingCriteria) => {
    return apiAction({
        url: `${
            process.env.REACT_APP_BASE_URL
        }/${constructResultDetailsEndpoint(objectId, sortingCriteria)}`,
        onSuccess: setResultDetails,
        onFailure: () => console.log('Error occured loading result details'),
        label: FETCH_RESULT_DETAILS,
    });
};

export const setResultDetails = (resultDetails) => {
    return {
        type: SET_RESULT_DETAILS,
        payload: resultDetails,
    };
};

// NON-API-ACTIONS
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

export const addResultItem = (item) => {
    return {
        type: ADD_RESULT_ITEM,
        payload: item,
    };
};

export const setResultItems = (newValue) => {
    return {
        type: SET_RESULT_ITEMS,
        payload: newValue,
    };
};

export const setIsFetchingData = (newValue) => {
    return {
        type: SET_IS_FETCHING_DATA,
        payload: newValue,
    };
};

export const setCurrentPage = (newValue) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: newValue,
    };
};

export const setModal = (newValue) => {
    return {
        type: SET_MODAL,
        payload: newValue,
    };
};
