import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersComponent } from '../../users/Components/users.component';
import { UsersmapService } from '../../../shared/Services/usersmap.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
  standalone: true,
  imports:[ReactiveFormsModule,HttpClientModule]
})
export class LogInComponent implements OnInit {
  constructor(private router: Router,private formbuilder: FormBuilder, private container : UsersmapService){}
  obj={
    Email: '1',
    password: '1',
    confirmPassword: '12345678',
    nickname:'zura',
    phone: '+995551566888',
    website: 'yes',
  }
  ngOnInit(): void {
    // this.container.myContainer.set('1',this.obj)
    // console.log(this.container.myContainer);
  }

  public form =this.formbuilder.group({
    Email:['', Validators.required],
    password:['', Validators.required]
  });
  ToRegister(){
    this.router.navigate(['Register']);
  }
  public onSubmit(){
    console.log(typeof this.container.myContainer.get(this.form.get('Email')?.value));

    if( this.container.myContainer.get(this.form.get('Email')?.value)?.password === this.form.get('password')?.value){
    this.router.navigate(['/Users']);
    this.container.userGmails=this.form.get('Email')?.value as string;
    this.container.islogin=false;
    this.container.isCurrency=true;
    this.container.isLogOut=true;
    this.container.isUser=true;
    }
  }
}
