import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log('Form submitted:', this.contact);
    
  }
}