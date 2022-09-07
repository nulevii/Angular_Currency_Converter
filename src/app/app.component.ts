import { Component, OnInit } from '@angular/core';
import { Rate } from './interface/rate';
import { RatesService } from './services/rates.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loading: boolean = false;
  rates: Rate[] = [];

  constructor(private ratesService: RatesService) {}

  ngOnInit(): void {
    this.loading = true;
    this.ratesService.getRates().subscribe(
      (rates) => {
        this.rates = rates;
        this.loading = false;
      },
      (error: any) => console.error(error)
    );
  }
}
