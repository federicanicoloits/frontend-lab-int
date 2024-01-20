import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-partita-test',
  templateUrl: './partita-test.component.html',
  styleUrls: ['./partita-test.component.css'],
})
export class PartitaTestComponent {
  partita: any;

  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.apiService.findDetailMatch().subscribe((response) => {
      this.partita = response;
      console.log(this.partita);
    });
  }
}
