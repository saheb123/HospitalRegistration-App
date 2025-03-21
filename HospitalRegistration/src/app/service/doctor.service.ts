import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// export interface IDoctor{
//   id:0;
//   name:'',
//   specialist:'',
//   timings:'',
//   tate:'',
//   isAvailable:boolean,
// isActive:true,
// mobile:'',
//   fees:'',
//   departmentId:0
// }
export interface IDoctor{
  id:number;
  name:string,
  specialist:string,
  timings:string,
  tate:string,
  isAvailable:boolean,
isActive:boolean,
mobile:string,
  fees:string ,
  departmentId:number,
  createdBy:number
}


@Injectable({
  providedIn: 'root'
})
export class DoctorService {
url!:any
doctor:IDoctor[]=[]

  constructor(private httpClient:HttpClient) { 
    this.url='http://localhost:5164/';
  }

saveDoctor(doctor:IDoctor):Observable<any>{
  doctor.createdBy =parseInt(localStorage.getItem("EmpId")??"0")
  return this.httpClient.post(this.url+'api/Doctor',doctor)
}
GetDoctor():Observable<any>{
return this.httpClient.get(this.url+'api/Doctor');
}
}
