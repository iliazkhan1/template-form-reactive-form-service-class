import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private employeeDetails = {
    name: 'Iliaz',
    employeeId: 'ID1234',
    email: 'iliaz@company.com'
  };

  getEmployeeDetails() {
    return this.employeeDetails;
  }
}