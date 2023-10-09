import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

public LocalUserContainer:IEmployee[]=[]; 

public bottonLabel: string='Register';  

public CurrentName:string="";

public CurrentSalary:number=0;

public CurrentAge:number=0;

public CurrentId:number | null = null;

shoulILogIn:boolean = false;

  constructor(private http:HttpClient) {}

  public getAllUsers():Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(`http://localhost:3000/Employee/`);
  }
  
  public getUserById(id:number):Observable<IEmployee> {
    return this.http.get<IEmployee>(`http://localhost:3000/Employee/${id}`);
  }

  public addEmp(empObj:IEmployee):Observable<IEmployee> {  
    return this.http.post<IEmployee>('http://localhost:3000/Employee', empObj);
  }

  public putUser(empObj:IEmployee):Observable<IEmployee>{
    return this.http.put<IEmployee>(`http://localhost:3000/Employee/${empObj.id}`,empObj);
  }

  public deleteUser(id:number):Observable<any> {
   return this.http.delete<any>(`http://localhost:3000/Employee/${id}`)
  }
}
