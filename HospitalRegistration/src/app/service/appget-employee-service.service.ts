import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


// export interface IEmployee{
//   empId:0;
//   userName:'',
//   mobile:'',
//  emailId:'',
// password:'',
// adharCardNo:'',
// isActive:true
// }

export interface IEmployee{
  empId:number;
  userName:string,
  mobile:string,
 emailId:string,
password:string,
adharCardNo:string,
isActive:boolean,
createdBy:number
}
@Injectable({
  providedIn: 'root'
})
export class AppgetEmployeeServiceService {
url !:any;

Employee:IEmployee[]=[]

  constructor(private httpClient:HttpClient) {
    this.url='http://localhost:5164/';
   }

saveEmployees(Employee:IEmployee){
  //Employee.createdBy=
  return this.httpClient.post(this.url+'api/Employee',Employee)
}

DeleteEmployee(id:any):Observable<any>{
return this.httpClient.delete(this.url+'api/Employee/'+id)
}

}
