import moment from 'moment';

export const formatISODate = (date: string, format: string = 'DD MMM YYYY') => {
  return moment(date)
    .utc()
    .format(format);
};
