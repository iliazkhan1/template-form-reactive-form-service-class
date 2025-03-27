import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employeeData: any;

  constructor(private employeeService: EmployeeService) {}

  showDetails() {
    this.employeeData = this.employeeService.getEmployeeDetails();
  }
}
