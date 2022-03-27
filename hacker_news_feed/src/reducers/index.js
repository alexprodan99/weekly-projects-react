import {
    API_START,
    API_END,
    FETCH_RESULTS,
    SET_FETCH_RESULTS,
    SET_SEARCH_TEXT,
    SET_SORTING_CRITERIA,
    FETCH_COMMENTS,
    SET_COMMENTS,
    FETCH_RESULT_DETAILS,
    SET_RESULT_DETAILS,
    ADD_RESULT_ITEM,
    SET_RESULT_ITEMS,
    SET_IS_FETCHING_DATA,
    SET_CURRENT_PAGE,
    SET_MODAL,
} from '../actions/types';

const fetchActions = {
    FETCH_RESULTS,
    FETCH_COMMENTS,
    FETCH_RESULT_DETAILS,
};

export default function (state = { resultItems: [] }, action) {
    console.log('action type => ', action.type);
    switch (action.type) {
        case SET_IS_FETCHING_DATA:
            return { ...state, isFetchingData: action.payload };
        case SET_SEARCH_TEXT:
            return { ...state, searchText: action.payload };
        case SET_FETCH_RESULTS:
            return { ...state, searchResults: action.payload };
        case SET_RESULT_DETAILS:
            return { ...state, resultDetails: action.payload };
        case SET_RESULT_ITEMS:
            return { ...state, resultItems: action.payload };
        case SET_COMMENTS:
            return { ...state, comments: action.payload };
        case SET_SORTING_CRITERIA:
            return { ...state, sortingCriteria: action.payload };
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.payload };
        case SET_MODAL:
            return { ...state, modalData: action.payload };
        case ADD_RESULT_ITEM:
            return {
                ...state,
                resultItems: [...state.resultItems, action.payload],
            };
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
