package com.codesquad.airbnb.accommodation.controller;

public final class AccommodationHostBuilder {
    private Long id;
    private String name;
    private String image;

    private AccommodationHostBuilder() {
    }

    public static AccommodationHostBuilder anAccommodationHost() {
        return new AccommodationHostBuilder();
    }

    public AccommodationHostBuilder id(Long id) {
        this.id = id;
        return this;
    }

    public AccommodationHostBuilder name(String name) {
        this.name = name;
        return this;
    }

    public AccommodationHostBuilder image(String image) {
        this.image = image;
        return this;
    }

    public AccommodationHost build() {
        return new AccommodationHost(id, name, image);
    }
}
