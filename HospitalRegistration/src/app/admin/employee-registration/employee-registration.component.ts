import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppgetEmployeeServiceService, IEmployee } from '../../service/appget-employee-service.service';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-employee-registration',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './employee-registration.component.html',
  styleUrl: './employee-registration.component.css'
})
export class EmployeeRegistrationComponent {
  empForm !:FormGroup;
  constructor(private fbBuilder:FormBuilder,private empService:EmployeeService){
this.empForm=this.fbBuilder.group({
  empId:0,
  userName:['',[Validators.required]],
  mobile:['',[Validators.required,Validators.pattern('^(0|91)?[6-9][0-9]{9}$')]],
  emailId:['',[Validators.required,Validators.email]],
  password:['',[Validators.required,Validators.minLength(8)]],
  adharCardNo:['',[Validators.required]],
  isActive:true})
  }
  Employee !:IEmployee
  canExit(){
    if(confirm("Do yoyu want to exit or not")){
      return true;
    }else {
      return false;
    }
  }
  saveEmployee(){
   
      let data=JSON.stringify(this.empForm.value);
      this.Employee=this.empForm.value
    this.empService.saveEmployees(this.Employee).subscribe((data)=>{
      alert("data saved");
    })
    
  }

}
