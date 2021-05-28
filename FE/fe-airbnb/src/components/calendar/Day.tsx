import { Dispatch, ReactElement, SetStateAction, useContext } from 'react';

import styled from 'styled-components'
import { Moment } from 'moment';

import { CalendarContextRaccoon } from '@components/searchBar/SearchBar'
import { CalendarContextType } from '@components/searchBar/SearchBar'

type DayProps = {
  day: Moment;
  handleClickDate: () => void
}

function useCalendarState(): CalendarContextType {
  const state = useContext(CalendarContextRaccoon);
  if(!state) throw new Error('에러발생~! state가 없습니다.🙅🏻');
  return state;
}

function Day({ day }: DayProps): ReactElement {
  const state = useCalendarState();
  const { setCheckInMoment } = state;

  const handleClickDate = ({ target }: any): void => {
    console.log(target);
    console.dir(setCheckInMoment);
  };

  return (
    <>
      {day !== null
        ? <DayContainer onClick={handleClickDate}>
            {day && day.format('D').toString()}
          </DayContainer>
        : <Blank />}
    </>
  )
}

const DayContainer = styled.div`
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

const Blank = styled.div`
  width: 48px;
  height: 48px;
`

export default Day
