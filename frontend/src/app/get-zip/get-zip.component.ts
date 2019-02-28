import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-get-zip',
  templateUrl: './get-zip.component.html',
  styleUrls: ['./get-zip.component.css']
})
export class GetZipComponent implements OnInit {

  @Input() states: any;
  @Input() cities: any;
  @Input() zipcode: any;
  @Input() selected: {};
  @Input() countries: any;
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.selected = {};
    this.httpService.getData('/countries', null).subscribe(countries => { this.countries = countries; }, err => console.log(err));
  }

  getStatesForCountry() {
    this.httpService.getData('/states', this.selected).subscribe(states => { this.states = states; console.log(this.states); });
  }

  getCitiesForState() {
    this.httpService.getData('/cities', this.selected).subscribe(cities => { this.cities = cities; console.log(this.cities); });
  }

  getZipForAddress() {
    this.httpService.postData('/getZip', this.selected).subscribe(zipcode => { this.zipcode = zipcode; });
  }
}
