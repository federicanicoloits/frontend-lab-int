import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-news-card-side',
  templateUrl: './news-card-side.component.html',
  styleUrls: ['./news-card-side.component.css']
})
export class NewsCardSideComponent {
  @Input() dati: any;
}
