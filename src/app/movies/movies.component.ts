import { Component } from '@angular/core';
import { MovieFilter } from './models/movie-filter.model';
import { MovieServiceService } from './services/movie-service.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent {
  moviesData!: any;
  constructor(public movieService: MovieServiceService) {}
  formSubmitSubs(movieFilter: MovieFilter) {
    console.log('from parent', movieFilter);
    this.movieService.getMovies(movieFilter).subscribe((response) => {
      console.log(response);
      this.moviesData = response;
    });
  }
}
