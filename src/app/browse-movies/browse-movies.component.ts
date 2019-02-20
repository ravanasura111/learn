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
  public quality:any [];
  public qualitySelected: string;
  public genres:any [];
  public genresSelected: string;
  public ratings:any [];
  public ratingSelected: number;
  public orderBy: any[];
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
      this.qualitySelected = '';
      this.searchName = '';
      this.genresSelected = '';
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
        this.quality = [
          {name: '720'},
          {name: '1080'},
          {name: '3D'}
        ];
        this.genres = [
          { name: 'Action'},
           { name: 'Adventure'},
           { name: 'Animation'},
           { name: 'Biography'},
           { name: 'Comedy'},
           { name: 'Crime'},
           { name: 'Documentary'},
           { name: 'Drama'},
           { name: 'Family'},
           { name: 'Fantasy'},
           { name: 'Film-Noir'},
           { name: 'Game-Show'},
           { name: 'History'},
           { name: 'Horror'},
           { name: 'Music'},
           { name: 'Musical'},
           { name: 'Mystery'},
           { name: 'News'},
           { name: 'Reality-Tv'},
           { name: 'Romance'},
           { name: 'Sci-Fi'},
           { name: 'Sport'},
           { name: 'Talk-Show'},
           { name: 'Thriller'},
           { name: 'War'},
           { name: 'Western'}
        ];
        this.ratings = [
          {id: 9, name: '9+'},
          {id: 8, name: '8+'},
          {id: 7, name: '7+'},
          {id: 6, name: '6+'},
          {id: 5, name: '5+'},
          {id: 4, name: '4+'},
          {id: 3, name: '3+'},
          {id: 2, name: '2+'},
          {id: 1, name: '1+'},
          {id: 0, name: 'All'}
        ];
        this.ratingSelected = 0;
        this.orderBy = [
          {name: 'Latest'},
          {name: 'Oldest'},
          {name: 'Seeds'},
          {name: 'Peers'},
          {name: 'Year'},
          {name: 'Rating'},
          {name: 'Likes'},
          {name: 'Alphabets'},
          {name: 'Download'},
        ];
  }
  
  searchMovies(searchName: string, paging: number, qualitySelected:string, genresSelected:string, ratingSelected:number) {
    if(this.results === true) {
      this.pages = false;
      this.myPages = true;
     
    } else {
      this.pages = true;
      this.myPages = false;
    }
    this.buff.searchMovies(searchName, paging, qualitySelected, genresSelected, ratingSelected).subscribe(
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
