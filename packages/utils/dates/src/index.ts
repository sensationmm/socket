import { format, parseISO } from 'date-fns';

export const formatBlogPostISODate = (date: string) => format(parseISO(date), 'dd LLL yyyy');
