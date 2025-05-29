import { Injectable } from '@angular/core';
import { Playlist } from '../models/playlist.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  private apiUrl = 'http://localhost:8080/lists';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(this.apiUrl);
  }

  getByName(name: string): Observable<Playlist> {
    return this.http.get<Playlist>(`${this.apiUrl}/${name}`);
  }

  create(playlist: Playlist): Observable<Playlist> {
    return this.http.post<Playlist>(this.apiUrl, playlist);
  }

  delete(name: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${name}`);
  }
}
