package com.codesquad.airbnb.accommodation.repository;

import com.codesquad.airbnb.accommodation.domain.Accommodation;
import com.codesquad.airbnb.common.dummydata.AccommodationDummyDataFactory;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.transaction.annotation.Transactional;

import java.sql.PreparedStatement;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ThreadLocalRandom;
import java.util.stream.Stream;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@Transactional
class AccommodationRepositoryTest {

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Autowired
    AccommodationRepository accommodationRepository;

    @Test
    void priceStats() {
        //TODO : 정규분포 가중치 고려해야됨
        ThreadLocalRandom threadLocalRandom = ThreadLocalRandom.current();
        for (int i = 0; i < 100000; i++) {
            accommodationRepository.save(
                    AccommodationDummyDataFactory.builderWithSuiteRoom()
                            .accommodationPrice(threadLocalRandom.nextInt(0, 1100000))
                            .build()
            );
        }

        List<Map<String, Object>> result = jdbcTemplate.queryForList(
                "SELECT TRUNCATE(`price_per_night`, -4) AS `price`,\n" +
                        "       COUNT(*)\n" +
                        "FROM `accommodation`\n" +
                        "GROUP BY `price`;\n"
        );

        System.out.println(result);
    }

    @ParameterizedTest
    @MethodSource("findOneProvider")
    void findOne(Accommodation accommodation) {
        accommodationRepository.save(accommodation);
        prepareReview(accommodation);
        prepareMainImage(accommodation);
        prepareImages(accommodation);

        Accommodation actual = accommodationRepository.findOne(accommodation.getId());

        assertThat(actual).hasFieldOrPropertyWithValue("id", accommodation.getId())
                .hasFieldOrPropertyWithValue("name", accommodation.getName())
                .hasFieldOrPropertyWithValue("reviewRating", accommodation.getReviewRating())
                .hasFieldOrPropertyWithValue("reviewCounts", accommodation.getReviewCounts())
                .hasFieldOrPropertyWithValue("mainImage", accommodation.getMainImage())
                .hasFieldOrPropertyWithValue("description", accommodation.getDescription());
//                .hasFieldOrPropertyWithValue("images", accommodation.getImages())
//                .hasFieldOrPropertyWithValue("accommodationHost", accommodation.getAccommodationHost())
//                .hasFieldOrPropertyWithValue("accommodationPrice", accommodation.getAccommodationPrice());
    }

    @SuppressWarnings("unused")
    static Stream<Arguments> findOneProvider() {
        return Stream.of(
                Arguments.of(
                        AccommodationDummyDataFactory.builderWithSuiteRoom().build()
                )
        );
    }

    private void preparedUser(Accommodation accommodation) {
        KeyHolder keyHolder = new GeneratedKeyHolder();

        jdbcTemplate.update(
                con -> {
                    PreparedStatement ps = con.prepareStatement("INSERT INTO `user` (`name`) VALUES (?)", PreparedStatement.RETURN_GENERATED_KEYS);
                    ps.setString(1, accommodation.getAccommodationHost().getName());
                    return ps;
                }, keyHolder
        );

        jdbcTemplate.update("INSERT INTO `accommodation_has_image` VALUES (?, ?, ?)",
                accommodation.getId(), keyHolder.getKey().longValue(), true
        );
    }

    private void prepareReview(Accommodation accommodation) {
        for (int i = 0; i < accommodation.getReviewCounts(); i++) {
            jdbcTemplate.update("INSERT INTO `review`(`accommodation_id`, `user_id`, `rating`, `contents`) VALUES (?, ?, ?, ?)",
                    accommodation.getId(), 1L, accommodation.getReviewRating(), "test"
            );
        }
    }

    private void prepareMainImage(Accommodation accommodation) {
        KeyHolder keyHolder = new GeneratedKeyHolder();

        jdbcTemplate.update(
                con -> {
                    PreparedStatement ps = con.prepareStatement("INSERT INTO `image` (`url`) VALUES (?)", PreparedStatement.RETURN_GENERATED_KEYS);
                    ps.setString(1, accommodation.getMainImage());
                    return ps;
                }, keyHolder
        );

        jdbcTemplate.update("INSERT INTO `accommodation_has_image` VALUES (?, ?, ?)",
                accommodation.getId(), keyHolder.getKey().longValue(), true
        );
    }

    private void prepareImages(Accommodation accommodation) {
        KeyHolder keyHolder = new GeneratedKeyHolder();
        for (String each : accommodation.getImages()) {
            jdbcTemplate.update(
                    con -> {
                        PreparedStatement ps = con.prepareStatement("INSERT INTO `image` (`url`) VALUES (?)", PreparedStatement.RETURN_GENERATED_KEYS);
                        ps.setString(1, each);
                        return ps;
                    }, keyHolder
            );

            jdbcTemplate.update("INSERT INTO `accommodation_has_image` VALUES (?, ?, ?)",
                    accommodation.getId(), keyHolder.getKey().longValue(), false
            );
        }
    }
}
