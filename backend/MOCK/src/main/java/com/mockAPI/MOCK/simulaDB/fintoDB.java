package com.mockAPI.MOCK.simulaDB;


import com.mockAPI.MOCK.model.*;
import com.mockAPI.MOCK.model.response.GiocatoreConStat;
import com.mockAPI.MOCK.model.response.SquadreConStats;
import org.springframework.stereotype.Component;

import java.sql.Date;
import java.sql.Timestamp;


@Component
public class fintoDB {
    Squadra inter = new Squadra(505,"INTER",907,"italia",1908,false,"https://media-4.api-sports.io/football/teams/505.png");
    Squadra milan = new Squadra(489,"AC MILAN",907,"italia",1899,false,"https://media-4.api-sports.io/football/teams/489.png");
    Squadra juve = new Squadra(496,"JUVENTUS",909,"italia",1897,false,"https://media-4.api-sports.io/football/teams/496.png");

    Stadio Allianz = new Stadio(909,"Allianz Stadium","Strada Comunale di Altessano 131","Torino",45666,"grass","https://media-4.api-sports.io/football/venues/909.png");
    Stadio SanSiro = new Stadio(907,"Stadio Giuseppe Meazza","Via Piccolomini 5","Milano",80018,"grass","https://media-4.api-sports.io/football/venues/907.png");

    Giocatore giocatore1 = new Giocatore(1, "Mario", "Rossi", new Date(1990, 5, 15), "Italiana", "175 cm", "70 kg", false, "/path/to/mario_rossi.jpg");
    Giocatore giocatore2 = new Giocatore(2, "Luigi", "Verdi", new Date(1988, 8, 20), "Italiana", "180 cm", "75 kg", true, "/path/to/luigi_verdi.jpg");
    Giocatore giocatore3 = new Giocatore(3, "Paola", "Bianchi", new Date(1995, 3, 10), "Italiana", "165 cm", "60 kg", false, "/path/to/paola_bianchi.jpg");


    StatisticheGiocatore giocatore1S = new StatisticheGiocatore(1, 2023, 1, 15, 10, 900, "Centrocampista", 7.5f, 5, 3, 20, 10, 5, 3, 300, 15, 25, 8, 10, 40, 30, 15, 12, 8, 12, 2, 0, 0, 2, 1, 0);

    StatisticheGiocatore giocatore2S = new StatisticheGiocatore(2, 2023, 2, 12, 8, 800, "Attaccante", 8.0f, 3, 2, 25, 15, 7, 5, 250, 20, 20, 5, 8, 35, 25, 20, 18, 5, 10, 1, 0, 0, 3, 0, 1);

    StatisticheGiocatore giocatore3S = new StatisticheGiocatore(3, 2023, 1, 20, 18, 1800, "Difensore", 7.0f, 2, 1, 5, 2, 1, 2, 400, 25, 30, 12, 15, 50, 40, 10, 8, 10, 8, 3, 0, 0, 0, 0, 0);

    StatisticheSquadra interS = new StatisticheSquadra(505,2023,25,10,"WDWWD","PROMOTION - CHAMPIONS",15,7,5,3,20,10);

    StatisticheSquadra milanS = new StatisticheSquadra(489,2023,32,15,"WWWWW","PROMOTION - CHAMPIONS",15,10,2,3,30,15);

    StatisticheSquadra juveS = new StatisticheSquadra(486,2023,18,-5,"DDDWD","PROMOTION - CHAMPIONS",15,4,6,5,15,20);

    GiocatoreConStat giocatore1R = new GiocatoreConStat(0, "Mario", "Rossi", new Date(1990, 5, 15), "Italiana", "180 cm", "75 kg", false, "mario_rossi.jpg", 2023, 1, 15, 10, 900, "Centrocampista", 7.5f, 5, 3, 20, 10, 5, 3, 300, 15, 25, 8, 10, 40, 30, 15, 12, 8, 12, 2, 0, 0, 2, 1, 0);

    GiocatoreConStat giocatore2R = new GiocatoreConStat(1, "Luigi", "Verdi", new Date(1988, 7, 21), "Italiana", "175 cm", "70 kg", false, "luigi_verdi.jpg", 2023, 2, 12, 8, 800, "Attaccante", 8.0f, 3, 2, 25, 15, 7, 5, 250, 20, 20, 5, 8, 35, 25, 20, 18, 5, 10, 1, 0, 0, 3, 0, 1);

    GiocatoreConStat giocatore3R = new GiocatoreConStat(2, "Giulia", "Bianchi", new Date(1995, 4, 10), "Italiana", "160 cm", "55 kg", false, "giulia_bianchi.jpg", 2023, 1, 20, 18, 1800, "Difensore", 7.0f, 2, 1, 5, 2, 1, 2, 400, 25, 30, 12, 15, 50, 40, 10, 8, 10, 8, 3, 0, 0, 0, 0, 0);

    SquadreConStats squadra1 = new SquadreConStats(0, "Juventus", 909, "Italia", 1897, false, "juventus_logo.png", 2023, 1, 30, 20, "4-3-3", "La Vecchia Signora", 38, 25, 10, 3, 70, 30);

    SquadreConStats squadra2 = new SquadreConStats(1, "Milan", 907, "Italia", 1899, false, "barcelona_logo.png", 2023, 2, 28, 18, "4-4-2", "Blaugrana", 38, 23, 9, 6, 80, 40);

    SquadreConStats squadra3 = new SquadreConStats(2, "Inter", 907, "Italia", 1900, false, "bayern_logo.png", 2023, 3, 25, 15, "4-2-3-1", "Die Roten", 38, 20, 5, 13, 65, 45);


    Partite partita1 = new Partite(0, 1, 2, 1, 1, "John Doe", new Timestamp(System.currentTimeMillis()), "Conclusa", 2, 1, 0, 0, 3, 2);

    Partite partita2 = new Partite(1, 2, 3, 2, 1, "Jane Smith", new Timestamp(System.currentTimeMillis()), "In Corso", 1, 1, 1, 0, 0, 0);

    Partite partita3 = new Partite(2, 3, 1, 3, 1, "Mike Johnson", new Timestamp(System.currentTimeMillis()), "Pianificata", 0, 0, 0, 0, 0, 0);



    Partite[] Partite = {partita1,partita2,partita3};

    Giocatore[] giocatori = {giocatore1,giocatore2,giocatore3};

    StatisticheGiocatore[] statGiocatori = {giocatore1S,giocatore2S,giocatore3S};

    Stadio[] stadi = {Allianz,SanSiro};

    Squadra[] squadre = {inter,milan,juve};

    GiocatoreConStat[] giocatoriR = {giocatore1R,giocatore2R,giocatore3R};

    SquadreConStats[] squadreS = {squadra1,squadra2,squadra3};

    StatisticheSquadra[] statSquadre = {interS,juveS,milanS};

    public Stadio[] getStadi() {
        return stadi;
    }

    public Squadra[] getSquadre() {
        return squadre;
    }

    public StatisticheSquadra[] getStatSquadre()
    {
        return statSquadre;
    }

    public Giocatore[] getGiocatori() { return giocatori; }

    public StatisticheGiocatore[] getStatGiocatori() { return statGiocatori; }

    public GiocatoreConStat[] getGiocatoriR() { return giocatoriR; }

    public SquadreConStats[] getSquadreS() { return squadreS;  }

    public Partite[] getPartite() { return Partite; }
}
