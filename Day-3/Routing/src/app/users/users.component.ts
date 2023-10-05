import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { UsersmapService } from '../usersmap.service';
import { Router } from '@angular/router';
import { IUser } from '../interfaces';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
public arrayUsers = Array.from(this.container.myContainer.values());

public buttonLabel = 'Register';
private index:number=0;
public deletionPopup : boolean | null = null;
public sure:boolean | null =null; 

constructor(public container : UsersmapService, private router:Router){}

  ngOnInit(): void {
    // console.log(this.container.myContainer.get('zura@z'))
  }

  public edit(mail:string | undefined | null):void {
    this.container.tempobject = this.container.myContainer.get(mail) as IUser;
    this.container.action='Update';
    this.router.navigate(['/Register']);
    }
    public deleteOject(){
      this.deletionPopup=true;
    };
    public sureDEL(){
      this.sure = true;
    }
    public cancel(){
      this.deletionPopup=null;
      this.sure=null;
    }
    
    public del(email:string | null | undefined){
      console.log(email);
      this.container.myContainer.delete(email as string)
      this.arrayUsers= Array.from(this.container.myContainer.values())
      this.deletionPopup=null;
      this.sure=null;
    }
}
