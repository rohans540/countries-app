import { Component } from '@angular/core';
import { CountriesService } from '../services/countries.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent {
  countries: any = [];
  constructor(private countriesList: CountriesService, private router: Router) {
    countriesList.getCountries().subscribe((data) => {
      this.countries = data;
    })
  }

  goToDetail(country: any): void {
    this.router.navigate([`/detail`, { country: JSON.stringify(country) }]);
  }
}
