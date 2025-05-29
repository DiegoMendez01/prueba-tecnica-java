package com.prueba_tecnica.backend.repositories;

import com.prueba_tecnica.backend.models.PlayList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlayListRepository extends JpaRepository<PlayList, Integer> {

}