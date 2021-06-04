package com.codesquad.airbnb.accommodation.repository;

import java.util.Objects;

public class AccommodationPriceStats {
    private int price;
    private int count;

    public AccommodationPriceStats(int price, int count) {
        this.price = price;
        this.count = count;
    }

    public int getPrice() {
        return price;
    }

    public int getCount() {
        return count;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AccommodationPriceStats that = (AccommodationPriceStats) o;
        return price == that.price && count == that.count;
    }

    @Override
    public int hashCode() {
        return Objects.hash(price, count);
    }

    @Override
    public String toString() {
        return "AccommodationPriceStats{" +
                       "price=" + price +
                       ", count=" + count +
                       '}';
    }
}
