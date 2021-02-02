import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartItems } from 'src/app/interfaces/cart-items';
import { MovieSearchService } from 'src/app/services/movie-search.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit{
  count=0;

  constructor(private movieService: MovieSearchService) { }

  ngOnInit() {
  }


  getCount() {
    this.count = this.movieService.getCartItems().length;
  }



}

