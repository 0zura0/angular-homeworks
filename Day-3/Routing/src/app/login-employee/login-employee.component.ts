import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { UsersmapService } from '../usersmap.service';

@Component({
  selector: 'app-login-employee',
  templateUrl: './login-employee.component.html',
  styleUrls: ['./login-employee.component.scss']
})
export class LoginEmployeeComponent implements OnInit{


  constructor(private router: Router,
    private formbuilder: FormBuilder,
    private employeeService: EmployeeService,
    ){}

  ngOnInit(): void {
    this.employeeService.getAllUsers().subscribe(users =>{
      this.employeeService.LocalUserContainer=users;
    }) 
  }

public form =this.formbuilder.group({
Name:['', Validators.required],
salary:['', Validators.required],
Age:['', Validators.required]
});

public onSubmit(){
for (let index = 0; index < this.employeeService.LocalUserContainer.length; index++) {

  if(this.employeeService.LocalUserContainer[index].Name==this.form.get('Name')?.value

      && this.employeeService.LocalUserContainer[index].Salary==parseInt(this.form.get('salary')?.value as string)

      && this.employeeService.LocalUserContainer[index].Age== parseInt(this.form.get('Age')?.value as string)){

        this.employeeService.shoulILogIn=true
}
}

if(this.employeeService.shoulILogIn){
  this.router.navigate(['employees/Users']);
}
}


public Register(){
  this.router.navigate(['employees/Register'])
}


}
