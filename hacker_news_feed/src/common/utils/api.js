import { getResultDetails, setResultItems } from '../../actions';
import { getDiffDates } from './moment';

export const collectPageResults = async (dispatch, searchResults, sortingCriteria) => {
    const newResultItems = [];
    for (const item of searchResults) {

        const resultDetails = await dispatch(getResultDetails(item.objectID, sortingCriteria));
        
        newResultItems.push({
            title: item.title,
            author: item.author,
            text: resultDetails.hits[0].story_text,
            tags: item._tags,
            created_at: getDiffDates(new Date(item.created_at)),
        });


    }
    dispatch(setResultItems(newResultItems));
};