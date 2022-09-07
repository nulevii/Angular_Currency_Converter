import { Component, Input } from '@angular/core';
import { Rate } from 'src/app/interface/rate';
import { convert } from 'src/app/utilities/convert';
@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css'],
})
export class ConverterComponent {
  @Input() rates: Rate[];
  currency1: string = '1';
  currency2: string = '1';
  currencyAmmount1: string = '1';
  currencyAmmount2: string = '1';
  operation = 'buy';

  filterNumbers = (event: any) => {
    if (!/^[0-9]*\.?[0-9]*$/.test(event.key)) {
      event.preventDefault();
    }
    if (event.target.value.includes('.')) {
      if (!/[0-9]/.test(event.key)) {
        event.preventDefault();
      }
    }
  };

  onCurrency1Change(change: string) {
    this.currencyAmmount2 = convert(
      this.currencyAmmount1,
      change,
      this.currency2
    );
  }

  onCurrency2Change(change: string) {
    this.currencyAmmount2 = convert(
      this.currencyAmmount1,
      this.currency1,
      change
    );
  }

  onCurrencyAmmount1Change(change: string) {
    this.currencyAmmount2 = convert(change, this.currency1, this.currency2);
  }

  onCurrencyAmmount2Change(change: string) {
    this.currencyAmmount1 = convert(change, this.currency2, this.currency1);
  }

  onOperationChange() {
    this.currency1 = '1';
    this.currency2 = '1';
    this.currencyAmmount1 = '1';
    this.currencyAmmount2 = '1';
  }
}
