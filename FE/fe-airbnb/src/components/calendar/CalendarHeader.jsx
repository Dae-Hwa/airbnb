import { Flex } from '@chakra-ui/layout';
import styled from 'styled-components';
import { ReactComponent as LeftArrowIcon } from '../../icon/chevron-left.svg';
import { ReactComponent as RightArrowIcon } from '../../icon/chevron-right.svg';

const CalendarHeader = ({ calendar, setCalendar }) => {
  function currYear() {
    return calendar.format('YYYY');
  }

  function currMonthName() {
    return calendar.format('MM');
  }

  function prevMonth() {
    return calendar.clone().subtract(1, 'month');
  }

  function nextMonth() {
    return calendar.clone().add(1, 'month');
  }

  return (
    <Flex>
      <LeftArrowIcon
        onClick={() => {
          setCalendar(prevMonth());
        }}
      />
      <Title>
        {currYear()}년 {currMonthName()}월
      </Title>
      <RightArrowIcon
        onClick={() => {
          setCalendar(nextMonth());
        }}
      />
    </Flex>
  );
};

const Title = styled.div`
  width: 336px;
  display: flex;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.SM};
  font-weight: bold;
  margin-bottom: 16px;
`;

export default CalendarHeader;
