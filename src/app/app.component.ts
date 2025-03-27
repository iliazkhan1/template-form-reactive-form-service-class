import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form.component';
import { RegistrationComponent } from './registration/registration.component';
import { EmployeeComponent } from './employee/employee.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormComponent,RegistrationComponent,EmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignment-1';
}
