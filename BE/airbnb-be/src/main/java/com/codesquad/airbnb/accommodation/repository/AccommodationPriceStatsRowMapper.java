package com.codesquad.airbnb.accommodation.repository;


import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class AccommodationPriceStatsRowMapper implements RowMapper<AccommodationPriceStats> {

    @Override
    public AccommodationPriceStats mapRow(ResultSet rs, int rowNum) throws SQLException {
        return new AccommodationPriceStats(rs.getInt("price"), rs.getInt("count"));
    }
}
