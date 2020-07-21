import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Network } from './network';
@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  httpOptions = {
    headers:new HttpHeaders({
      'Content-type':'application/json'
    })
  }
  baseUrl:string= "http://localhost:3000/"
  constructor(private httpClient:HttpClient) { }
  getAllNetwork():Observable<Network[]>{
   return this.httpClient.get<Network[]>(this.baseUrl+"network");
  }
  find(id):Observable<Network>{
    return this.httpClient.get<Network>(this.baseUrl+"network/"+id);
   }
  UpdateNetwork(id,network){
    console.log(id,network);
    
    return this.httpClient.put<Network>(this.baseUrl+"network/"+id,network,this.httpOptions);
  }
  DeleteNetwork(id:number){
    return this.httpClient.delete(this.baseUrl+"network/"+id)
  }
  CreateNetwork(network):Observable<Network>{
   return this.httpClient.post<Network>(this.baseUrl+"network/",network,this.httpOptions);
  }
}
