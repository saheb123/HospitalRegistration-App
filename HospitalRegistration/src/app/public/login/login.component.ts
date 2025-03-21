import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { IEmployee } from '../../service/appget-employee-service.service';
import { Store } from '@ngrx/store';
import { setUserName } from '../../store/auth/auth.action';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router:Router,private authService:AuthService,private store:Store){

  }
  empObj:any={
    username:'',
    password:''
  }

  onSubmit(invalid:any){
    if(invalid==true){
      alert("Please complete validation");
    }else{
      console.log(this.empObj);
      this.store.dispatch(setUserName({ username:this.empObj.username }));
      if(this.empObj.username=="admin@gmail.com" && this.empObj.password=="admin123"){
        this.authService.setAuthDetails("true");
          localStorage.setItem("isAdmin","admin");
          localStorage.setItem("EmpId","101");
          
        return this.router.navigate(['/employee']);
      }else if(this.empObj.userName=="doctor@gmail.com" && this.empObj.password=="doctor123"){
        this.authService.setAuthDetails("true");
        localStorage.setItem("isDoctor","doctor");
        return this.router.navigate(['/doctor']);
      }
      else
      {
        this.authService.validateEmployee(this.empObj).subscribe(x=>{
         
          const employee:IEmployee=x;
            this.authService.setAuthDetails("true");
            localStorage.setItem("isEmployee","emp");
            localStorage.setItem("EmpId",employee.empId.toString())
            return this.router.navigate(['/patient']);
          
           
        })
      }
    }
    return null;
  }  
}
