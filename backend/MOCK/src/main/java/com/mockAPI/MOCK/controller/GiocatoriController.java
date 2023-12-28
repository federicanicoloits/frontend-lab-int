package com.mockAPI.MOCK.controller;

import com.mockAPI.MOCK.model.response.GiocatoreConStat;
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
public class GiocatoriController {

    private final fintoDB DB;

    @Autowired
    public GiocatoriController(fintoDB db) { this.DB = db; }

    //tutti giocatori
    @GetMapping("/players")
    public ResponseEntity<?> Giocatori()
    {

        return new ResponseEntity<>(DB.getGiocatoriR(), HttpStatus.OK);
    }
    //un giocatore
    @GetMapping("/player")
    public ResponseEntity<?> Giocatore(@RequestParam int id)
    {
        GiocatoreConStat[] giocatori = DB.getGiocatoriR();

        return new ResponseEntity<>(giocatori[id],HttpStatus.OK);
    }
}
