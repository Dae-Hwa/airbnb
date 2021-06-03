package com.codesquad.airbnb.accommodation.domain.price;

import com.codesquad.airbnb.reservation.domain.ReservationDetail;

public interface PricePolicy {
    //TODO : Percent VO 만들기

    static PricePolicy weekDayDiscountPolicy(int discountPercent) {
        return new WeekdayDiscountPolicy(discountPercent);
    }

    static PricePolicy cleaningFeePolicy(int cleaningFeePercent) {
        return new CleaningFeePolicy(cleaningFeePercent);
    }

    static PricePolicy serviceFeePolicy(int serviceFeePercent) {
        return new ServiceFeePolicy(serviceFeePercent);
    }

    static PricePolicy accommodationTaxPolicy(int accommodationTaxPercent) {
        return new AccommodationTaxPolicy(accommodationTaxPercent);
    }

    default boolean isDiscount() {
        return false;
    }

    default boolean isCleaningFee() {
        return false;
    }

    default boolean isServiceFee() {
        return false;
    }

    default boolean isAccommodationTax() {
        return false;
    }

    default int priceForNights(ReservationDetail reservationDetail, int pricePerNight) {
        return pricePerNight * reservationDetail.getCheckinDate().until(reservationDetail.getCheckoutDate()).getDays();
    }

    int calculate(ReservationDetail reservationDetail, int pricePerNight);
}
