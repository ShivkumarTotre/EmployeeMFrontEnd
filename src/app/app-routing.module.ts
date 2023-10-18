import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpInfoComponent } from './emp-info/emp-info.component';
import { LeaveInfoComponent } from './leave-info/leave-info.component';

const routes: Routes = [
  { path: '', component: EmpInfoComponent},
  { path: 'leavelist', component: LeaveInfoComponent},

  { path: '', redirectTo: '/leavelist', pathMatch: 'full' } // Redirect to login by default
  // { path: '**', redirectTo: '/leavelist' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
