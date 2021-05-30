import styled from 'styled-components';

import Counter from '@components/headcount/Counter';
import { HeadCountProps } from './HeadCountTypes';

function HeadCount({ guestType }: HeadCountProps) {
  const guestTypeTitle: {[key: string]: string} = {
    adults: '성인',
    children: '어린이',
    infants: '유아',
  };

  const guestTypeCaption: {[key: string]: string} = {
    adults: '만 13세 이상',
    children: '만 2~12세',
    infants: '만 2세 미만',
  };

  return (
    <HeadCountContainer>
        <GuestType>
          <GuestTypeTitle>{guestTypeTitle[guestType]}</GuestTypeTitle>
          <GuestTypeCaption>{guestTypeCaption[guestType]}</GuestTypeCaption>
        </GuestType>
        <Counter />
      </HeadCountContainer>
  )
}

const HeadCountContainer = styled.div`
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

export default HeadCount
