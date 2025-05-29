package com.prueba_tecnica.backend.mappers;

import com.prueba_tecnica.backend.dto.PlayListRequest;
import com.prueba_tecnica.backend.dto.PlayListResponse;
import com.prueba_tecnica.backend.dto.SongResponse;
import com.prueba_tecnica.backend.models.PlayList;
import com.prueba_tecnica.backend.models.Song;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PlayListMapper {

    private final SongMapper songMapper;

    public PlayList toEntity(PlayListRequest request) {
        PlayList playlist = new PlayList();
        playlist.setName(request.name());
        playlist.setDescription(request.description());

        if (request.songs() != null) {
            List<Song> songs = request.songs().stream()
                    .map(songMapper::toEntity)
                    .peek(song -> song.setPlaylist(playlist))
                    .collect(Collectors.toList());

            playlist.setSongs(songs);
        }

        return playlist;
    }

    public PlayListResponse toResponse(PlayList playlist) {
        List<SongResponse> songResponses = playlist.getSongs().stream()
                .map(songMapper::toResponse)
                .collect(Collectors.toList());

        return new PlayListResponse(
                playlist.getId(),
                playlist.getName(),
                playlist.getDescription(),
                songResponses
        );
    }
}