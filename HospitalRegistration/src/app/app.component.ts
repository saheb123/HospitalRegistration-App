import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeRegistrationComponent } from './admin/employee-registration/employee-registration.component';
import { DoctorRegistrationComponent } from './admin/doctor-registration/doctor-registration.component';
import { LoginComponent } from './public/login/login.component';
import { AuthService } from './auth.service';
import { PublicComponent } from './public/public/public.component';
import { LayoutComponent } from './layout/layout.component';
import { CommonModule } from '@angular/common';
import { provideStore, Store } from '@ngrx/store';
import { selectedAuth } from './store/auth/auth.selector';
import { Observable } from 'rxjs';
//import { counterReducer } from './store/auth/auth.reducer';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LoginComponent,PublicComponent,LayoutComponent,CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HospitalRegistration';
  //username !:Observable<string>
  constructor(private authService:AuthService,private store: Store){
    //this.username= this.store.select(selectedAuth);
  }
  ngOnInit(){
    //this.authService.setAuthDetails("false");
  }
  get AuthDetails():any{
    return this.authService.getAuthDetails();
   }
}
