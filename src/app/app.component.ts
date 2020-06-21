import { Component, OnInit, Input } from '@angular/core';
import { ServicesList } from './Services/getserviceslist.services';
import { ServicesLogs } from './Services/servicelogs.services';
import { LogViewModel } from './models/log-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private _servicesList: ServicesList, private _serviceLogs: ServicesLogs){}
  listOfServices: string[] = [];
  listOfServicesDropDownConfig = {
    search:true,
    placeholder:'Select the services list',
    noResultsFound: 'No results found!',
    searchPlaceholder:'Search',
    clearOnSelection: true
  }
  title = 'CentralizedLogging-UI';
  @Input() logs: LogViewModel[] = null;
  ngOnInit(){    
    this.getServicesList();    
  }

  public getServicesList(){
    this._servicesList.GetServicesList().subscribe(success=>{
      this.listOfServices = success as string[];
    }, error=>{});
  }

  public async serviceChanged(event) {
    this.logs=null;
    if(event.value){
      this.logs = (await this._serviceLogs.GetServiceLogs(event.value)) as LogViewModel[];
    }   
  }

  
  
}


