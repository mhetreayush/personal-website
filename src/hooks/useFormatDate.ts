import { parseISO, format } from 'date-fns';

const formatDate = (dateString: string) => {
  const parsedDate = parseISO(dateString);
  const formattedDate = format(parsedDate, 'MMMM dd, yyyy');
  return formattedDate;
};

export const useFormatDate = (date: string) => {
  const formattedDate = formatDate(date);
  return { formattedDate };
};
