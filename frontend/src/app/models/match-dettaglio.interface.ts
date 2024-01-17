export interface MatchDettaglio {
  id_partita: number;
  logoCasa: string;
  logoOspiti: string;
  GolCasa: number;
  GolOspiti: number;
  SquadraCasa: string;
  SquadraOspite: string;
  status: string;
  eventi: {
    id: number;
    minuto: number;
    id_squadra: number;
    id_giocatore_evento: number;
    nome_giocatore_assist: string;
    tipo_evento: string;
    dettagli: string;
    commento: string;
  }[];
}
