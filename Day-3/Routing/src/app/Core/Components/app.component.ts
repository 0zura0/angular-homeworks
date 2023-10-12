import { Component } from '@angular/core';
import { UsersmapService } from '../../shared/Services/usersmap.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone:true,
  imports:[ReactiveFormsModule,RouterModule,CommonModule,FormsModule,HttpClientModule],
})
export class AppComponent {
  title = 'Routing';
  constructor(public router: Router, public cont:UsersmapService){}

  public Curency(){
    this.router.navigate(['Currency']);
  }

  public Users(){
    this.router.navigate(['Users']);
  }

  public LogIn(){
    this.router.navigate(['Login']);
  }

 public logOutOperation(){
  this.cont.islogin=true;
  this.cont.isCurrency=false;
  this.cont.isLogOut=false;
  this.cont.isUser=false;
  this.router.navigate(['Login'])
 }


 public Employee(){
  this.router.navigate(['employees']);
 }
}
