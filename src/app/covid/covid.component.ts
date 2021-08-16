import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { CovidCountry, CovidSummary } from './api.interface';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.scss'],
})
export class CovidComponent implements OnInit {
  summary!: CovidSummary;
  @Input('country-code') countryCode?: string;
  showCountrySummary = false;

  constructor(private api: ApiService) { }

  async ngOnInit() {
    this.summary = await this.getSummary();
  }

  async getSummary() {
    return await this.api.getSummary().then(summary => summary);
  }

  getCountrySummary(countryCode: string): CovidCountry {
    const country = this.summary?.Countries.filter(country => country.CountryCode === countryCode)[0];
    country ? this.showCountrySummary = true : this.showCountrySummary = false;
    return country;
  }

}
