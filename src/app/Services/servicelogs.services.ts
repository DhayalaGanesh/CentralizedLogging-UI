import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServicesLogs{
    constructor(private http: HttpClient){}
    public GetServiceLogs(serviceName: string){
        return this.http.get('http://localhost:60335/Services/GetServicesLogs?serviceName='+serviceName).toPromise();
    }
}