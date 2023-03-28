package com.shop.backend.movies;


import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {

    private final MovieRepository repository;

    public MovieService(MovieRepository repository) {
        this.repository = repository;
    }

    public List<Movie> getMovies() {
        return repository.findAll();
    }

    public Movie getMovie(Long movieId) {
        return repository.findById(movieId).orElseThrow();
    }

    public Movie createMovie(Movie movie) {
        return repository.save(movie);
    }

    public void deleteMovie(Long movieId) {
        repository.deleteById(movieId);
    }
}
