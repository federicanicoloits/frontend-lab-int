package com.mockAPI.MOCK.controller;

import com.mockAPI.MOCK.model.Partite;
import com.mockAPI.MOCK.model.response.SquadreConStats;
import com.mockAPI.MOCK.simulaDB.fintoDB;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class PartiteController
{

    private final fintoDB DB;

    @Autowired
    public PartiteController(fintoDB db)
    {
        this.DB = db;
    }



    @GetMapping("/matches/allmatches")
    public ResponseEntity<?> Risultati()
    {
        return new ResponseEntity<>(DB.getPartite(), HttpStatus.OK);
    }

    @GetMapping("/matches/lastmatches")
    public ResponseEntity<?> UltimiRisultati()
    {
        Partite[] partite = DB.getPartite();
        return new ResponseEntity<>(partite[0], HttpStatus.OK);
    }

    @GetMapping("/match")
    public ResponseEntity<?> Risultato(@RequestParam int id)
    {
        Partite[] partite = DB.getPartite();

        return new ResponseEntity<>(partite[id],HttpStatus.OK);
    }

}
