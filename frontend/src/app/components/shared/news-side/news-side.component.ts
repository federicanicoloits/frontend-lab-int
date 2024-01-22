import { Component, Input } from '@angular/core';
import { AllNews, SingleNews } from 'src/app/models/news.interface';

@Component({
  selector: 'app-news-side',
  templateUrl: './news-side.component.html',
  styleUrls: ['./news-side.component.css'],
})
export class NewsSideComponent {
  @Input() dati!: SingleNews;
}
