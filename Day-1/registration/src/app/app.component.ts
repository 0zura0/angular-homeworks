import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  title = 'registration';
  private issubmited= false;
  public buttonLabel = 'Register';
  public map= new Map();
  private coutner:number = 0;
  public arrayOfObject:any;
  public deletionPopup:boolean|null = null;
  public doIdelete:boolean|null = null;
  public sure :boolean | null = null;
  private index:number=0;
  public formdisabled=false;
  
  public form = this.formBuilder.group({
    Email:["", [Validators.required, Validators.email]],
    nickname:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]*$')]],
    phone:['',[Validators.required, Validators.pattern('^995$') && Validators.minLength(12)]],
    website:['',[Validators.required, Validators.pattern("https:\/\/[^\\s]+")]],
    checkBox:[false,Validators.requiredTrue],
    password: this.formBuilder.group({
      password: ["", [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$'), Validators.minLength(3)]],
      confirmPassword: ["", [Validators.required, this.passwordMatchValidator]]
    }),
  })
  constructor(private formBuilder:FormBuilder){}

  public onSubmit():void{ 
    this.issubmited=true;
    if(this.buttonLabel==='Update'){
      if(this.form.status==='VALID'){
        let obj={
          Email:this.form.value.Email,
          password:this.form.get('password')?.get("password")?.value,
          comfirmPass:this.form.get('password')?.get("confirmPassword")?.value,
          nickname:this.form.value.nickname,
          phone:this.form.value.phone,
          website:this.form.value.website,
          checkBox:this.form.value.checkBox,
        }
        this.map.set(this.index,obj)
        this.arrayOfObject =Array.from(this.map.values())
        this.buttonLabel='Register';
        this.form.reset()
        this.issubmited=false
        this.formdisabled=false;
      }
    }else{
    if(this.form.status==='VALID'){
      let obj={
        Email:this.form.value.Email,
        password:this.form.get('password')?.get("password")?.value,
        comfirmPass:this.form.get('password')?.get("confirmPassword")?.value,
        nickname:this.form.value.nickname,
        phone:this.form.value.phone,
        website:this.form.value.website,
        checkBox:this.form.value.checkBox,
      }
      console.log(obj);
      console.log("checkis ",this.form.get('checkBox')?.value);
      
      this.map.set(this.coutner++,obj)
      console.log(this.map);
      this.arrayOfObject= Array.from(this.map.values())
      console.log(Array.from(this.map.values()));
      this.form.reset()
      this.issubmited=false
    }else{
      console.log('invalid');
    }
  }
  }

  
  public hasError(controlname:string,errorname:string):boolean{
    return this.issubmited && (this.form.get(controlname)?.hasError(errorname) || false)
  }

  public hasPassError(controlname:string,errorname:string):boolean{
    return this.issubmited && (this.form.get("password")?.get(controlname)?.hasError(errorname) || false)
  }

    public passwordMatchValidator(): ValidatorFn {
      return (control: AbstractControl): ValidationErrors | null => {
        const password = control.get('password');
        const confirmPassword = control.get('confirmPassword');
    
        if (!password || !confirmPassword) {
          
          return null;
        }    
        return password.value === confirmPassword.value ? null : { passwordMismatch: true };
      };
    }

  public equals(){
    if((this.form.get("checkBox")?.value !== true 
    || this.form.get("password")?.get("password")?.value==''
    || this.form.get("password")?.get("confirmPassword")?.value==''
    || this.form.get("password")?.get("password")?.value !== this.form.get('password')?.get("confirmPassword")?.value)){
      console.log(this.form.get("checkBox")?.value);
      return true;
    }else{
      return false;
      }
    }

    public ifequals(){
      if((this.form.get("password")?.get("password")?.value!== this.form.get('password')?.get("confirmPassword")?.value)){
        return true;
      }else{
        return false;
        }
  
    }
    
public deleteOject(){
  this.deletionPopup=true;
};

public del(number:number){
  this.map.delete(number);
  this.arrayOfObject= Array.from(this.map.values())
  this.deletionPopup=null;
  this.sure=null;
}
public cancel(){
  this.deletionPopup=null;
  this.sure=null;
}
public sureDEL(){
  this.sure = true;
}

public edit(ind:number){
this.buttonLabel= "Update";
this.index=ind;
this.form.get('Email')?.setValue(this.arrayOfObject[ind].Email);
this.form.get('nickname')?.setValue(this.arrayOfObject[ind].nickname);
this.form.get('phone')?.setValue(this.arrayOfObject[ind].phone);
this.form.get('checkBox')?.setValue(this.arrayOfObject[ind].checkBox)
this.form.get('website')?.setValue(this.arrayOfObject[ind].website);
this.form.get('password')?.get('password')?.setValue(this.arrayOfObject[ind].password);
this.form.get('password')?.get('confirmPassword')?.setValue(this.arrayOfObject[ind].comfirmPass);
this.formdisabled=true;
}

public get check():boolean {
  return this.formdisabled
}
}