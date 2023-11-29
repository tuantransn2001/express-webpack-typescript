import moment from "moment";

export const handleConvertDate = (date: Date | string) =>
  moment(date).format("LT");

export const handleRelativeTime = (date: Date) =>
  moment(date).startOf("minute").fromNow();

export const handleConvertDateToSecond = (date: Date) =>
  moment(date).millisecond();

export const getCurrentTime = () => new Date(moment().format("lll"));
