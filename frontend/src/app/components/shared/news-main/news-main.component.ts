import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-main',
  templateUrl: './news-main.component.html',
  styleUrls: ['./news-main.component.css'],
})
export class NewsMainComponent {
  @Input() dati: any;
}
