import { Component } from '@angular/core';
import { DepartmentService, IDepartment } from '../../service/department.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormField, MatFormFieldControl, MatFormFieldModule, MatHint, MatLabel } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DoctorService, IDoctor } from '../../service/doctor.service';

@Component({
  selector: 'app-doctor-registration',
  imports: [CommonModule,FormsModule,ReactiveFormsModule,BsDatepickerModule ],
  templateUrl: './doctor-registration.component.html',
  styleUrl: './doctor-registration.component.css'
})
export class DoctorRegistrationComponent {
departments:IDepartment[]=[];
docForm !:FormGroup;
constructor(private doctorService:DoctorService,private fbBuilder:FormBuilder,private departmentService:DepartmentService){
this.docForm=this.fbBuilder.group({
  name:['',[Validators.required]],
  specialist:['',[Validators.required]],
  timings:['',[Validators.required]],
  date:'',
  mobile:['',[Validators.required]],
  fees:['',[Validators.required]],
  departmentId:'',
  isAvailable:false,
  isActive:false

})

}
  
ngOnInit(){
  this.departmentService.Getdepartments().subscribe(data=>{
    this.departments=data;
  })
}

doctor !:IDoctor

saveDoctor(){
 
    let data=JSON.stringify(this.docForm.value);
    this.doctor=this.docForm.value
  this.doctorService.saveDoctor(this.doctor).subscribe((data)=>{
    alert("data saved");
  })

}

}
