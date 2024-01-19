import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  news: any;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    // this.apiService.findStandings().subscribe((response) => {
    //   this.squadreClassifica = response;
    // });
    this.apiService.findNews().subscribe((response) => {
      this.news = response;
      console.log(this.news);
    });
  }

}


