package com.prueba_tecnica.backend.services.servicesImplementation;

import com.prueba_tecnica.backend.dto.PlayListRequest;
import com.prueba_tecnica.backend.dto.PlayListResponse;

import java.util.List;

public interface PlayListService {
    PlayListResponse createPlayList(PlayListRequest request);
    List<PlayListResponse> getAllPlayLists();
    PlayListResponse getPlayListByName(String name);
    boolean deletePlayListByName(String name);
}