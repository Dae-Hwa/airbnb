import { Dispatch, SetStateAction } from 'react'
import { Moment } from 'moment';

export enum SearchBarBtnType {
  CHECK_IN_OUT = 'check-in-out',
  PRICE = 'price',
  HEAD_COUNT = 'head-count',
}

export type SelectedContentProps = {
  contentType: string
}

export type DayContainerProps = {
  isSelected: boolean,
  isBetween: boolean,
  disabled: boolean
}

export type CalendarContextType = {
  calendars: Moment[];
  setCalendars: Dispatch<SetStateAction<Moment[]>>;
  checkInMoment: Moment | null;
  setCheckInMoment: Dispatch<SetStateAction<Moment | null>>;
  checkOutMoment: Moment | null;
  setCheckOutMoment: Dispatch<SetStateAction<Moment | null>>;
}

export type HeadCountContextType = {
  adultsCount: number;
  setAdultsCount: Dispatch<SetStateAction<number>>;
  childrenCount: number;
  setChildrenCount: Dispatch<SetStateAction<number>>;
  infantsCount: number;
  setInfantsCount: Dispatch<SetStateAction<number>>;
}
