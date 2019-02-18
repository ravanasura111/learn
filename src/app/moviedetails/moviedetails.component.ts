import { Component, OnInit, ViewChild } from '@angular/core';
import { BuffService } from '../buff.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgxY2PlayerComponent, NgxY2PlayerOptions } from 'ngx-y2-player';
import { PlatformLocation } from '@angular/common' ;
import { HostListener } from '@angular/core';






@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {
  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
    console.log('Back button pressed');
    //Here you can handle your modal
    window.location.reload();
  }
  @ViewChild('video') video: NgxY2PlayerComponent;
 
  public landingUrl: string = "/";
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
  playerOptions: NgxY2PlayerOptions = {
    height: 300, // you can set 'auto', it will use container width to set size
    width: 450,
    // when container resize, it will call resize function, you can custom this by set resizeDebounceTime, default is 200
    resizeDebounceTime: 0,
    // aspectRatio: (3 / 4), // you can set ratio of aspect ratio to auto resize with
  };
  constructor(private bservice: BuffService,
    private router: Router,
    private routes: ActivatedRoute, location: PlatformLocation
    ) { 
     
    }
  ngOnInit() {
    this.router.events.subscribe(() =>
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    );
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
  pause() {
    this.video.videoPlayer.pauseVideo();
  }
  play() {
    this.video.videoPlayer.playVideo();
  }
  stop() {
    this.video.videoPlayer.stopVideo();
  }
  go(second) {
    this.video.videoPlayer.seekTo(second, true);
  }
 
  onReady(event) {
    console.log('ready');
    console.log(event);
  }
 
  onStateChange(event) {
    console.log('change');
    console.log(event);
  }
  reload() {
   
      window.location.reload(); 
    
  }

}
