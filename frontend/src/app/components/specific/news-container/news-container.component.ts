import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-container',
  templateUrl: './news-container.component.html',
  styleUrls: ['./news-container.component.css'],
})
export class NewsContainerComponent {
  @Input() dati: any;
}
