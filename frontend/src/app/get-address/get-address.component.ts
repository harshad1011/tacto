import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-get-address',
  templateUrl: './get-address.component.html',
  styleUrls: ['./get-address.component.css']
})
export class GetAddressComponent implements OnInit {

  @Input() zipcode: string;
  @Input() address: any;
  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  getAddressForZip() {
    this.httpService.postData('/getAddress', { pincode: this.zipcode }).subscribe(address => {
    this.address = address ? `${address.city}, ${address.state},
       ${address.country}` : "No address found for given zipcode";
    });
  }
}
