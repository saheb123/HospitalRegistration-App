import { Component } from '@angular/core';
import { DepartmentService, IDepartment } from '../service/department.service';
import { EmployeeService } from '../service/employee.service';
import { IEmployee } from '../service/appget-employee-service.service';
import { DoctorService, IDoctor } from '../service/doctor.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patientregistration',
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './patientregistration.component.html',
  styleUrl: './patientregistration.component.css'
})
export class PatientregistrationComponent {

  departments:IDepartment[]=[];
  employees:IEmployee[]=[];
  doctor:IDoctor[]=[];
  patForm !:FormGroup
  constructor(private fbBuilder:FormBuilder,private departmentService:DepartmentService,private empService:EmployeeService,private docService:DoctorService ){
this.patForm=this.fbBuilder.group({
  PatientName:['',[Validators.required]],
  Mobile:['',[Validators.required]],
  Gender:[''],
  ReasonToVisit:['',[Validators.required]],
  DoctorId:[''],
  Fees:['',[Validators.required]],
  EmpId:[''],
  Prescription:[''],
  deptid:['']
})
  }
  ngOnInit(){
    this.departmentService.Getdepartments().subscribe(data=>{
      this.departments=data;
    })
    this.empService.GetEmployees().subscribe(data=>{
      this.employees=data;
    })
    this.docService.GetDoctor().subscribe(data=>{
      this.doctor=data;
    })
  }
  savePatient(){

console.log(this.patForm.value);
this.empService.savePatient(this.patForm.value).subscribe((data)=>{
  alert("data saved");
});
  }
}
