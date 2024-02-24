import { Injectable } from '@angular/core';
import { MovieFilter } from '../models/movie-filter.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environments } from '../../environment/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieServiceService {
  constructor(public httpClient: HttpClient) {}
  getMovies(filter: MovieFilter) {
    let httpHeaders = new HttpHeaders().set(
      'X-RapidAPI-Key',
      'c6b5ac88f7msh192c3d2e63a0e92p17799djsn375994122d42'
    );
    let fullApiUrl = `${environments.moviesBaseApi}/title/v2/find?title=${filter.search}&limit=4&paginationKey=0`;
    return this.httpClient.get(fullApiUrl, { headers: httpHeaders });
    // .pipe(
    //   map((movieData: any) => {
    //     movieData.results = movieData.results.filter(
    //       (item: any) => item.image && item.image.url
    //     );
    //     return movieData;
    //   })
    // );
  }
}



















