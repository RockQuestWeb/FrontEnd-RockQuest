import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { SelectItem } from 'primeng/api';
import {CityService} from './../services/service-city/city.service'

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  selectedCountries1: string[] = [];

  items: SelectItem[];

  item: string;

  countries: any[];

  constructor(private cityService: CityService) {
      
      this.items = [];

      this.cityService.getCountries().then(countries => {
          this.items = countries;
      });

      this.countries = [
          {name: 'Australia', code: 'AU'},
          {name: 'Brazil', code: 'BR'},
          {name: 'China', code: 'CN'},
          {name: 'Egypt', code: 'EG'},
          {name: 'France', code: 'FR'},
          {name: 'Germany', code: 'DE'},
          {name: 'India', code: 'IN'},
          {name: 'Japan', code: 'JP'},
          {name: 'Spain', code: 'ES'},
          {name: 'United States', code: 'US'}
      ];

  }

  ngOnInit(): void {
  }

}
