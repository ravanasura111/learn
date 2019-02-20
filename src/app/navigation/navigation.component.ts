import { Component, OnInit } from '@angular/core';
import { BuffService } from '../buff.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public quickSearch: string;
  public quickMovies:any [];
  public quicksearching: boolean;
  quickSearchSuccess(res) {
    this.quickMovies = res.data.movies;
  }
  constructor(private buff: BuffService) {
     this.quicksearching = false;
   }

  ngOnInit() {
   
  }
  searchMovies(quickSearch: string) {
   if(this.quickSearch === '' ) {
     this.quicksearching = false;
   }else {
     this.quicksearching = true;
   }
    this.buff.searchMoviesForNav(quickSearch).subscribe(
      res => {
        this.quickSearchSuccess(res);
      }
    );
  }
  reload(){
    window.location.reload();
  }


}
