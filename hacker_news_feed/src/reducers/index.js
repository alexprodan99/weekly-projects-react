import {
    API_START,
    API_END,
    FETCH_RESULTS,
    SET_FETCH_RESULTS,
} from '../actions/types';

export default function (state = {}, action) {
    console.log('action type => ', action.type);
    switch (action.type) {
        case SET_FETCH_RESULTS:
            return { data: action.payload };
        case API_START:
            if (action.payload === FETCH_RESULTS) {
                return {
                    ...state,
                    isLoadingData: true,
                };
            }
            break;
        case API_END:
            if (action.payload === FETCH_RESULTS) {
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