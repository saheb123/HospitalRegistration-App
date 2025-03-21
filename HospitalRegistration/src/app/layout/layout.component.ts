import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../auth.service';
import { Store } from '@ngrx/store';
import { clearUserName } from '../store/auth/auth.action';
import { Observable } from 'rxjs';
import { selectedAuth } from '../store/auth/auth.selector';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,RouterLinkActive,RouterLink,AsyncPipe,CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  username !:Observable<string>
  constructor(private authService:AuthService,private router:Router,private store: Store){
    //this.username= this.store.select(selectedAuth);
  }
  ngOnInit(){
    this.username= this.store.select(selectedAuth);
  }
 get AuthDetails():any{
  return this.authService.getAuthDetails();
 }
 public get adminRoleAccess():any{
return this.authService.getAdminRole();
 }
 public get employeeRoleAccess():any{
  return this.authService.getEmployeeRole();
   }
   public get doctorRoleAccess():any{
    return this.authService.getDoctorRole();
     }

     logOut(){
      this.store.dispatch(clearUserName())
      localStorage.clear();
      this.router.navigate(['/'])
     }
}
