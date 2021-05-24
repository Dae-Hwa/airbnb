export default function getCalendarMatrix(momentObj) {
  const startDay = momentObj.clone().startOf('month').startOf('week');
  const endDay = momentObj.clone().endOf('month');
  const day = startDay.clone().subtract(1, 'day');
  const calendarMatrix = [];
  while (day.isBefore(endDay, 'day')) {
    calendarMatrix.push(
      Array(7)
        .fill(0)
        .map(() => day.add(1, 'day').clone())
    );
  }
  return calendarMatrix;
}
