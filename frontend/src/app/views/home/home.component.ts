import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Standing } from 'src/app/models/standing.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  standings: Standing[] = [];
  squadreClassifica: any;

  news: any;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ StandingsResolve }) => {
      this.standings = StandingsResolve;
    });
    this.activatedRoute.data.subscribe(({ NewsResolveHome }) => {
      this.news = NewsResolveHome;
    });
  }
}
