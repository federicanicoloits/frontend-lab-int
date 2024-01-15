import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Match } from 'src/app/models/match.interface';

@Component({
  selector: 'app-lastmatch-container',
  templateUrl: './lastmatch-container.component.html',
  styleUrls: ['./lastmatch-container.component.css'],
})
export class LastmatchContainerComponent implements OnInit {
  lastMatches: Match[] = [];
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ PartiteResolveHome }) => {
      this.lastMatches = PartiteResolveHome;
    });
  }
}
