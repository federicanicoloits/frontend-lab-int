import { Component, Input, OnInit } from '@angular/core';
import { Match } from 'src/app/models/match.interface';

@Component({
  selector: 'app-singlematch-preview',
  templateUrl: './singlematch-preview.component.html',
  styleUrls: ['./singlematch-preview.component.css'],
})
export class SinglematchPreviewComponent implements OnInit {
  @Input() match!: Match;
  constructor() {}
  ngOnInit(): void {}
}
