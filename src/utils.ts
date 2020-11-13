export const stringDateToDate = (dateingDate: string): Date => {
  const dateParts = dateingDate.split('/').map((value: string): number => {
    return parseInt(value);
  });

  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0] + 1);
};
