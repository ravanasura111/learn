import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrowseMoviesComponent } from './browse-movies/browse-movies.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { MoviedetailsComponent } from '../app/moviedetails/moviedetails.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'browse', component: BrowseMoviesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'help', component: HelpComponent},
  { path: 'moviedetails/:id', component: MoviedetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
