import { Component, OnInit } from '@angular/core';
import { Irate } from './models/rate';
import { url } from './data/url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loading: boolean = true;
  rates: Irate[] = [];

  ngOnInit(): void {
    const getProducts = async () => {
      this.loading = true;
      const response = await fetch(url);
      const rates = await response.json();
      this.loading = await false;
      this.rates = rates;
    };
    getProducts();
  }
}
