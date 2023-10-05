import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { CurrencyComponent } from './currency/currency.component';
import { guardsGuard } from './guards.guard';

const routes: Routes = [
  {path: '', redirectTo:"/Login", pathMatch:'full'},

  {path: 'Login',  component: LogInComponent},

  {path: 'Register', component: RegisterComponent},
  {path: 'Users',
  canActivate:[guardsGuard],
  component: UsersComponent},
  {path: 'Currency', component: CurrencyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
