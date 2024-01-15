import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css'],
})
export class NewsDetailComponent implements OnInit {
  selectedNews: any;
  relatedNews: any[] = [];

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const newsId = this.route.snapshot.paramMap.get('id') ?? '';

    this.apiService.findNews().subscribe((response) => {
        const allNews = response as any[];
      // Trova la notizia con l'ID corrispondente
      this.selectedNews = allNews.find((news) => news.id === parseInt(newsId, 10));

      // Trova notizie correlate, ad esempio le prime tre notizie diverse da quella selezionata
      this.relatedNews = allNews.filter((news) => news.id !== parseInt(newsId, 10)).slice(0, 3);
    });
  }
}