import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  squadreClassifica: any;

  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.apiService.findStandings().subscribe((response) => {
      this.squadreClassifica = response;
    });
  }
}
