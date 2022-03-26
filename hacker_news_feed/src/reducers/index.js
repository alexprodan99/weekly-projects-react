import {
    API_START,
    API_END,
    FETCH_RESULTS,
    SET_FETCH_RESULTS,
    SET_SEARCH_TEXT,
    SET_SORTING_CRITERIA,
    FETCH_COMMENTS,
    SET_COMMENTS,
} from '../actions/types';

const fetchActions = {
    FETCH_RESULTS,
    FETCH_COMMENTS,
};

export default function (state = {}, action) {
    console.log('action type => ', action.type);
    switch (action.type) {
        case SET_SEARCH_TEXT:
            return { ...state, searchText: action.payload };
        case SET_FETCH_RESULTS:
            return { ...state, searchResults: action.payload };
        case SET_COMMENTS:
            return { ...state, comments: action.payload };
        case SET_SORTING_CRITERIA:
            return { ...state, sortingCriteria: action.payload };
        case API_START:
            if (action.payload in fetchActions) {
                return {
                    ...state,
                    isLoadingData: true,
                };
            }
            break;
        case API_END:
            if (action.payload in fetchActions) {
                return {
                    ...state,
                    isLoadingData: false,
                };
            }
            break;
        default:
            return state;
    }
}
