package com.mockAPI.MOCK.model;

public class Squadra {

        public int id;
        public String nome;
        public int id_stadio;
        public String paese;
        public int fondazione;
        public boolean nazionale;
        public String logo;



        public Squadra(int id, String nome, int id_stadio, String paese, int fondazione, boolean nazionale, String logo) {
                this.id = id;
                this.nome = nome;
                this.id_stadio = id_stadio;
                this.paese = paese;
                this.fondazione = fondazione;
                this.nazionale = nazionale;
                this.logo = logo;
        }


}
