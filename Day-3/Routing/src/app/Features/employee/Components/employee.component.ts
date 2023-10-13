import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../../shared/Services/employee.service';
import { IEmployee } from '../../../shared/interfaces/interfaces';
// import { UsersmapService } from '../usersmap.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  standalone: true,
  imports:[ReactiveFormsModule,CommonModule,HttpClientModule],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class EmployeeComponent implements OnInit {

  isSubmited:null | boolean = null;
  public bottonLabel: string=this.employeeService.bottonLabel;

  //----------------------------------------------------------------
    constructor(private router: Router,
                private formbuilder: FormBuilder,
                private employeeService: EmployeeService,
                private route:ActivatedRoute,
                ){}
  ngOnInit(): void {
    if(this.employeeService.bottonLabel=='Update'){
      this.form.get('Name')?.setValue( this.employeeService.CurrentName);
      this.form.get('salary')?.setValue(this.employeeService.CurrentSalary.toString());
      this.form.get('Age')?.setValue(this.employeeService.CurrentAge.toString());
    }
    
  }
//----------------------------------------------------------------
    public form =this.formbuilder.group({
      Name:['', [Validators.required, Validators.pattern(/^[^0-9][a-zA-Z0-9]*$/)]],
      salary:['', [Validators.required, Validators.pattern(/^\d+$/)]],
      Age:['', [Validators.required, Validators.pattern(/^\d+$/)]]
    });
//-----------------------------------------------------------------
    public onSubmit(){
      if(this.form.status=="VALID"){

        if(this.employeeService.bottonLabel=="Update"){
          let name = this.form.get("Name")?.value as string;

          let salary = this.form.get("salary")?.value;

          let age = this.form.get("Age")?.value;

          let id=this.employeeService.CurrentId= this.route.snapshot.queryParams["id"];

          console.log(this.employeeService.CurrentId);

          let tempObj={id:id,Name:name, Salary:parseInt(salary as string), Age:parseInt(age as string)}

          this.employeeService.LocalUserContainer[id-1]= tempObj
          console.log(this.employeeService.LocalUserContainer[id-1]);
          this.router.navigate(["employees/Users"]);
          this.PutUser(tempObj)

        }else{
        this.router.navigate(['employees']);
        this.AddEmp()

        }
      }
      this.isSubmited=true
      }
    
//------------------------------------------------------------------
      public AddEmp(){
        this.employeeService.addEmp(
          {
            Name: this.form.get('Name')?.value as string,
            Salary: parseInt(this.form.get('salary')?.value as string),
            Age: parseInt(this.form.get('Age')?.value as string)
          }
        ).subscribe()
      }
    
    public hasError(controlName:string, errorName:string){
      return  this.isSubmited && this.form.get(controlName)?.hasError(errorName);
    }

//----------------------------------------------------------------
public PutUser(obj:IEmployee){
  this.employeeService.putUser(obj).subscribe();
}
}

