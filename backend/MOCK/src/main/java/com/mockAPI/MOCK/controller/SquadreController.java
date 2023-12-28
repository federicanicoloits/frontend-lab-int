package com.mockAPI.MOCK.controller;


import com.mockAPI.MOCK.model.Squadra;
import com.mockAPI.MOCK.model.StatisticheSquadra;
import com.mockAPI.MOCK.model.response.GiocatoreConStat;
import com.mockAPI.MOCK.model.response.SquadreConStats;
import com.mockAPI.MOCK.simulaDB.fintoDB;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;

import static java.util.Collections.sort;


@CrossOrigin
@RestController
public class SquadreController {

    private final fintoDB DB;

    @Autowired
    public SquadreController(fintoDB db)
    {
        this.DB = db;
    }

    @GetMapping("/teams")
    public ResponseEntity<?> Squadre()
    {
        return new ResponseEntity<>(DB.getSquadreS(), HttpStatus.OK);
    }

    @GetMapping("/standings")
    public ResponseEntity<?> Classifica(){

        List<SquadreConStats> squadre = new java.util.ArrayList<>(Arrays.stream(DB.getSquadreS()).toList());

        squadre.sort(Comparator.comparing(SquadreConStats::getPunti).reversed());

        return new ResponseEntity<>(squadre, HttpStatus.OK);
    }

    @GetMapping("/team")
    public ResponseEntity<?> Squadra(@RequestParam int id)
    {
        SquadreConStats[] squadre = DB.getSquadreS();

        return new ResponseEntity<>(squadre[id],HttpStatus.OK);
    }

}