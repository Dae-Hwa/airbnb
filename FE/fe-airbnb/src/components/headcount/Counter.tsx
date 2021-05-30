import { Flex } from '@chakra-ui/layout';
import styled from 'styled-components';

import PlusButton from '@components/PlusButton';
import MinusButton from '@components/MinusButton';

function Counter() {
  return (
    <Flex align="center">
      <MinusButton />
      <Count>3</Count>
      <PlusButton/>
    </Flex>
  )
}

const Count = styled.div`
  margin: 0 16px;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.L};
  color: ${({ theme }) => theme.colors.gray1};
`

export default Counter
