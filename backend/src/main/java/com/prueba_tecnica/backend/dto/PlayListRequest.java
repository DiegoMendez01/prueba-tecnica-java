package com.prueba_tecnica.backend.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.util.List;

public record PlayListRequest(
        @NotBlank(message = "El nombre es obligatorio")
        @Size(max = 100, message = "El nombre no puede superar 100 caracteres")
        String name,
        @Size(max = 255, message = "La descripción no puede superar 255 caracteres")
        String description,
        List<SongRequest> songs
) {
}