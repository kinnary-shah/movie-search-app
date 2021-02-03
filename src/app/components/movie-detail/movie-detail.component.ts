import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { MovieSearchService } from 'src/app/services/movie-search.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  @Input() movie: Movie;

  constructor(private movieService: MovieSearchService) { }

  ngOnInit() {
  }

  addToCart() {
    alert('Would you like to add the movie to cart? ');
    this.movieService.addToCart(this.movie)
  }

}
