import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllNews } from 'src/app/models/news.interface';
import { Standing } from 'src/app/models/standing.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  standings: Standing[] = [];

  news!: AllNews;

  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ StandingsResolve }) => {
      this.standings = StandingsResolve;
    });
    this.activatedRoute.data.subscribe(({ NewsResolveHome }) => {
      this.news = NewsResolveHome;
    });
  }
}
