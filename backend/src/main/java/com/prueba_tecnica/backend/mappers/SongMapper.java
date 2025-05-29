package com.prueba_tecnica.backend.mappers;

import com.prueba_tecnica.backend.dto.SongRequest;
import com.prueba_tecnica.backend.dto.SongResponse;
import com.prueba_tecnica.backend.models.Song;
import org.springframework.stereotype.Component;

@Component
public class SongMapper {
    public Song toEntity(SongRequest songRequest) {
        return Song.builder()
                .title(songRequest.title())
                .artist(songRequest.artist())
                .album(songRequest.album())
                .year(songRequest.year())
                .genre(songRequest.genre())
                .build();
    }

    public SongResponse toResponse(Song song) {
        return new SongResponse(
                song.getTitle(),
                song.getArtist(),
                song.getAlbum(),
                song.getYear(),
                song.getGenre()
        );
    }
}