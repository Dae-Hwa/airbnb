import styled from 'styled-components';
import { Flex } from '@chakra-ui/layout';

import { ReactComponent as PlusIcon } from '../../icon/plus-circle.svg';
import { ReactComponent as MinusIcon } from '../../icon/minus-circle.svg';

function HeadCountModal() {
  return (
    <HeadCountContainer>
      <HeadCount>
        <GuestType>
          <GuestTypeTitle>성인</GuestTypeTitle>
          <GuestTypeCaption>만 13세 이상</GuestTypeCaption>
        </GuestType>
        <Flex align="center">
          <PlusIcon />
          <Count>3</Count>
          <MinusIcon />
        </Flex>
      </HeadCount>

      <HeadCount>
        <GuestType>
          <GuestTypeTitle>어린이</GuestTypeTitle>
          <GuestTypeCaption>만 2~12세</GuestTypeCaption>
        </GuestType>
        <Flex align="center">
          <PlusIcon />
          <Count>3</Count>
          <MinusIcon />
        </Flex>
      </HeadCount>

      <HeadCount>
        <GuestType>
          <GuestTypeTitle>유아</GuestTypeTitle>
          <GuestTypeCaption>만 2세 미만</GuestTypeCaption>
        </GuestType>
        <Flex align="center">
          <PlusIcon />
          <Count>3</Count>
          <MinusIcon />
        </Flex>
      </HeadCount>
    </HeadCountContainer>
  );
}

const HeadCountContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 42px;
  width: 400px;
  height: fit-content;
  border-radius: ${({ theme }) => theme.borders.L};
  box-shadow: ${({ theme }) => theme.boxShadow.up2};
  padding: 64px;
  margin-top: 16px;
  position: absolute;
  right: 0;
`

const HeadCount = styled.div`
  display: flex;
  justify-content: space-between;
`

const GuestType = styled.div`
  width: 80px;
`

const GuestTypeTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.SM};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
`

const GuestTypeCaption = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.S};
  color: ${({ theme }) => theme.colors.gray3};
`

const Count = styled.div`
  margin: 0 16px;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.L};
  color: ${({ theme }) => theme.colors.gray1};
`

export default HeadCountModal;
