// export interface MatchDettaglio {
//   id_partita: number;
//   logoCasa: string;
//   logoOspiti: string;
//   GolCasa: number;
//   GolOspiti: number;
//   SquadraCasa: string;
//   SquadraOspite: string;
//   status: string;
//   eventi: {
//     id: number;
//     minuto: number;
//     id_squadra: number;
//     id_giocatore_evento: number;
//     nome_giocatore_assist: string;
//     tipo_evento: string;
//     dettagli: string;
//     commento: string;
//   }[];
// }

interface Evento {
  id: number;
  minuto: number;
  id_squadra: number;
  id_giocatore_evento: number;
  nome_giocatore_assist: string | null;
  tipo_evento: 'Goal' | 'Card' | 'subst';
  dettagli: string;
  commento: string | null;
}

interface Giocatore {
  id: number;
  nome: string;
  numeroMaglia: number;
  posizione: string;
  foto: string;
}

interface Squadra {
  id: number;
  nome: string;
  logo: string;
  formazione: Giocatore[];
  sostituzioni: Giocatore[];
  allenatore: { Nome: string; foto: string };
  schema: string;
}

export interface MatchDettaglio {
  id_partita: number;
  logoCasa: string;
  logoOspiti: string;
  GolCasa: number;
  GolOspiti: number;
  SquadraCasa: string;
  SquadraOspite: string;
  status: string;
  eventi: Evento[];
  id_casa: number;
  id_ospiti: number;
  formazione_casa: Giocatore[];
  formazione_ospiti: Giocatore[];
  sostituzioni_casa: Giocatore[];
  sostituzioni_ospiti: Giocatore[];
  allenatore_casa: { Nome: string; foto: string };
  allenatore_ospiti: { Nome: string; foto: string };
  schema_casa: string;
  schema_ospiti: string;
}
