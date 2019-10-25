// checks if item exists in array
export const inArray = (item: string, array: any[]) => {
  return array.indexOf(item) >= 0;
};

// checks if key exists on object
export const objectKeyExists = (key: string, object: object) => {
  return object[key] ? true : false;
};

// returns object from array by specified key value
export const getByValue = (arr: any[], key: string, value: any) => {
  const filteredArray = arr.filter((obj) => {
    return obj[key] === value;
  });

  return filteredArray.length ? filteredArray[0] : null;
};

// outputs number as currency with thousands separator
export const formatCurrency = (amount: number, thousands: string = ',') => {
  amount = Math.abs(Number(amount));

  const i = amount.toString();
  const j = i.length > 3 ? i.length % 3 : 0;

  return (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, `$1${thousands}`);
};

// removes thousands separator from currency
export const stripCurrency = (amount: string) => {
  return amount.replace(/[,.]/g, '');
};

const functions = {
  inArray,
  objectKeyExists,
  getByValue,
};

export default functions;
