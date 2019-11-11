import moment from 'moment';

export const formatISODate = (date: string, format: string = 'DD MMM YYYY') => {
  return moment(date)
    .utc()
    .format(format);
};

interface IPaymentDate {
  fromDt: string;
  toDt?: string;
  frequencyAlignmentDt: string;
}

export const findPaymentDate = (paymentsList: IPaymentDate[]) => {
  const { frequencyAlignmentDt } =
    paymentsList
      .filter((item) => (!item.toDt || moment(item.toDt).isAfter(moment())) && moment(item.fromDt).isBefore(moment()))
      .sort((item1, item2) => {
        if (moment(item1.fromDt).isAfter(moment(item2.fromDt))) {
          return -1;
        }

        if (moment(item1.fromDt).isBefore(moment(item2.fromDt))) {
          return 1;
        }

        return 0;
      })[0] || {};

  return frequencyAlignmentDt;
};
