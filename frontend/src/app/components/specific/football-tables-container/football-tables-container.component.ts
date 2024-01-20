import { Component, Input, OnInit } from '@angular/core';
import { Standing } from 'src/app/models/standing.interface';

@Component({
  selector: 'app-football-tables-container',
  templateUrl: './football-tables-container.component.html',
  styleUrls: ['./football-tables-container.component.css'],
})
export class FootballTablesContainerComponent implements OnInit {
  @Input() standings: Standing[] = [];
  constructor() {}
  ngOnInit(): void {}
}
