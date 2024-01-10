import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-side',
  templateUrl: './news-side.component.html',
  styleUrls: ['./news-side.component.css'],
})
export class NewsSideComponent {
  @Input() dati: any;
}
