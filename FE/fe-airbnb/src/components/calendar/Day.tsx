import styled from 'styled-components'
import moment from 'moment';
import { ReactElement } from 'react';

type DayProps = {
  day: moment.Moment;
}

function Day({ day }: DayProps): ReactElement {
  return (
    <>
      {day !== null
        ? <DayContainer>
            {day && day.format('D').toString()}
          </DayContainer>
        : <Blank />}
    </>
  )
}

const DayContainer = styled.td`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.XS};

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.black};
    border-radius: ${({ theme }) => theme.borders.M};
    cursor: pointer;
  }
`

const Blank = styled.td`
  width: 48px;
  height: 48px;
`

export default Day
