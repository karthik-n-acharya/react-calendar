import moment from "moment";


export const getFirstDateOfTheMonth = (data) => {
    return moment(date).startOf('month').format('YYYY-MM-DD'); 
}

export const getLastDateOfTheMonth = (data) => {
    returnmoment().endOf('month').format('YYYY-MM-DD');
}

 