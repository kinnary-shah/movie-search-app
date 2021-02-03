import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/interfaces/movie';
import { MovieSearchService } from 'src/app/services/movie-search.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {
  movies: Observable<Array<Movie>>;
  searchText: string;

  constructor(private movieService: MovieSearchService) { }

  ngOnInit() {
  }

  searchMovies($event) {
    if(this.searchText) {
   this.movies= this.movieService.getMovieTitles(this.searchText);
    } else {
      alert('No Search text provided. Please enter atleast 3 characters')
    }

  }

}
