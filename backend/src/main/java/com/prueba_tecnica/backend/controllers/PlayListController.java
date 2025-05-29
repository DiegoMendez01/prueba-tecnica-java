package com.prueba_tecnica.backend.controllers;

import com.prueba_tecnica.backend.dto.PlayListRequest;
import com.prueba_tecnica.backend.dto.PlayListResponse;
import com.prueba_tecnica.backend.services.servicesImplementation.PlayListService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/lists")
@RequiredArgsConstructor
public class PlayListController {
    private final PlayListService playListService;

    @PostMapping
    public ResponseEntity<PlayListResponse> createPlayList(
            @Valid @RequestBody PlayListRequest request
    ) {
        return ResponseEntity.ok(playListService.createPlayList(request));
    }

    @GetMapping
    public ResponseEntity<List<PlayListResponse>> getAllPlayLists() {
        return ResponseEntity.ok(playListService.getAllPlayLists());
    }

    @GetMapping("/{listName}")
    public ResponseEntity<PlayListResponse> getPlayListByName(@PathVariable String listName) {
        PlayListResponse response = playListService.getPlayListByName(listName);
        if (response == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{listName}")
    public ResponseEntity<Void> deletePlayListByName(@PathVariable String listName) {
        boolean deleted = playListService.deletePlayListByName(listName);
        if (!deleted) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.noContent().build();
    }
}