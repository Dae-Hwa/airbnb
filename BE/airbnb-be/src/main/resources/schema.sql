-- -----------------------------------------------------
-- Table `airbnb`.`image`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `airbnb`.`image` CASCADE;

CREATE TABLE IF NOT EXISTS `airbnb`.`image` (
    `id`          INT           NOT NULL AUTO_INCREMENT,
    `url`         VARCHAR(1000) NULL,
    `description` VARCHAR(200)  NULL,
    PRIMARY KEY (`id`)
)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `airbnb`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `airbnb`.`user` CASCADE;

CREATE TABLE IF NOT EXISTS `airbnb`.`user` (
    `id`       INT         NOT NULL AUTO_INCREMENT,
    `name`     VARCHAR(45) NULL,
    `image_id` INT         NULL,
    PRIMARY KEY (`id`),
    INDEX `fk_user_image1_idx` (`image_id` ASC),
    CONSTRAINT `fk_user_image1`
        FOREIGN KEY (`image_id`)
            REFERENCES `airbnb`.`image` (`id`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION
)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `airbnb`.`accommodation`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `airbnb`.`accommodation` CASCADE;

CREATE TABLE IF NOT EXISTS `airbnb`.`accommodation` (
    `id`                         INT         NOT NULL AUTO_INCREMENT,
    `name`                       VARCHAR(45) NULL,
    `description`                VARCHAR(200) NULL,
    `capacity`                   INT         NULL,
    `accommodation_type`         VARCHAR(45) NULL,
    `bedroom_count`              INT         NULL,
    `restroom_count`             INT         NULL,
    `restroom_type`              VARCHAR(45) NULL,
    `price_per_night`            INT         NULL,
    `discount_percent`           INT         NULL,
    `cleaning_fee_percent`       INT         NULL,
    `service_fee_percent`        INT         NULL,
    `accommodation_tax_percent`  INT         NULL,
    `has_kitchen`                TINYINT     NULL,
    `has_internet`               TINYINT     NULL,
    `has_airconditioner`         TINYINT     NULL,
    `has_hairdrier`              TINYINT     NULL,
    `accommodation_host_user_id` INT         NOT NULL,
    PRIMARY KEY (`id`),
    INDEX `fk_accommodation_user1_idx` (`accommodation_host_user_id` ASC),
    CONSTRAINT `fk_accommodation_user1`
        FOREIGN KEY (`accommodation_host_user_id`)
            REFERENCES `airbnb`.`user` (`id`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION
)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `airbnb`.`accommodation_has_image`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `airbnb`.`accommodation_has_image` CASCADE;

CREATE TABLE IF NOT EXISTS `airbnb`.`accommodation_has_image` (
    `accommodation_id` INT     NOT NULL,
    `image_id`         INT     NOT NULL,
    `is_main_image`    TINYINT NULL,
    PRIMARY KEY (`accommodation_id`, `image_id`),
    INDEX `fk_accommodation_has_image_image1_idx` (`image_id` ASC),
    INDEX `fk_accommodation_has_image_accommodation_idx` (`accommodation_id` ASC),
    CONSTRAINT `fk_accommodation_has_image_accommodation`
        FOREIGN KEY (`accommodation_id`)
            REFERENCES `airbnb`.`accommodation` (`id`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION,
    CONSTRAINT `fk_accommodation_has_image_image1`
        FOREIGN KEY (`image_id`)
            REFERENCES `airbnb`.`image` (`id`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION
)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `airbnb`.`reservation`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `airbnb`.`reservation` CASCADE;

CREATE TABLE IF NOT EXISTS `airbnb`.`reservation` (
    `id`                     INT  NOT NULL AUTO_INCREMENT,
    `user_id`                INT  NOT NULL,
    `accommodation_id`       INT  NOT NULL,
    `reservation_start_date` DATE NULL,
    `reservation_end_date`   DATE NULL,
    `create_date`            DATE NULL,
    PRIMARY KEY (`id`),
    INDEX `fk_user_has_accommodation_accommodation1_idx` (`accommodation_id` ASC),
    INDEX `fk_user_has_accommodation_user1_idx` (`user_id` ASC),
    CONSTRAINT `fk_user_has_accommodation_user1`
        FOREIGN KEY (`user_id`)
            REFERENCES `airbnb`.`user` (`id`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION,
    CONSTRAINT `fk_user_has_accommodation_accommodation1`
        FOREIGN KEY (`accommodation_id`)
            REFERENCES `airbnb`.`accommodation` (`id`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION
)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `airbnb`.`review`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `airbnb`.`review` CASCADE;

CREATE TABLE IF NOT EXISTS `airbnb`.`review` (
    `id`               INT         NOT NULL AUTO_INCREMENT,
    `accommodation_id` INT         NOT NULL,
    `user_id`          INT         NOT NULL,
    `rating`           DOUBLE      NULL,
    `contents`         VARCHAR(45) NULL,
    PRIMARY KEY (`id`),
    INDEX `fk_review_accommodation1_idx` (`accommodation_id` ASC),
    INDEX `fk_review_user1_idx` (`user_id` ASC),
    CONSTRAINT `fk_review_accommodation1`
        FOREIGN KEY (`accommodation_id`)
            REFERENCES `airbnb`.`accommodation` (`id`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION,
    CONSTRAINT `fk_review_user1`
        FOREIGN KEY (`user_id`)
            REFERENCES `airbnb`.`user` (`id`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION
)
ENGINE = InnoDB;
