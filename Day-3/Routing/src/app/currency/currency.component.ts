import { Component } from '@angular/core';
import { CurrencyService } from './currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent {
  currencies: string[] = []; // Array to store currency codes
  CurrencyMap:any; 
  currency1: string = 'USD';
  currency2: string = 'EUR';
  amount1: number = 0;
  amount2: number = 0;

  constructor(private currencyService: CurrencyService){}

  ngOnInit(): void {
    this.currencyService.getExchangeRates().subscribe((data: any) => {
      this.currencies = Object.keys(data.conversion_rates);
      this.CurrencyMap = data.conversion_rates;
    });
  }

  convertCurrency() {
    this.amount2 = this.amount1 * (this.CurrencyMap[this.currency2] / this.CurrencyMap[this.currency1]);
  }

  convertCurrencyOpposite() {
    this.amount1 = this.amount2 * (this.CurrencyMap[this.currency1] / this.CurrencyMap[this.currency2]);
  }
}
