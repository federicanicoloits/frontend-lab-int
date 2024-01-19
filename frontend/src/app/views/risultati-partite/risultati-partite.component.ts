import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Match } from 'src/app/models/match.interface';

@Component({
  selector: 'app-risultati-partite',
  templateUrl: './risultati-partite.component.html',
  styleUrls: ['./risultati-partite.component.css'],
})
export class RisultatiPartiteComponent {
  matches: Match[] = [];
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ PartiteResolveRisultati }) => {
      this.matches = PartiteResolveRisultati;
    });
  }
}
