import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class GetLogsForServicesList{
    constructor(private http: HttpClient){}
    public GetServicesList(services : string[]){
        let queryParameters='';
        services.map((currentValue, index, arr)=>{
            queryParameters+= `serviceNames[${index}]=${currentValue}&`;
        })
        return this.http.get(environment.apiUrl + `Services/GetLogsForServicesList?${queryParameters}`).toPromise();
    }
}