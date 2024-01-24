import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  mail: string = '';
  mailinviata: any;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  inviaMail(): void {
    this.apiService.newsletter(this.mail);
  }
}
