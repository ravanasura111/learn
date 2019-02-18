import { Component, OnInit } from '@angular/core';
import { BuffService } from '../buff.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movies: [];
  public hmovies: [];
  public sciMovies: [];
  handdleSuccess(res) {
    this.movies = res.data.movies;
  }
  homemoviehanddle(res) {
    this.hmovies = res.data.movies;
  }
  sciMovieSuccess(res) {
    this.sciMovies = res.data.movies;
  }

  constructor(private buff: BuffService) { }

  
  ngOnInit() {
  
    this.buff.carouselDataMovies().subscribe(
      res => {
        this.handdleSuccess(res);
        console.log(res);
      }
    );
    this.buff.homePageMovies().subscribe(
      res => {
        this.homemoviehanddle(res);
        console.log(res);
      }
    );
    this.buff.sciMovies().subscribe(
      res => {
        this.sciMovieSuccess(res);
      }
    );
  }
  reload() {
    window.location.reload();
  }

}
