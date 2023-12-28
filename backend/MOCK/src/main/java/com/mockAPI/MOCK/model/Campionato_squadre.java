package com.mockAPI.MOCK.model;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;


public class Campionato_squadre
{
    public int id_squadra;
    public int id_campionato; //fk
    public int stagione; //fk

    public Campionato_squadre(int id_squadra, int id_campionato, int stagione) {
        this.id_squadra = id_squadra;
        this.id_campionato = id_campionato;
        this.stagione = stagione;
    }
}