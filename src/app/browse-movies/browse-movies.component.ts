import { Component, OnInit } from '@angular/core';
import { BuffService } from '../buff.service';
import { PlatformLocation } from '@angular/common' ;
import { HostListener } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';



@Component({
  selector: 'app-browse-movies',
  templateUrl: './browse-movies.component.html',
  styleUrls: ['./browse-movies.component.css']
})
export class BrowseMoviesComponent implements OnInit {
  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
    console.log('Back button pressed');
    //Here you can handle your modal
  }
  public movies:any [];
  public homePage:any [];
  public searchName: string;
  public pageNumber: number;
  public p: number ;
  public per: number;
  public searchPage:any = [];
  public results: boolean;
  public pages: boolean;
  public myPages: boolean;
  public searchPagesByInput:any = []; 
  handdleSuccessMovies(res) {
    this.movies = res.data.movies;
  }
  homePageMovieSuccess(res) {
    this.homePage = res.data.movies;
  }
  handdlePageMovies(res) {
    this.searchPage = res.data;
  }
  handdleSearchPagesByInput(res) {
    this.searchPagesByInput = res.data;
  }
  constructor(private buff: BuffService, location: PlatformLocation, private router: Router,
    private routes: ActivatedRoute,) {
      this.p = 1;
      this.per = 1;
      this.results = true;
      this.pages = true;
      this.myPages = false;
    }

  ngOnInit() {
    this.getHomePage(1);
    this.router.events.subscribe(() =>
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  );
  }
  searchMovies(searchName: string, paging: number) {
    if(this.results === true) {
      this.pages = false;
      this.myPages = true;
     
    } else {
      this.pages = true;
      this.myPages = false;
    }
    this.buff.searchMovies(searchName, paging).subscribe(
      res => {
          this.handdleSuccessMovies(res);
          this.handdleSearchPagesByInput(res);
          this.per = paging;
      }

    );
  }
  getHomePage(pageNumber) {
    this.buff.pagination(pageNumber).subscribe(
      res => {
        this.homePageMovieSuccess(res);
        this.handdlePageMovies(res);
        localStorage.setItem('currentPage', pageNumber);
        this.p = pageNumber;
      }
    );
    
  }
  
}
