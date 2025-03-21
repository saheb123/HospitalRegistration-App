import { Injectable } from '@angular/core';
import { IEmployee } from './appget-employee-service.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IPatient{
  id:number,
  patientname:string,
  mobile:string,
  gender:string,
  reasontovisit:string,
  doctorid:number,
  fees:string,
  empid:number,
  prescription:string,
  deptid:number,
  createdBy:number
}
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
url !:any;

Employee:IEmployee[]=[]
Patient!:IPatient
  constructor(private httpClient:HttpClient) {
    this.url='http://localhost:5164/';
   }

saveEmployees(Employee:IEmployee){
  Employee.createdBy =parseInt(localStorage.getItem("EmpId")??"0")
  return this.httpClient.post(this.url+'api/Employee',Employee)
}

DeleteEmployee(id:any):Observable<any>{
return this.httpClient.delete(this.url+'api/Employee/'+id)
}
GetEmployees():Observable<any>{
  return this.httpClient.get(this.url+'api/Employee');
}
savePatient(patient:IPatient):Observable<any>{
  patient.createdBy =parseInt(localStorage.getItem("EmpId")??"0")
  console.log(patient);
  return this.httpClient.post(this.url+'api/Employee/PatientRegistration',patient)
}


}
