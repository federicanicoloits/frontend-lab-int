import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  news: any;

  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.apiService.findNews().subscribe((response) => {
      this.news = response;
      console.log(this.news);
      console.log(10);
    });
  }
}
