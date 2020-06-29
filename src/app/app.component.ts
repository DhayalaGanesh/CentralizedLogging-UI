import { Component, OnInit, Input } from '@angular/core';
import { ServicesList } from './Services/getserviceslist.services';
import { ServicesLogs } from './Services/servicelogs.services';
import { GetLogsForServicesList } from './Services/getLogsForServicesList.services';
import { LogViewModel } from './models/log-model';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Logs } from './Services/addlogs.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private _servicesList: ServicesList, private _serviceLogs: ServicesLogs, private _getLogsForServicesList: GetLogsForServicesList,
    config: NgbModalConfig, private modalService: NgbModal, private _Logs: Logs){
      config.keyboard=false;
      config.backdrop="static";
    }
  listOfServices: string[] = [];
  listOfServicesDropDownConfig = {
    search:true,
    placeholder:'Select the services list',
    noResultsFound: 'No results found!',
    searchPlaceholder:'Search',
    clearOnSelection: true
  }
  title = 'CentralizedLogging-UI';
  ngbDate: NgbDateStruct;
  @Input() logs: LogViewModel[] = null;
  ngOnInit(){    
    this.getServicesList();    
  }

  addLogsForm = new FormGroup({
    ServiceName: new FormControl(null,Validators.required),
    LogMessage: new FormControl(null, Validators.required),
    Status: new FormControl(null, [Validators.pattern('^(Success|Error)$'), Validators.required]),
    DateAndTime: new FormControl(Date, Validators.required)
  })

  public open(addlogs){
    this.modalService.open(addlogs);
  }

  public saveLogs(event){
    if(this.addLogsForm.valid){
      let logViewModel: LogViewModel = {
        Status:this.addLogsForm.controls.Status.value,
        LogMessages:this.addLogsForm.controls.LogMessage.value,
        ServiceName:this.addLogsForm.controls.ServiceName.value,
        DateAndTime:this.addLogsForm.controls.DateAndTime.value,
      }
      document.getElementById('addLogsLoader').classList.toggle('d-none');
      var a = this._Logs.AddLogs(logViewModel).subscribe(
        success=>{
          this.modalService.dismissAll();
        },
        error=>{
          console.log('error');
        }        
      ).add(()=>{
        document.getElementById('addLogsLoader').classList.toggle('d-none');
      });
    }    
  }

  public getServicesList(){
    this._servicesList.GetServicesList().subscribe(success=>{
      this.listOfServices = success as string[];
    }, error=>{});
  }

  public async serviceChanged(event) {
    this.logs=null;
    
    if('string' == typeof(event.value)){
      this.logs = (await this._serviceLogs.GetServiceLogs(event.value)) as LogViewModel[];
    }
    else{
      if ('object' == typeof(event.value)){
        if(event.value.length>0){
          this.logs = (await this._getLogsForServicesList.GetServicesList(event.value)) as LogViewModel[];
        }
        else{
          this.logs=null;
        }
        
      }
    }   
  }
}


