import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CartItemsComponent } from './components/cart-items/cart-items.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { TruncateTextPipe } from './truncate-text.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MovieSearchComponent,
    MovieDetailComponent,
    NavBarComponent,
    CartItemsComponent,
    AboutMeComponent,
    TruncateTextPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
