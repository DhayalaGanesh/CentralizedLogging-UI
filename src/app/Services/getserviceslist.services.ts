import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServicesList{
    constructor(private http: HttpClient){}
    public GetServicesList(){
        return this.http.get('http://localhost:60335/Services/GetServicesList');
    }
}