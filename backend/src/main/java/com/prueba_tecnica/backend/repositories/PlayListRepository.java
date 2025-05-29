package com.prueba_tecnica.backend.repositories;

import com.prueba_tecnica.backend.models.PlayList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PlayListRepository extends JpaRepository<PlayList, Integer> {
    Optional<PlayList> findByName(String name);
    boolean existsByName(String name);
    void deleteByName(String name);
}