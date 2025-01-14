import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormsModule, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { IUser } from '../../../shared/interfaces/interfaces';
import { UsersmapService } from '../../../shared/Services/usersmap.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports:[ReactiveFormsModule,CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {
  private isSubmited=false;
  public action:string='Register';
  constructor(private formBuilder: FormBuilder, private container: UsersmapService,private router:Router){}
  ngOnInit(): void {
    if(this.container.action=='Update'){
      this.action=this.container.action
      this.form.get('email')?.setValue(this.container.tempobject?.Email as string)
      this.form.get('password')?.setValue(this.container.tempobject?.password as string)
      this.form.get('confirmPassword')?.setValue(this.container.tempobject?.confirmPassword as string)
      this.form.get('nickname')?.setValue(this.container.tempobject?.nickname as string)
      this.form.get('phone')?.setValue(this.container.tempobject?.phone as string)
      this.form.get('webkitURL')?.setValue(this.container.tempobject?.website as string)
      console.log(this.container.tempobject?.Email);
    }
    console.log(this.container.action=='Update');
    
  }

  public form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/), Validators.minLength(7)]],
    confirmPassword: ['', [Validators.required]],  //აქ დავამატებ
    nickname: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9-]+$/)]],
    phone: ['', [Validators.required, Validators.pattern(/^\+995\d{9}$/)]],
    webkitURL: ['', [Validators.required, Validators.pattern(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/)]],
    checkbox: ['', [Validators.requiredTrue]],
  },
  {validators: this.passwordMatchValidator()},
  )

 

  public onSubmit(){
    this.isSubmited=true;
    if(this.form.valid){
      let obj:IUser = {
        Email: this.form.get('email')?.value,
        password: this.form.get('password')?.value,
        confirmPassword: this.form.get('confirmPassword')?.value,
        nickname:this.form.get('nickname')?.value,
        phone: this.form.get('phone')?.value,
        website: this.form.get('webkitURL')?.value,
      }
      this.container.myContainer.set(this.form.get('email')?.value,obj)
      this.router.navigate(["/Login"])
      if(this.container.action==='Update'){
        this.router.navigate(['/Users'])
      }else{
        this.router.navigate(["/Login"])
      }
      console.log(this.container.myContainer.get(this.form.get('website')?.value));
    }
  }

  public hasError(controlName:string, errorName:string){
    return  this.isSubmited && this.form.get(controlName)?.hasError(errorName);
  }

  public passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const password = control.get('password');
      const confirmPassword = control.get('confirmPassword');
if(confirmPassword?.value!==''){
      if (password?.value !== confirmPassword?.value) {
        control.get('confirmPassword')?.setErrors({'passwordMismatch': true} )
      } 
    }
      return null;
    };
  }
  
  public disabled(): boolean {
    if(this.form.get('password')?.errors==null 
      && this.form.get('confirmPassword')?.errors===null
      && this.form.get('checkbox')?.errors==null
    ){      
      return false;
    }
    return true;
  }
}
