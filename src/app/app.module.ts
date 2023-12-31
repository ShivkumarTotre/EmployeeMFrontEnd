import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpInfoComponent } from './emp-info/emp-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import{HttpClientModule} from '@angular/common/http';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { DepartmentInfoComponent } from './department-info/department-info.component';
import { LeaveInfoComponent } from './leave-info/leave-info.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpInfoComponent,
    EmployeeInfoComponent,
    DepartmentInfoComponent,
    LeaveInfoComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
