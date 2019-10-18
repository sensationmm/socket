import { format, parseISO } from 'date-fns';

export const formatISODate = (date: string) => format(parseISO(date), 'dd LLL yyyy');
