import { Component, Input } from '@angular/core';
import { AllNews } from 'src/app/models/news.interface';

@Component({
  selector: 'app-news-main',
  templateUrl: './news-main.component.html',
  styleUrls: ['./news-main.component.css'],
})
export class NewsMainComponent {
  @Input() dati!: AllNews;
}
