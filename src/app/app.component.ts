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
  userName: string = '';
  dob: string = '';
  emailAddress: string = '';
  gender: string = '';
  country: string = '';
  city: string = '';
  region: string = '';
  postal: string = '';
  isAgreed: boolean = false;

  genders = [
    {id: 1 , value: 'Male' , display: "Male"},
    {id: 2 , value: 'Female' , display: "Female"},
    {id: 3 , value: 'Other' , display: "Prefer not to say"}
  ]

  generateUserName(){
    let username: string = '';

    if(this.form.value.firstname.length >= 3){
      username += this.form.value.firstname.slice(0 , 3)
    }else{
      username += this.form.value.firstname
    }

    if(this.form.value.lastname.length >= 3){
      username += this.form.value.lastname.slice(0 , 3)
    }else{
      username += this.form.value.lastname
    }

    username += '@';

    let datetime = new Date(this.form.value.dob);
    username += datetime.getDate();
    username = username.toLocaleLowerCase();
    this.userName = username
    this.form.setValue({
      firstname: this.form.value.firstname,
      lastname: this.form.value.lastname,
      email: this.form.value.email,
      agreement: this.form.value.agreement,
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
    this.firstname = this.form.value.firstname;
    this.lastname = this.form.value.lastname;
    this.emailAddress = this.form.value.email;
    this.gender = this.form.value.gender;
    this.dob = this.form.value.dob;
    this.country = this.form.value.address.country;
    this.city = this.form.value.address.city;
    this.region = this.form.value.address.region;
    this.postal = this.form.value.address.postal;
    this.isAgreed = this.form.value.agreement;

    // this.form.reset();
  }
  ngOnInit(){
    console.log(this.form);
  }

  
}
