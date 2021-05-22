import { useState, createContext } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { Flex, Spacer } from '@chakra-ui/layout';
import { ReactComponent as LeftArrowIcon } from '../../icon/chevron-left.svg';
import { ReactComponent as RightArrowIcon } from '../../icon/chevron-right.svg';
import CalendarList from './CalendarList';

export const CalendarContext = createContext();

const CalendarModal = (props) => {
  const [calendarMatrix, setCalendarMatrix] = useState([]);
  const [calendar, setCalendar] = useState(moment()); // value

  const calendarState = {
    values: {
      calendarMatrix,
      setCalendarMatrix,
      calendar,
      setCalendar,
    },
  };

  // function prevMonth() {
  //   return calendar.clone().subtract(1, 'month');
  // }

  // function nextMonth() {
  //   return calendar.clone().add(1, 'month');
  // }

  return (
    <CalendarContext.Provider value={calendarState.values}>
      <CalendarModalContainer>
        <Flex justify="center">
          <Controller>
            <Flex>
              <LeftArrowIcon
              // onClick={() => {
              //   setCalendar(prevMonth());
              // }}
              />
              <Spacer />
              <RightArrowIcon
              // onClick={() => {
              //   setCalendar(nextMonth());
              // }}
              />
            </Flex>
          </Controller>
        </Flex>

        <ViewArea>
          <CalendarList />
        </ViewArea>
      </CalendarModalContainer>
    </CalendarContext.Provider>
  );
};

const CalendarModalContainer = styled.div`
  width: 916px;
  height: fit-content;
  border-radius: ${({ theme }) => theme.borders.L};
  box-shadow: ${({ theme }) => theme.boxShadow.up2};
  padding: 60px 88px;
  position: relative;
`;

const Controller = styled.div`
  position: absolute;
  top: 60px;
  width: 80%;
`;

const ViewArea = styled.div`
  width: 100%;
  overflow: hidden;
`;

export default CalendarModal;
