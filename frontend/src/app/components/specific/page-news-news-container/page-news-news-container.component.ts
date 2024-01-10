import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-news-news-container',
  templateUrl: './page-news-news-container.component.html',
  styleUrls: ['./page-news-news-container.component.css'],
})
export class PageNewsNewsContainerComponent {
  @Input() dati: any;
}
