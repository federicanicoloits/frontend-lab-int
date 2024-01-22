import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-dettaglio-news',
  templateUrl: './dettaglio-news.component.html',
  styleUrls: ['./dettaglio-news.component.css'],
})
export class DettaglioNewsComponent implements OnInit {
  selectedNews: any;
  news: any;
  idNews: any;
  relatedNews: any[] = [];

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.apiService.findNewsDetail().subscribe((response) => {
      this.news = response;
      console.log(this.news);
    });

    this.route.paramMap.subscribe((params) => {
      let id = params.get('id');
      console.log(id);
      this.idNews = id;
      console.log(this.idNews);
      // Ora puoi utilizzare l'ID come desideri
    });
  }
}
