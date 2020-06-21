import { AppComponent } from './app.component';
import { LogCardComponent } from './log-card/log-card.component'

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { ServicesList } from './Services/getserviceslist.services';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServicesLogs } from './Services/servicelogs.services';

@NgModule({
  declarations: [
    AppComponent,
    LogCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SelectDropDownModule,
    NgbModule
  ],
  providers: [
    ServicesList,
    ServicesLogs
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
