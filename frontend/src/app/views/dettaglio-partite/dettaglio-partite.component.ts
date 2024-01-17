import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchDettaglio } from 'src/app/models/match-dettaglio.interface';

@Component({
  selector: 'app-dettaglio-partite',
  templateUrl: './dettaglio-partite.component.html',
  styleUrls: ['./dettaglio-partite.component.css'],
})
export class DettaglioPartiteComponent implements OnInit {
  id: string = '';
  match!: MatchDettaglio;
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.activatedRoute.data.subscribe(({ PartitaResolveDettaglio }) => {
      this.match = PartitaResolveDettaglio;
    });
  }
}
