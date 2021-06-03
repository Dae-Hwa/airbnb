package com.codesquad.airbnb.accommodation.repository;

import com.codesquad.airbnb.accommodation.controller.AccommodationRequest;
import com.codesquad.airbnb.accommodation.domain.Accommodation;
import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class AccommodationRepository {

    private NamedParameterJdbcTemplate jdbcTemplate;

    public AccommodationRepository(NamedParameterJdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Accommodation> findAllBy(AccommodationRequest accommodationRequest) {
        return jdbcTemplate.query(AccommodationQuery.SELECT_ACCOMMODATION, new AccommodationRowMapper());
    }

    public Accommodation findOne(long id) {
        return jdbcTemplate.queryForObject(AccommodationQuery.SELECT_ACCOMMODATION + "AND `accommodation`.`id` = :id", new MapSqlParameterSource().addValue("id", id), new AccommodationRowMapper());
    }

    public Accommodation save(Accommodation accommodation) {
        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbcTemplate.update(AccommodationQuery.INSERT_ACCOMMODATION, new BeanPropertySqlParameterSource(accommodation), keyHolder);

        accommodation.setId(keyHolder.getKey().longValue());

        return accommodation;
    }
}
