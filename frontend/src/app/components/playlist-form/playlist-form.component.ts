import { Component } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PlaylistService } from '../../services/playlist.service';
import { Playlist } from '../../models/playlist.model';
import { Song } from '../../models/song.model';

@Component({
  selector: 'app-playlist-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './playlist-form.component.html',
  styleUrl: './playlist-form.component.css',
})
export class PlaylistFormComponent {
  currentYear = new Date().getFullYear();

  constructor(private playlistService: PlaylistService) {}

  playlistForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl(''),
    songs: new FormArray([this.createSongGroup()]),
  });

  submitted = false;
  successMessage = '';
  errorMessage = '';

  get songs(): FormArray {
    return this.playlistForm.get('songs') as FormArray;
  }

  get songsControls() {
    return this.songs.controls;
  }

  createSongGroup(): FormGroup {
    return new FormGroup({
      title: new FormControl('', Validators.required),
      artist: new FormControl(''),
      album: new FormControl(''),
      year: new FormControl(null, [
        Validators.min(1900),
        Validators.max(this.currentYear),
      ]),
      genre: new FormControl(''),
    });
  }

  addSong() {
    this.songs.push(this.createSongGroup());
  }

  removeSong(index: number) {
    this.songs.removeAt(index);
  }

  onSubmit() {
    this.submitted = true;
    this.successMessage = '';
    this.errorMessage = '';

    if (this.playlistForm.invalid) {
      this.errorMessage =
        'Por favor, complete todos los campos requeridos correctamente.';
      return;
    }

    const name = this.playlistForm.get('name')!.value;
    if (!name) {
      this.errorMessage = 'El nombre es obligatorio.';
      return;
    }

    const description = this.playlistForm.get('description')!.value || '';
    const songsRaw = this.playlistForm.get('songs')!.value || [];

    const songs: Song[] = songsRaw.map((s: any) => ({
      title: s.title ?? '',
      artist: s.artist ?? '',
      album: s.album ?? '',
      year: s.year ?? null,
      genre: s.genre ?? '',
    }));

    const playlistData: Playlist = {
      name,
      description,
      songs,
    };

    this.playlistService.create(playlistData).subscribe({
      next: () => {
        this.successMessage = 'Playlist creada correctamente.';
        this.playlistForm.reset();
        this.songs.clear();
        this.addSong();
        this.submitted = false;
      },
      error: () => {
        this.errorMessage = 'Error al crear la playlist.';
      },
    });
  }
}
