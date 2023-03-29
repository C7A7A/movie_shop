package com.shop.backend.movies;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;

@Entity()
@Table(name = "movies")
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @NotBlank
    private String title;
    @Enumerated(EnumType.STRING)
    private MovieCategory category;
    private Integer productionYear;
    @Column(columnDefinition = "TEXT")
    private String description;

    private String posterName;
    private Double price;
    @NotEmpty
    public Movie() {

    }
    public Movie(String title, MovieCategory category, Integer productionYear, String description, String posterName, Double price) {
        this.title = title;
        this.category = category;
        this.productionYear = productionYear;
        this.description = description;
        this.posterName = posterName;
        this.price = price;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public MovieCategory getCategory() {
        return category;
    }

    public void setCategory(MovieCategory category) {
        this.category = category;
    }

    public Integer getProductionYear() {
        return productionYear;
    }

    public void setProductionYear(Integer productionYear) {
        this.productionYear = productionYear;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPosterName() {
        return posterName;
    }

    public void setPosterName(String posterName) {
        this.posterName = posterName;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }
}
