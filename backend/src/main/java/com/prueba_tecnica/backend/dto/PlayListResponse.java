package com.prueba_tecnica.backend.dto;

import java.util.List;

public record PlayListResponse(
        Long id,
        String name,
        String description,
        List<SongResponse> songs
) {
}