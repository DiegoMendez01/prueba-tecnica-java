import { Routes } from '@angular/router';
import { PlaylistFormComponent } from './components/playlist-form/playlist-form.component';
import { PlaylistListComponent } from './components/playlist-list/playlist-list.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create', component: PlaylistFormComponent },
  { path: 'lists', component: PlaylistListComponent },
  { path: 'login', component: LoginComponent },
];
