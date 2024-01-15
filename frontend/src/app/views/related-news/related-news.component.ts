import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-related-news',
  templateUrl: './related-news.component.html',
})
export class RelatedNewsComponent {
  @Input() relatedNews: any[] = [];
}