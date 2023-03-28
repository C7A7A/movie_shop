package com.shop.backend.movies;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/movies")
public class MovieController {
    private final MovieService movieService;

    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    // TODO: ResponseEntity
    @GetMapping
    public List<Movie> index() {
        return movieService.getMovies();
    }

    @GetMapping("/{movieId}")
    public Movie show(@PathVariable Long movieId) {
        return movieService.getMovie(movieId);
    }

    @PostMapping
    public Movie create(@RequestBody Movie movie) {
        return movieService.createMovie(movie);
    }

    @DeleteMapping("/{movieId}")
    public void delete(@PathVariable Long movieId) {
        movieService.deleteMovie(movieId);
    }
}
