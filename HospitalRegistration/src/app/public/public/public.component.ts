import { Component } from '@angular/core';
import { LayoutComponent } from '../../layout/layout.component';
import { AuthService } from '../../auth.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-public',
  imports: [LayoutComponent,LoginComponent],
  templateUrl: './public.component.html',
  styleUrl: './public.component.css'
})
export class PublicComponent {
constructor(private authService:AuthService){

}
  get AuthDetails():any{
    return this.authService.getAuthDetails();
   }
}
