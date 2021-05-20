import { Flex } from '@chakra-ui/layout';
import styled from 'styled-components';
import { ReactComponent as LeftArrowIcon } from '../../icon/chevron-left.svg';
import { ReactComponent as RightArrowIcon } from '../../icon/chevron-right.svg';

const CalendarHeader = ({ calendarYM, moveMonth }) => {
  return (
    <Flex>
      <LeftArrowIcon
        onClick={() => {
          moveMonth(-1);
        }}
      />
      <H2>{calendarYM}</H2>
      <RightArrowIcon
        onClick={() => {
          moveMonth(1);
        }}
      />
    </Flex>
  );
};

const H2 = styled.h2``;

export default CalendarHeader;
