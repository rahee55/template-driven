import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-driven-form';
  firstname: string = '';
  lastname: string = '';
  dob: string = '';
  emailAddress: string = '';

  genders = [
    {id: 1 , value: 'Male' , display: "Male"},
    {id: 2 , value: 'Female' , display: "Female"},
    {id: 3 , value: 'Other' , display: "Prefer not to say"}
  ]

  generateUserName(){
    let username: string = '';

    if(this.firstname.length >= 3){
      username += this.firstname.slice(0 , 3)
    }else{
      username += this.firstname
    }

    if(this.lastname.length >= 3){
      username += this.lastname.slice(0 , 3)
    }else{
      username += this.lastname
    }

    let datetime = new Date(this.dob);
    username += datetime.getFullYear();
    username = username.toLocaleLowerCase();

    console.log(username);
    
    this.form.setValue({
      firstname: this.form.value.firstname,
      lastname: this.form.value.lastname,
      email: this.form.value.email,
      phone: this.form.value.phone,
      dob: this.form.value.dob,
      username: username,
      gender: this.form.value.gender,
      address: {
        street1: this.form.value.address.street1,
        street2: this.form.value.address.street2,
        country: this.form.value.address.country,
        city: this.form.value.address.city,
        region: this.form.value.address.region,
        postal: this.form.value.address.postal,
      }
    })
  }
  

  @ViewChild('registrationForm') form: NgForm;
  onFormSubmitted(){
    console.log(this.form);
    console.log(this.form.controls['firstname'].value);
    console.log(this.form.value.lastname);
    console.log(this.form.value.email);
    console.log(this.form.value.address.country);
    this.form.reset();
  }
  ngOnInit(){
    console.log(this.form);
  }

  
}
