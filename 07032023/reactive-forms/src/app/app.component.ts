import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators,FormArray} from '@angular/forms'
import { passwordValidator } from './shared/password.validator';
import { forbiddenNameValidator } from './shared/user-name.validator';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  registrationForm!: FormGroup;
  
  get email(){
    return this.registrationForm.get('email');
  }
  get alternateEmails(){
    return this.registrationForm.get('alternateEmails') as FormArray;
  }
  addAlternateEmails(){
    this.alternateEmails.push(this.fb.control(''));
  }
  constructor(private fb:FormBuilder){}
  ngOnInit(){
   this.registrationForm = this.fb.group({
      userName:['',[Validators.required,Validators.minLength(3),forbiddenNameValidator(/password/)]],
      email:[''],
      subscribe:[false],
      password:[''],
      confirmPassword:[''],
      address:this.fb.group({
        city:[''],
        state:[''],
        postalCode:['']
      }),alternateEmails:this.fb.array([])
    },{validators:passwordValidator})
    this.registrationForm.get('subscribe')?.valueChanges.subscribe(checkedValue=>{
       const email=this.registrationForm.get('email');
      if(checkedValue){
        email?.setValidators(Validators.required)
      }else{
        email?.clearValidators();
      }
      email?.updateValueAndValidity();
    });
  }
  onSubmit(){
    console.log(this.registrationForm.controls);
  }
  // registrationForm = new FormGroup({
  // userName:new FormControl('Rutvik'),
  // password:new FormControl(''),
  // confirmPassword:new FormControl(''),
  // address: new FormGroup({
  //     city:new FormControl(''),
  //     state:new FormControl(''),
  //     postalCode:new FormControl('')
  //  })
  // })
loadApiData(){
  //set value is used when you want to set all the values of form
  // this.registrationForm.setValue({
  //   userName:'Bruce',
  //   password:'test',
  //   confirmPassword:'test',
  //   address:{
  //     city:'ahmedabad',
  //     state:'gujarat',
  //     postalCode:'382150'
  //   }
  // })
  //patch value is used when you want to set values of the few formcontrols
  this.registrationForm.patchValue({
    userName:'Bruce',
    password:'test',
    confirmPassword:'test'
  })
 
}
}
