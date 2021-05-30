import { useState } from 'react';

import { Center, Flex } from '@chakra-ui/layout';
import styled from 'styled-components';

// import PlusButton from '@components/PlusButton';
// import MinusButton from '@components/MinusButton';
import { ReactComponent as PlusIcon } from '../../icon/plus-circle.svg';
import { ReactComponent as MinusIcon } from '../../icon/minus-circle.svg';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = (): void => {
    setCount(count + 1);
  }

  const handleDecrement = (): void => {
    count && setCount(count - 1);
  }

  return (
    <Flex align="center">
      <MinusIcon onClick={handleDecrement}/>
      <Count>
        <Center>{count}</Center>
      </Count>
      <PlusIcon onClick={handleIncrement}/>
    </Flex>
  )
}

const Count = styled.div`
  margin: 0 16px;
  width: 32px;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.L};
  color: ${({ theme }) => theme.colors.gray1};
`

export default Counter
