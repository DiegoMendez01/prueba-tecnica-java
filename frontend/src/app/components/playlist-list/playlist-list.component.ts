import { Component, OnInit } from '@angular/core';
import { Playlist } from '../../models/playlist.model';
import { PlaylistService } from '../../services/playlist.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-playlist-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './playlist-list.component.html',
  styleUrl: './playlist-list.component.css',
})
export class PlaylistListComponent implements OnInit {
  playlists: Playlist[] = [];
  filteredPlaylists: Playlist[] = [];
  filterText: string = '';
  errorMessage: string = '';

  constructor(private playlistService: PlaylistService) {}

  ngOnInit(): void {
    this.loadPlaylists();
  }

  loadPlaylists() {
    this.playlistService.getAll().subscribe({
      next: (data) => {
        this.playlists = data;
        this.applyFilter();
      },
      error: () => {
        this.errorMessage = 'Error al cargar las playlists.';
      },
    });
  }

  deletePlaylist(name?: string) {
    if (!name) return;

    if (!confirm('¿Está seguro de eliminar esta playlist?')) {
      return;
    }

    this.playlistService.delete(name).subscribe({
      next: () => {
        this.loadPlaylists();
      },
      error: () => {
        this.errorMessage = 'Error al eliminar la playlist.';
      },
    });
  }

  applyFilter() {
    const filter = this.filterText.toLowerCase();
    this.filteredPlaylists = this.playlists.filter((p) =>
      p.name.toLowerCase().includes(filter)
    );
  }
}
