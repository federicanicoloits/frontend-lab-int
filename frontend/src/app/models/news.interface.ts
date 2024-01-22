export interface SingleNews {
  id: number;
  data: string;
  titolo: string;
  sottotitolo: string;
  hastags: string;
  testo: string[];
  immagine: string;
}

export interface AllNews {
  news: SingleNews[];
}
