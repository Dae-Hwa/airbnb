import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { CalendarContext } from './CalendarModal';
import CalendarHeader from './CalendarHeader';
import DayNames from './DayNames';
import buildCalendar from './build';

const Calendar = (props) => {
  const { calendarMatrix, setCalendarMatrix, calendar, setCalendar } =
    useContext(CalendarContext);

  useEffect(() => {
    setCalendarMatrix(buildCalendar(calendar));
  }, [calendar]);

  return (
    <CalendarContainer>
      <CalendarHeader calendar={calendar} setCalendar={setCalendar} />
      <CalendarBody>
        <DayNames />
        {calendarMatrix.map((week) => (
          <Week>
            {week.map((day) => (
              <Day onClick={() => setCalendar(day)}>
                {calendar.isSame(day, 'day') ? (
                  <SelectedDay>{day.format('D').toString()}</SelectedDay>
                ) : (
                  day.format('D').toString()
                )}
              </Day>
            ))}
          </Week>
        ))}
      </CalendarBody>
    </CalendarContainer>
  );
};

const CalendarContainer = styled.div``;

const CalendarBody = styled.div`
  display: flex;
  flex-direction: column;

  flex-wrap: wrap;
  gap: 4px 0px;
`;

const Week = styled.div`
  display: flex;
`;

const Day = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.XS};
`;

const SelectedDay = styled.div`
  width: 48px;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.gray4};
  border-radius: ${({ theme }) => theme.borders.M};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Calendar;
