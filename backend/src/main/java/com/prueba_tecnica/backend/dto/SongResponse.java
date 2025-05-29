package com.prueba_tecnica.backend.dto;

public record SongResponse(
        String title,
        String artist,
        String album,
        Integer year,
        String genre
) {
}