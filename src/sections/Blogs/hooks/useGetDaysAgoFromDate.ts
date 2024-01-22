const useDaysAgoFromDate = (date: string) => {
  function parseDate(input: string) {
    const [day, month, year] = input.split("-");
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  }

  const calculateDaysAgo = (date: string) => {
    const currentDate = new Date();
    const inputDate = parseDate(date);
    const timeDifference = currentDate.getTime() - inputDate.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference;
  };

  const daysAgo = calculateDaysAgo(date);
  return { daysAgo };
};

export { useDaysAgoFromDate };
