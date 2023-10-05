import { Component } from '@angular/core';
import { UsersmapService } from './usersmap.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
}
