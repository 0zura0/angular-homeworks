import { Injectable } from '@angular/core';
import { IUser } from './interfaces';
@Injectable({
  providedIn: 'root'
})
export class UsersmapService {
  public myContainer:Map<string | null | undefined,IUser> = new Map<string | null | undefined,IUser>();  
  public tempobject: IUser | null=null;
  public action:string="";
  islogin:boolean = true;
  userGmails:string='';
  isCurrency:boolean = false;
  isUser:boolean = false;
  isLogOut:boolean = false;
  isLoggedInButton:boolean = false;
  constructor() {}
}
