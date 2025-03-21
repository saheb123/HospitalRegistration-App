import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IDepartment{
  id:0;
  name:''

}
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
url:any|undefined
  constructor(private httpClient:HttpClient) { 
    this.url='http://localhost:5164/';
  }

  Getdepartments():Observable<any>{
return this.httpClient.get(this.url+'api/Departments');
  }
}
