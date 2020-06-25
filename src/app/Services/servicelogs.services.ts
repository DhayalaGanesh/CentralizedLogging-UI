import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ServicesLogs{
    constructor(private http: HttpClient){}
    public GetServiceLogs(serviceName: string){
        return this.http.get(environment.apiUrl + 'Services/GetServicesLogs?serviceName='+serviceName).toPromise();
    }
}