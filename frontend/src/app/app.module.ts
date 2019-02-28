import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { GetZipComponent } from './get-zip/get-zip.component';
import { GetAddressComponent } from './get-address/get-address.component';
import { HttpService } from './http.service';

const routes: Routes = [
  { path: 'getZip', component: GetZipComponent },
  { path: 'getAddress', component: GetAddressComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    GetZipComponent,
    GetAddressComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})

export class AppModule { }
