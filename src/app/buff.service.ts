import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuffService {

  private url1: string;
  private url2: string;
  private url3: string;
  private url4: string;
  private url5: string;
  private url6: string;
  constructor(private http: HttpClient) { 
    this.url1 = 'https://yts.am/api/v2/list_movies.json?sort=seeds&limit=10';
    this.url2 = 'https://yts.am/api/v2/list_movies.json?sort=seeds&limit=27';
    this.url3 = 'https://yts.am/api/v2/movie_details.json?movie_id=';
    this.url4 = 'https://yts.am/api/v2/list_movies.json?genre=sci-fi';
    this.url5 = 'https://yts.am/api/v2/movie_suggestions.json?movie_id=';
    this.url6 = '&with_images=true&with_cast=true';
  }

  carouselDataMovies() {
    return this.http.get(this.url1);
  }
  homePageMovies() {
    return this.http.get(this.url2);
  }
  popUpMovies(selectedId: number) {
    return this.http.get(this.url3 + selectedId);
  }
  sciMovies() {
    return this.http.get(this.url4);
  }
  suggestMovies(selectedId: number) {
    return this.http.get(this.url5 + selectedId);
  }
  movieArtists(selectedId: number) {
    return this.http.get(this.url3 + selectedId + this.url6);
  }
}