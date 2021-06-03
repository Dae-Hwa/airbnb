package com.codesquad.airbnb.accommodation.repository;

import com.codesquad.airbnb.accommodation.controller.AccommodationHost;
import com.codesquad.airbnb.accommodation.domain.Accommodation;
import com.codesquad.airbnb.accommodation.domain.AccommodationOption;
import com.codesquad.airbnb.accommodation.domain.AccommodationType;
import com.codesquad.airbnb.accommodation.domain.RestroomType;
import com.codesquad.airbnb.accommodation.domain.price.Price;
import com.codesquad.airbnb.accommodation.domain.price.PricePolicies;
import com.codesquad.airbnb.accommodation.domain.price.PricePolicy;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


public class AccommodationRowMapper implements RowMapper<Accommodation> {
    @Override
    public Accommodation mapRow(ResultSet rs, int rowNum) throws SQLException {

        AccommodationOption accommodationOption = AccommodationOption.builder()
                                                          .capacity(rs.getInt("capacity"))
                                                          .accommodationType(AccommodationType.valueOf(rs.getString("accommodation_type")))
                                                          .bedroomCount(rs.getInt("bedroom_count"))
                                                          .restroomCount(rs.getInt("restroom_count"))
                                                          .restroomType(RestroomType.valueOf(rs.getString("restroom_type")))
                                                          .hasKitchen(rs.getBoolean("has_kitchen"))
                                                          .hasInternet(rs.getBoolean("has_internet"))
                                                          .hasAirconditioner(rs.getBoolean("has_airconditioner"))
                                                          .hasHairdrier(rs.getBoolean("has_hairdrier"))
                                                          .build();

        // TODO : 이미지 매핑 생각해보기
        List<String> images = new ArrayList<>();

//        Object imagesResultSet = rs.getArray("images").getArray();

        AccommodationHost accommodationHost = AccommodationHost.builder()
                                                      .build();

        PricePolicies pricePolicies = PricePolicies.from(
                Arrays.asList(
                        PricePolicy.weekDayDiscountPolicy(rs.getInt("discount_percent")),
                        PricePolicy.cleaningFeePolicy(rs.getInt("cleaning_fee_percent")),
                        PricePolicy.serviceFeePolicy(rs.getInt("service_fee_percent")),
                        PricePolicy.accommodationTaxPolicy(rs.getInt("accommodation_tax_percent"))
                )
        );

        Price accommodationPrice = Price.of(rs.getInt("price_per_night"), pricePolicies);

        return Accommodation.builder()
                       .id(rs.getLong("id"))
                       .name(rs.getString("name"))
                       .accommodationOption(accommodationOption)
                       .reviewRating(rs.getDouble("review_rating"))
                       .reviewCounts(rs.getInt("review_counts"))
                       .mainImage(rs.getString("main_image"))
                       .images(images)
                       .description(rs.getString("description"))
                       .accommodationHost(accommodationHost)
                       .accommodationPrice(accommodationPrice)
                       .build();
    }
}
