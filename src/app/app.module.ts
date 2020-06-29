import { AppComponent } from './app.component';
import { LogCardComponent } from './log-card/log-card.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { ServicesList } from './Services/getserviceslist.services';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';


import { ServicesLogs } from './Services/servicelogs.services';
import { GetLogsForServicesList } from './Services/getLogsForServicesList.services';
import { from } from 'rxjs';
import { Logs } from './Services/addlogs.services';

@NgModule({
  declarations: [
    AppComponent,
    LogCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SelectDropDownModule,
    FormsModule, 
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    ServicesList,
    ServicesLogs,
    GetLogsForServicesList,
    NgbModal,
    NgbModalConfig,
    Logs
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
