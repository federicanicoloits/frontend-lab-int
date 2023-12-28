package com.mockAPI.MOCK.model.response;

public class SquadreConStats {

    public int id;
    public String nome;
    public int id_stadio;
    public String paese;
    public int fondazione;
    public boolean nazionale;
    public String logo;
    public int stagione; //FK
    public int classifica;
    public int punti;
    public int differenzaReti;
    public String forma;
    public String descrizione;
    public int partiteGiocate;
    public int partiteVinte;
    public int pareggi;
    public int partitePerse;
    public int golFatti;
    public int golSubiti;

    public int getPunti() {
        return punti;
    }

    public SquadreConStats(int id, String nome, int id_stadio, String paese, int fondazione, boolean nazionale, String logo, int stagione, int classifica, int punti, int differenzaReti, String forma, String descrizione, int partiteGiocate, int partiteVinte, int pareggi, int partitePerse, int golFatti, int golSubiti) {
        this.id = id;
        this.nome = nome;
        this.id_stadio = id_stadio;
        this.paese = paese;
        this.fondazione = fondazione;
        this.nazionale = nazionale;
        this.logo = logo;
        this.stagione = stagione;
        this.classifica = classifica;
        this.punti = punti;
        this.differenzaReti = differenzaReti;
        this.forma = forma;
        this.descrizione = descrizione;
        this.partiteGiocate = partiteGiocate;
        this.partiteVinte = partiteVinte;
        this.pareggi = pareggi;
        this.partitePerse = partitePerse;
        this.golFatti = golFatti;
        this.golSubiti = golSubiti;
    }
}
