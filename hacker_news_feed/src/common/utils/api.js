import {
    getStoryDetails,
    setIsFetchingData,
    setResultItems,
} from '../../actions';
import { getDiffDates } from './moment';

export const collectPageResults = async (
    dispatch,
    searchResults,
    sortingCriteria
) => {
    const newResultItems = [];
    let details = [];
    dispatch(setIsFetchingData(true));

    const apiCalls = [];

    for (const item of searchResults) {
        apiCalls.push(
            dispatch(getStoryDetails(item.objectID, sortingCriteria))
        );
    }

    const data = await Promise.all(apiCalls);

    data.forEach((item) => {
        const info = item.hits[0];
        details = [...details, info];
    });

    for (const [index, item] of searchResults.entries()) {
        newResultItems.push({
            id: item.objectID,
            title: item.title,
            author: item.author,
            text: details[index] ? details[index].story_text : '',
            tags: item._tags,
            created_at: getDiffDates(new Date(item.created_at)),
        });
    }
    dispatch(setResultItems(newResultItems));
    dispatch(setIsFetchingData(false));
};
