import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Standing } from 'src/app/models/standing.interface';

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
    return this.http.get('assets/json/news.json');
  }
}
