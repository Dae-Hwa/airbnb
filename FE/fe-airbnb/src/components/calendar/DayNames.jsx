import { Flex } from '@chakra-ui/layout';
import styled from 'styled-components';
import { dayNames } from '../../constant';

const DayNames = (props) => {
  return (
    <ul>
      <Flex>
        {dayNames.map((dayName, i) => (
          <DayName key={i}>{dayName}</DayName>
        ))}
      </Flex>
    </ul>
  );
};

const DayName = styled.li`
  color: ${({ theme }) => theme.colors.gray3};
  font-size: ${({ theme }) => theme.fontSizes.XS};
  width: 48px;
  height: 24px;
  text-align: center;
`;

export default DayNames;
