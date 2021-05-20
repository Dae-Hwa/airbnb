import { Flex } from '@chakra-ui/layout';
import styled from 'styled-components';
import { dayTypes } from '../../constant';

const DateHeader = (props) => {
  return (
    <ul>
      <Flex>
        {dayTypes.map((dayType, i) => (
          <DayTypeLi key={i}>{dayType}</DayTypeLi>
        ))}
      </Flex>
    </ul>
  );
};

const DayTypeLi = styled.li`
  color: ${({ theme }) => theme.colors.gray3};
  font-size: ${({ theme }) => theme.fontSizes.XS};
  width: 48px;
  height: 24px;
  text-align: center;
`;

export default DateHeader;
