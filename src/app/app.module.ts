import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowseMoviesComponent } from './browse-movies/browse-movies.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { FooterComponent } from './footer/footer.component';
import { AccountComponent } from './account/account.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BuffService } from '../app/buff.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrowseMoviesComponent,
    MoviedetailsComponent,
    ContactComponent,
    HelpComponent,
    FooterComponent,
    AccountComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    AngularFontAwesomeModule,
    HttpClientModule,FormsModule
  ],
  providers: [BuffService],
  bootstrap: [AppComponent]
})
export class AppModule { }
