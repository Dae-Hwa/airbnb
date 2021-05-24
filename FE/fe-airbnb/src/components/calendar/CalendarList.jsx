import { useContext } from 'react';
import styled from 'styled-components';
import { Flex } from '@chakra-ui/layout';
import Calendar from './Calendar';
import { CalendarContext } from './CalendarModal';

const CalendarList = (props) => {
  const { calendars } = useContext(CalendarContext);

  return (
    <CalendarListContainer>
      <Flex justify="space-between">
        {calendars.map((calendar) => (
          <Calendar calendar={calendar} />
        ))}
      </Flex>
    </CalendarListContainer>
  );
};

const CalendarListContainer = styled.div`
  width: 200%;
  transform: translateX(-25%);
`;

export default CalendarList;
