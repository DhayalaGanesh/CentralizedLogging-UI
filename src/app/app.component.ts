import { Component, OnInit } from '@angular/core';
import { ServicesList } from './Services/getserviceslist.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private servicesList: ServicesList){}
  listOfServices: string[] = [];
  listOfServicesDropDownConfig = {
    search:true,
    placeholder:'Select the services list',
    noResultsFound: 'No results found!',
    searchPlaceholder:'Search',
    clearOnSelection: true
  }
  title = 'CentralizedLogging-UI';
  ngOnInit(){    
    this.getServicesList();    
  }

  public getServicesList(){
    this.servicesList.GetServicesList().subscribe(success=>{
      this.listOfServices = success as string[];
    }, error=>{});
  }

  
  
}


