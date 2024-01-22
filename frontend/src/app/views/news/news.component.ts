import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllNews } from 'src/app/models/news.interface';
import { ApiService } from 'src/app/services/api/api.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  news!: AllNews;

  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ NewsResolveNews }) => {
      this.news = NewsResolveNews;
    });
  }
}
