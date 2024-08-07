import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormservicesService } from '../../formservices.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{


  formVisible:boolean=false;
  sucess:boolean=false;
  success: boolean=false;
  failure:boolean=false;
  contactForm: FormGroup;

  services: string[] = [
    'All Equipment Operators',
    'All LMs & HMV Drivers',
    'Civil & Mechanical Engineers',
    'Time Keepers & Supervisors',
    'Admins, Front Office Executives, MIS',
    'Data Entry Operators',
    'Accounts & HR Executives',
    'Safety Officers & Safety Stewards',
    'Office Boys & House Keepers',
    'Cook & Assistant Cook',
    'All Types of Labors',
    'All Types of Helpers',
    'Welders',
    'Security Officers & Guards'
  ];


  constructor(private fb: FormBuilder, private server:FormservicesService) {
  
    this.contactForm = this.fb.group({
      fullname: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      service: [this.services[0], Validators.required], // Default to the first service
      message: ['']
    });
  }
ngOnInit(): void {
    
}
onSubmit() {
  if (this.contactForm.valid) {
    this.server.submitForm(this.contactForm.value).subscribe(
      res => {
        if (res && res.message === 'Form submitted successfully!') {
          this.success = true;
          setTimeout(() => {
            this.contactForm.reset();
          }, 1000);
      
          setTimeout(() => {
            this.formVisible = false;
          }, 2000);
        } else {
          this.failure = true;
        }
      },
      error => {
        console.error('Error submitting form:', error);
        this.failure = true;
      }
    );
  } else {
    console.log('Form is not valid');
  }
}
formvisible(){
  this.formVisible=true;
}
formHide(){
  this.formVisible=false;
}

  
}
