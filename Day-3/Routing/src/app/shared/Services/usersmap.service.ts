import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/interfaces';
@Injectable({
  providedIn: 'root'
})
export class UsersmapService {
  public myContainer:Map<string | null | undefined,IUser> = new Map<string | null | undefined,IUser>();  
  public tempobject: IUser | null=null;
  public action:string="";
  userGmails:string='';


  islogin:boolean = true;
  isCurrency:boolean = false;
  isUser:boolean = false;
  isLogOut:boolean = false;
  isLoggedInButton:boolean = false;
  constructor() {}
}
