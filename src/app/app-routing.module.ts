import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { CartItemsComponent } from './components/cart-items/cart-items.component';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';

const routes: Routes = [
  {
    path: 'cart',
    component: CartItemsComponent
  },
  {
    path: 'home',
    component: MovieSearchComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
},
{
  path: 'about',
  component: AboutMeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
