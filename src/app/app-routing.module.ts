import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { TracksComponent } from './tracks/tracks.component';
import { ArtistsComponent } from './artists/artists.component';
import { AlbumsComponent } from './albums/albums.component';

const routes: Routes = [
  { path:'search', component: SearchComponent},
  { path:'tracks/:id', component: TracksComponent},
  { path:'albums/:id', component: AlbumsComponent},
  { path:'artists/:id', component: ArtistsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
