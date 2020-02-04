import moment from "moment";

const getCurrentYear = () => {
  const thisYear = moment().year();
  return thisYear;
}

const getCurrentMonth = () => {
  const thisMonth = moment().month();
  return thisMonth + 1;
}

export const getCurrentDate = () => {
  const now = moment();
  return now;
}
export const getCurrentFormattedDate = (currentDate, dateFormat) => moment(currentDate).utc().format(dateFormat)

export const calendarViewDateFormat = "YYYY-MM-DD";
export const weekDayNames = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
export const currentYear = getCurrentYear();
export const currentMonth = getCurrentMonth();
