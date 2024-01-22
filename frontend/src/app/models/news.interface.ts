export interface SingleNews {
  id: number;
  data: string;
  titolo: string;
  sottotitolo: string;
  hashtags: string[];
  testo: string;
  immagine: string;
}

export interface AllNews {
  news: SingleNews[];
}

export interface OneNews {
  news: SingleNews;
}
