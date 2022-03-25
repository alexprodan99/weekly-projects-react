import 'moment-precise-range-plugin';
import moment from 'moment';

export const getDiffDates = (start, end = moment()) => {
    const startDateMoment = moment(start);
    const endDateMoment = end ? end : moment(end);

    const diffDict = moment.preciseDiff(startDateMoment, endDateMoment, true);
    const unit = Object.keys(diffDict).find((key) => diffDict[key] !== 0);
    return `${diffDict[unit]} ${
        diffDict[unit] > 1 ? unit : unit.slice(0, -1)
    } ago`;
};
