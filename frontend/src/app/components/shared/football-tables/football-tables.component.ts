import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Standing } from 'src/app/models/standing.interface';

@Component({
  selector: 'app-football-tables',
  templateUrl: './football-tables.component.html',
  styleUrls: ['./football-tables.component.css'],
})
export class FootballTablesComponent implements OnInit {
  @Input() standings: Standing[] = [];
  constructor() {}
  ngOnInit(): void {}
}
