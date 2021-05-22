import styled from 'styled-components';
import { Flex, Spacer } from '@chakra-ui/layout';
import Calendar from './Calendar';
import { ReactComponent as LeftArrowIcon } from '../../icon/chevron-left.svg';
import { ReactComponent as RightArrowIcon } from '../../icon/chevron-right.svg';

const CalendarModal = (props) => {
  // function prevMonth() {
  //   return calendar.clone().subtract(1, 'month');
  // }

  // function nextMonth() {
  //   return calendar.clone().add(1, 'month');
  // }

  return (
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

      <Flex>
        <Calendar />
        <Spacer />
        <Calendar />
      </Flex>
    </CalendarModalContainer>
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

export default CalendarModal;
