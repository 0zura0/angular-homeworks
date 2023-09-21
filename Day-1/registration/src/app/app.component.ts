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
  public arr:any=[];
  public form = this.formBuilder.group({
    Email:["", [Validators.required, Validators.email]],
    nickname:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]*$')]],
    phone:['',[Validators.required, Validators.pattern('^995$') && Validators.minLength(12)]],
    website:['',[Validators.required, Validators.pattern("https:\/\/[^\\s]+")]],
    checkBox:['',Validators.requiredTrue],
    password: this.formBuilder.group({
      password: ["", [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$'), Validators.minLength(3)]],
      confirmPassword: ["", [Validators.required, this.passwordMatchValidator]]
    }
    ),
  })
  constructor(private formBuilder:FormBuilder){}

  public onSubmit():void{ 
    this.issubmited=true;
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
      
      this.arr.push(obj)
    }else{
      console.log('invalid');
      
    }
  }

  
  public hasError(controlname:string,errorname:string):boolean{
    return this.issubmited && (this.form.get(controlname)?.hasError(errorname) || false)
  }

  public hasPassError(controlname:string,errorname:string):boolean{
    return this.issubmited && (this.form.get("password")?.get(controlname)?.hasError(errorname) || false)
  }
  
  public dis(){
    if(this.form.get("password")?.get("password")?.hasError('required') 
      || this.form.get("password")?.get("confirmPassword")?.hasError('required')
      || this.form.get("checkBox")?.hasError("requiredTrue")){
        return true;
      }else{
        return false;
      }
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
    if(this.form.get("password")?.get("password")?.value !== this.form.get('password')?.get("confirmPassword")?.value){
      return true;
    }else{
      return false;
      }
}



};