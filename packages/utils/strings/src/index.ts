export const camelize = (content: string) =>
  content
    .toLowerCase()
    .replace(/\s\W(.)|\s(.)/gi, (chr) => chr.toUpperCase().trim())
    .replace(/\W/gi, '');

const computeLineAddress = (addressLine: string) => (addressLine ? `, ${addressLine}` : '');

export interface IAddress {
  address1: string;
  address2?: string;
  address3?: string;
  address4?: string;
  address5?: string;
  postcode: string;
}

export const computeAddress = (address: IAddress) => {
  const fields = ['address1', 'address2', 'address3', 'address4', 'address5', 'postcode'];

  return fields.reduce((acc, curr, currentIndex) => {
    if (currentIndex === 0) {
      return `${acc}${address[curr]}`;
    }

    if (currentIndex === fields.length - 1) {
      return `${acc}, ${address[curr]}`;
    }

    return `${acc}${computeLineAddress(address[curr])}`;
  }, '');
};
