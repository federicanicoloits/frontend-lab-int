import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingleNews } from 'src/app/models/news.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-dettaglio-news',
  templateUrl: './dettaglio-news.component.html',
  styleUrls: ['./dettaglio-news.component.css'],
})
export class DettaglioNewsComponent implements OnInit {
  selectedNews: any;
  news!: SingleNews;
  relatedNews: SingleNews[] = [];
  id: string = '';
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.activatedRoute.data.subscribe(({ NewsResolveNewsId }) => {
      this.news = NewsResolveNewsId;
    });
    this.activatedRoute.data.subscribe(({ AllNewsResolveNewsId }) => {
      this.relatedNews = AllNewsResolveNewsId.news;
    });
  }
}
