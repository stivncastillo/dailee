export const startOfDayISO = () => {
  const startOfDay = new Date();
  startOfDay.setUTCHours(0, 0, 0, 0);
  return startOfDay.toISOString();
};

export const endOfDayISO = () => {
  const endOfDay = new Date();
  endOfDay.setUTCHours(23, 59, 59, 999);
  return endOfDay.toISOString();
};
