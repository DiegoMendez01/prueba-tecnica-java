package com.prueba_tecnica.backend.services.servicesImplementation.servicesImplementation;

import com.prueba_tecnica.backend.dto.PlayListRequest;
import com.prueba_tecnica.backend.dto.PlayListResponse;
import com.prueba_tecnica.backend.mappers.PlayListMapper;
import com.prueba_tecnica.backend.models.PlayList;
import com.prueba_tecnica.backend.repositories.PlayListRepository;
import com.prueba_tecnica.backend.services.servicesImplementation.PlayListService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class PlayListServiceImpl implements PlayListService {

    private final PlayListRepository playListRepository;
    private final PlayListMapper playListMapper;

    @Override
    public PlayListResponse createPlayList(PlayListRequest request) {
        if (playListRepository.existsByName(request.name())) {
            throw new IllegalArgumentException("El nombre ya existe");
        }

        PlayList playlist = playListMapper.toEntity(request);
        PlayList saved = playListRepository.save(playlist);

        return playListMapper.toResponse(saved);
    }

    @Override
    public List<PlayListResponse> getAllPlayLists() {
        return playListRepository.findAll()
                .stream()
                .map(playListMapper::toResponse)
                .toList();
    }

    @Override
    public PlayListResponse getPlayListByName(String name) {
        return playListRepository.findByName(name)
                .map(playListMapper::toResponse)
                .orElse(null);
    }

    @Override
    public boolean deletePlayListByName(String name) {
        if (!playListRepository.existsByName(name)) {
            return false;
        }
        playListRepository.deleteByName(name);
        return true;
    }
}