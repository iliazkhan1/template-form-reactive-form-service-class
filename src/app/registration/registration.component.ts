import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  submitted = false;

  ngOnInit() {
    this.registrationForm = new FormGroup({
      firstname: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)
      ])
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.registrationForm.valid) {
      console.log('Form Submitted', this.registrationForm.value);
      this.registrationForm.reset();
      this.submitted = false;
    }
  }
}