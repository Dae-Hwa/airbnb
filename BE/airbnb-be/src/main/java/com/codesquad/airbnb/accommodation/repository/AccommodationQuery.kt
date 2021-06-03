package com.codesquad.airbnb.accommodation.repository


object AccommodationQuery {
    const val INSERT_ACCOMMODATION: String = """
INSERT INTO `accommodation`
(
    `name`,
    `description`,
    `capacity`,
    `accommodation_type`,
    `bedroom_count`,
    `restroom_count`,
    `restroom_type`,
    `price_per_night`,
    `discount_percent`,
    `cleaning_fee_percent`,
    `service_fee_percent`,
    `accommodation_tax_percent`,
    `has_kitchen`,
    `has_internet`,
    `has_airconditioner`,
    `has_hairdrier`,
    `accommodation_host_user_id`
)
VALUES
(
    :name,
    :description,
    :accommodationOption.capacity,
    :accommodationOption.accommodationType.name,
    :accommodationOption.bedroomCount,
    :accommodationOption.restroomCount,
    :accommodationOption.restroomType.name,
    :accommodationPrice.pricePerNight,
    4,
    5,
    10,
    5,
    :accommodationOption.hasKitchen,
    :accommodationOption.hasInternet,
    :accommodationOption.hasAirconditioner,
    :accommodationOption.hasHairdrier,
    :accommodationHost.id
);
"""
    const val SELECT_ACCOMMODATION: String = """
SELECT `accommodation`.`id`,
       `name`,
       `accommodation`.`description`,
       `capacity`,
       `accommodation_type`,
       `bedroom_count`,
       `restroom_count`,
       `restroom_type`,
       `price_per_night`,
       `discount_percent`,
       `cleaning_fee_percent`,
       `service_fee_percent`,
       `accommodation_tax_percent`,
       `has_kitchen`,
       `has_internet`,
       `has_airconditioner`,
       `has_hairdrier`,
       `accommodation_host_user_id`,
       (SELECT COUNT(*) FROM `review` WHERE `accommodation_id` = `accommodation`.`id`)      AS `review_counts`,
       (SELECT AVG(`rating`) FROM `review` WHERE `accommodation_id` = `accommodation`.`id`) AS `review_rating`,
       (SELECT `url` FROM `image` JOIN `accommodation_has_image` `ahi` ON `image`.`id` = `ahi`.`image_id` WHERE `accommodation_id` = :id AND is_main_image) AS `main_image`
FROM `accommodation`
WHERE 1=1
    """
}
