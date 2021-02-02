import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CartItems } from 'src/app/interfaces/cart-items';
import { MovieSearchService } from 'src/app/services/movie-search.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent implements OnInit, OnDestroy {
  cartItems: any[];
  subscriptions: Subscription[] = [];
  @Input() cartItem:CartItems;

  constructor(private movieService: MovieSearchService) { }

  ngOnInit() {
    this.cartItems=this.movieService.getCartItems();
  }
  
  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  setupEventObserver() {
    if(this.cartItem.events$) {
    this.subscriptions.push(
      this.cartItem.events$.subscribe(action => {
        if(action === "REFRESH") {
          this.cartItems = this.movieService.getCartItems();
        }
      })
    )}
  }

}
