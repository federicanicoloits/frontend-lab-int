import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Standing } from 'src/app/models/standing.interface';

@Component({
  selector: 'app-classifica',
  templateUrl: './classifica.component.html',
  styleUrls: ['./classifica.component.css'],
})
export class ClassificaComponent {
  standings: Standing[] = [];
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ StandingsResolveClassifica }) => {
      this.standings = StandingsResolveClassifica;
    });
  }
}
