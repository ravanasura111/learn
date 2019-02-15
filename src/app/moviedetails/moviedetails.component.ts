import { Component, OnInit } from '@angular/core';
import { BuffService } from '../buff.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {
  public selected: number;
  public moviedetails: any = [];
  public suggestMovies: [];
  public movieCast: any = [];
  moviedetailsSuccess(res) {
    this.moviedetails = res.data.movie;
  }
  suggestedSuccess(res) {
    this.suggestMovies = res.data.movies;
  }
  movieCastSuccess(res) {
    this.movieCast = res.data.movie;
  }

  constructor(private bservice: BuffService,
    private router: Router,
    private routes: ActivatedRoute,
  ) { }
  ngOnInit() {
    this.routes.paramMap.subscribe(
      params => {
        this.selected = +(params.get('id'));
      }
    );
    this.bservice.popUpMovies(this.selected).subscribe(
      res => {
        this.moviedetailsSuccess(res);
      }
    );
    this.bservice.suggestMovies(this.selected).subscribe(
      res => {
        this.suggestedSuccess(res);
        console.log(res);
      }
    );
    this.bservice.movieArtists(this.selected).subscribe(
      res => {
        this.movieCastSuccess(res);
        console.log(res);
      }
    );

  }
  reload() {
    window.location.reload();
  }

}
