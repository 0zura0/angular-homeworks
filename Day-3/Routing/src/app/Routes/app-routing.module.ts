import { RouterModule, Routes } from '@angular/router';
import { guardsGuard } from '../Guards/guards.guard';


export const routes: Routes = [
  {path: '', redirectTo:"/Login", pathMatch:'full'},

  {
    path: 'Login',
    loadComponent: () => import('../Features/log-in/components/log-in.component').then((c) =>c.LogInComponent),
  },

  {
    path: 'Register', 
    loadComponent: () => import('../Features/register/Components/register.component').then((c) => c.RegisterComponent)
  },
  {
    path: 'Users',
  canActivate:[guardsGuard],
  loadComponent: () => import('../Features/users/Components/users.component').then((c) => c.UsersComponent)
},
  {
    path: 'Currency', 
    loadComponent: () => import('../Features/currency/Components/currency.component').then((c)=>c.CurrencyComponent)
  },
  {
    path: 'employees', 
    loadComponent: () => import('../Features/login-employee/Components/login-employee.component').then((c) => c.LoginEmployeeComponent)
  },
  {
    path: 'employees/Users',
    loadComponent: () => import('../Features/tables/Components/table.component').then((c) => c.TableComponent)
  },
  {
    path: 'employees/Register', 
    loadComponent: () => import('../Features/employee/Components/employee.component').then((c) => c.EmployeeComponent)
  },
];

