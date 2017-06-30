export function setStartDate(startDate) {
  return {
    type: 'SET_START_DATE',
    startDate,
  };
}

export function setEndDate(endDate) {
  return {
    type: 'SET_END_DATE',
    endDate,
  };
}
