import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { MatchDettaglio } from 'src/app/models/match-dettaglio.interface';
import { Match } from 'src/app/models/match.interface';
import { AllNews, SingleNews } from 'src/app/models/news.interface';
import { Standing } from 'src/app/models/standing.interface';
import * as dayjs from 'dayjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'http://localhost:8080/';
  constructor(private http: HttpClient) {}

  findStandings(num: number) {
    return this.http.get(this.baseUrl + 'standings?lenght=' + num).pipe(
      map((response: any) => {
        response.sort(
          (a: Standing, b: Standing) => a.classifica - b.classifica
        );
        return response as Standing[];
      })
    );
  }

  findNews() {
    return this.http.get(this.baseUrl + 'news').pipe(
      map((response: any) => {
        response.news.forEach((element: any) => {
          element.data = dayjs(element.data)
            .format('YYYY-MM-DD HH:mm')
            .toString();
        });
        return response as AllNews;
      })
    );
  }

  findNewsDetail(id: string) {
    return this.http.get(this.baseUrl + 'newsid?id=' + id).pipe(
      map((response: any) => {
        response.testo = response.testo.split('\r\n');
        response.data = dayjs(response.data)
          .format('YYYY-MM-DD HH:mm')
          .toString();
        return response as SingleNews;
      })
    );
  }

  findLastMatches() {
    return this.http.get(this.baseUrl + 'matches/lastmatches').pipe(
      map((response: any) => {
        return response as Match[];
      })
    );
  }
  findDettaglioPartita(id: string) {
    return this.http.get(this.baseUrl + 'matches/details?fixture=' + id).pipe(
      map((response: any) => {
        return response as MatchDettaglio;
      })
    );
  }

  newsletter(mail: string) {
    return this.http.get(this.baseUrl + 'newsletter?mail=' + mail);
  }
}
