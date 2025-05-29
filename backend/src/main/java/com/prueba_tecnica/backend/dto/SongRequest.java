package com.prueba_tecnica.backend.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;

public record SongRequest(
        @NotBlank(message = "El título no puede estar vacío")
        String title,
        @NotBlank(message = "El artista no puede estar vacío")
        String artist,
        @NotBlank(message = "El álbum no puede estar vacío")
        String album,
        @NotNull(message = "El año no puede ser nulo")
        @PositiveOrZero(message = "El año debe ser mayor o igual a cero")
        Integer year,
        @NotBlank(message = "El género no puede estar vacío")
        String genre
) {
}
