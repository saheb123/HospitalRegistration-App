import { Routes } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { PublicComponent } from './public/public/public.component';
import { EmployeeRegistrationComponent } from './admin/employee-registration/employee-registration.component';
import { DoctorRegistrationComponent } from './admin/doctor-registration/doctor-registration.component';
import { ErrorComponent } from './error/error.component';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { AuthGuardService } from './auth-guard.service';
import { PatientregistrationComponent } from './patientregistration/patientregistration.component';

export const routes: Routes = [
{path:'',component:LoginComponent,pathMatch:'full'},
    {path:'home',component:PublicComponent,canActivate:[AuthGuardService]},
    {path:'employee',component:EmployeeRegistrationComponent,canActivate:[AuthGuardService]},
    {path:'doctor',component:DoctorRegistrationComponent,canActivate:[AuthGuardService]},
    {path:'patient',component:PatientregistrationComponent,canActivate:[AuthGuardService]},
  

];
