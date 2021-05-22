import { Flex, Spacer } from '@chakra-ui/layout';
import styled from 'styled-components';
import Calendar from './Calendar';

const CalendarList = (props) => {
  return (
    <CalendarListContainer>
      <Flex>
        <Calendar />
        <Spacer />
        <Calendar />
        <Spacer />
        <Calendar />
        <Spacer />
        <Calendar />
      </Flex>
    </CalendarListContainer>
  );
};

const CalendarListContainer = styled.div`
  width: 200%;
  transform: translateX(-25%);
`;

export default CalendarList;
