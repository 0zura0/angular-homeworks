import { AfterViewChecked, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UsersmapService } from '../../../shared/Services/usersmap.service';
import { Router } from '@angular/router';
import { IUser } from '../../../shared/interfaces/interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  standalone: true,
  imports: [CommonModule],
  changeDetection:ChangeDetectionStrategy.OnPush
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
