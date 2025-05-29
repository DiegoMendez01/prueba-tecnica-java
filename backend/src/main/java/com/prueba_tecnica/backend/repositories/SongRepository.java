package com.prueba_tecnica.backend.repositories;

import com.prueba_tecnica.backend.models.Song;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SongRepository extends JpaRepository<Song, Long> {

}