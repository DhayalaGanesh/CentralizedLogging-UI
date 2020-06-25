import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ServicesList{
    constructor(private http: HttpClient){}
    public GetServicesList(){
        return this.http.get(environment.apiUrl + 'Services/GetServicesList');
    }
}