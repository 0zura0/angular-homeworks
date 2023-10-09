import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { CurrencyComponent } from './currency/currency.component';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginEmployeeComponent } from './login-employee/login-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    UsersComponent,
    CurrencyComponent,
    EmployeeComponent,
    TableComponent,
    LoginEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
