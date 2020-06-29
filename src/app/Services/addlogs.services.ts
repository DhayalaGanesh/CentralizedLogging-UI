import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LogViewModel } from '../models/log-model';

@Injectable()
export class Logs{
    constructor(private http: HttpClient){}
    public AddLogs(services : LogViewModel){
        return this.http.post(environment.apiUrl + 'Services/AddLogs', services);
    }
}