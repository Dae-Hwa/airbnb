import { ReactElement, useContext } from 'react';

import styled from 'styled-components'
import { Moment } from 'moment';

import { CalendarContext } from '@components/searchBar/SearchBar'
import { CalendarContextType } from '@components/searchBar/SearchBar'
import { DayContainerProps } from '@components/searchBar/searchBarTypes';

type DayProps = {
  day: Moment;
  handleClickDate: () => void
}

function useCalendarState(): CalendarContextType {
  const state = useContext(CalendarContext);
  if(!state) throw new Error('에러발생~! state가 없습니다.🙅🏻');
  return state;
}

function Day({ day }: DayProps): ReactElement {
  const {
    checkInMoment, 
    setCheckInMoment, 
    checkOutMoment, 
    setCheckOutMoment 
  } = useCalendarState();

  const isSelected = () => {
    if(day.isSame(checkInMoment) || day.isSame(checkOutMoment)) return true;
    return false;
  }

  const isBetween = () => {
    return (day.isBetween(checkInMoment, checkOutMoment))
  }

  const handleClickDate = (): void => {
    if(!checkInMoment && !checkOutMoment) {
      setCheckInMoment(day);
    }

    if(checkInMoment && !checkOutMoment) {
      if(day.isSame(checkInMoment)) {
        setCheckOutMoment(day);
      }
      if(day.isBefore(checkInMoment)) {
        setCheckInMoment(day);
      }
      if(day.isAfter(checkInMoment)) {
        setCheckOutMoment(day);
      }
    }

    if(checkInMoment && checkOutMoment) {
      if(day.isSame(checkInMoment)) {
        setCheckOutMoment(day);
      }
      if(day.isBefore(checkInMoment)) {
        setCheckInMoment(day);
        setCheckOutMoment(null);
      }
      if(day.isAfter(checkInMoment)) {
        setCheckOutMoment(day)
      }
    }
  };

  return (
    <>
      {day !== null
        ? <DayContainer onClick={handleClickDate} isSelected={isSelected()} isBetween={isBetween()}>
            {day && day.format('D').toString()}
          </DayContainer>
        : <Blank />}
    </>
  )
}

const DayContainer = styled.div<DayContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.XS};
  background-color: ${({ theme, isSelected, isBetween }) => isSelected ? theme.colors.gray1 : isBetween ? theme.colors.gray6 : 'transparent'};
  color: ${({ theme, isSelected }) => isSelected ? theme.colors.white : theme.colors.gray1};
  border-radius: ${({ theme, isBetween }) => isBetween ? 0 : theme.borders.M};

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
