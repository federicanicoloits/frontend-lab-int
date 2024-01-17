import { Component, Input, OnInit } from '@angular/core';
import { MatchDettaglio } from 'src/app/models/match-dettaglio.interface';

@Component({
  selector: 'app-partita-dettaglio',
  templateUrl: './partita-dettaglio.component.html',
  styleUrls: ['./partita-dettaglio.component.css'],
})
export class PartitaDettaglioComponent implements OnInit {
  @Input() match!: MatchDettaglio;
  constructor() {}
  ngOnInit(): void {}
}
