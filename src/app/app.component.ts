import { Component } from '@angular/core';
import { ServicesList } from './Services/getserviceslist.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private servicesList: ServicesList){}
  services: string[] = [];

  title = 'CentralizedLogging-UI';
  public getServicesList(){
    this.servicesList.GetServicesList().subscribe(success=>{
      this.services = success as string[];
    }, error=>{});

  }
}


