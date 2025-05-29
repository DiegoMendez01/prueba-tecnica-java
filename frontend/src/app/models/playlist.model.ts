import { Song } from './song.model';

export interface Playlist {
  id?: number;
  name: string;
  description?: string;
  songs?: Song[];
}
