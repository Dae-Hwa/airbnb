import moment from 'moment';
import styled from 'styled-components';
import { useState } from 'react';
import CalendarHeader from './CalendarHeader';
import DateHeader from './DateHeader';

const Calendar = (props) => {
  const [calendar, setCalendar] = useState(moment());
  const [calendarYM, setCalendarYM] = useState(calendar.format('YYYY년 MM월'));

  const moveMonth = (month) => {
    setCalendar(calendar.add(month, 'M'));
    setCalendarYM(calendar.format('YYYY년 MM월'));
  };

  return (
    <CalendarContainer>
      <CalendarHeader calendarYM={calendarYM} moveMonth={moveMonth} />
      <DateHeader />
    </CalendarContainer>
  );
};

const CalendarContainer = styled.div`
  width: 916px;
  height: 512px;
  border-radius: ${({ theme }) => theme.borders.L};
  box-shadow: ${({ theme }) => theme.boxShadow.up2};
`;

export default Calendar;
