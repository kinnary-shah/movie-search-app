import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CartItems } from '../interfaces/cart-items';

@Injectable({
  providedIn: 'root'
})
export class MovieSearchService {
  count:number;
  items = [];


  constructor(private httpClient: HttpClient) { }
  

  getMovieTitles(title:string):Observable<any> {
    const url="http://www.omdbapi.com/?apikey=bffa2e4a&s="+title;
    return this.httpClient.get(url)
    .pipe(
      map((res: any)=>  res
    ))
  }

  addToCart(payload) {

   let cartItem = new CartItems();
    cartItem.title = payload.Title;
    cartItem.imdbID = payload.imdbID;
    cartItem.Poster = payload.Poster;
    this.items.push(cartItem);
    cartItem.sendCmd('REFRESH');
   // return this.httpClient.post(`${environment.baseURL}/cart`, payload);
  }

  getCartItems()  {
    return this.items;

  }
}
