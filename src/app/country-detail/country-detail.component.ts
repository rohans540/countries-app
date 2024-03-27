import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../services/countries.service';
import { AuthService } from '../services/auth.service';
import { ROLES } from '../constants/roles';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
  country: any;
  flagUrl: any;

  constructor(private route: ActivatedRoute, private authService: AuthService) {}

  ngOnInit(): void {
    const countryStr: any = this.route.snapshot.paramMap.get('country');
    this.country = JSON.parse(countryStr)
    this.flagUrl = `https://countryflagsapi.netlify.app/flag/${this.country?.cca2}.svg`
  }
  isAdmin(): boolean {
    return this.authService.getCurrentUserRole() === ROLES.ADMIN;
  }
}
