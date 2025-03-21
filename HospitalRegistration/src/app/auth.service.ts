import { Injectable } from '@angular/core';
import { IEmployee } from './service/appget-employee-service.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface ILogin{
  username:'',
  password:''
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
url='http://localhost:5164/';
  constructor(private httpClient:HttpClient) { }
  setAuthDetails(value:any){
    localStorage.setItem("validCred",value);
  }
  getAuthDetails(){
    return localStorage.getItem("validCred");
  }
  getAdminRole(){
    return localStorage.getItem("isAdmin");
  }
  getEmployeeRole(){
    return localStorage.getItem("isEmployee");
  }
  getDoctorRole(){
    return localStorage.getItem("isDoctor");
  }
  validateEmployee(authEmployee:ILogin):Observable<IEmployee>{
return this.httpClient.post<IEmployee>(this.url+'api/Employee/Validate-employee',authEmployee);
  }
}
