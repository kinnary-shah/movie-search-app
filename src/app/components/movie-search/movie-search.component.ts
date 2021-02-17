import { Component, Input, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from 'src/app/interfaces/movie';
import { MovieSearchService } from 'src/app/services/movie-search.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {
  movies: Movie[];
  searchText: string;
  result: number;
  showCount:boolean=false;
  @Input() progressBarValue:any =0;
  count=0;
  scroll$:Observable<Event> = fromEvent(document, 'scroll');

  constructor(private movieService: MovieSearchService) { }

  ngOnInit() {
  }

  searchMovies($event) {
    if(this.searchText) {
   this.movieService.getMovieTitles(this.searchText).subscribe(res=>{
   // this.movies= res;
   this.movies=res.Search;
   if(res.totalResults>0) {
   this.result=res.totalResults;
   this.showCount=true;
   }
   });
    } else {
      alert('No Search text provided. Please enter atleast 3 characters')
    }

  }

  progress$ = this.scroll$.pipe(
    map(({ target }: any) => {
      const { scrollTop, scrollHeight, clientHeight } = target.scrollingElement;
      return (scrollTop / (scrollHeight - clientHeight)) * 100;

    })).subscribe(percent => {
      this.progressBarValue = `${percent}%`;
    });

}
