import { Routes } from '@angular/router';
import { PlaylistFormComponent } from './components/playlist-form/playlist-form.component';
import { PlaylistListComponent } from './components/playlist-list/playlist-list.component';

export const routes: Routes = [
  { path: 'create', component: PlaylistFormComponent },
  { path: 'lists', component: PlaylistListComponent },
];
