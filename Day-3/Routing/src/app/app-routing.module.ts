import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { CurrencyComponent } from './currency/currency.component';
import { guardsGuard } from './guards.guard';
import { TableComponent } from './table/table.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginEmployeeComponent } from './login-employee/login-employee.component';

const routes: Routes = [
  {path: '', redirectTo:"/Login", pathMatch:'full'},

  {path: 'Login',  component: LogInComponent},

  {path: 'Register', component: RegisterComponent},
  {path: 'Users',
  canActivate:[guardsGuard],
  component: UsersComponent},
  {path: 'Currency', component: CurrencyComponent},
  {path: 'employees', component: LoginEmployeeComponent},
  {path: 'employees/Users', component:TableComponent},
  {path: 'employees/Register', component:EmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
