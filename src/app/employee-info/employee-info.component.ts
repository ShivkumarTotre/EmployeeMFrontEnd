import { Component } from '@angular/core';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent {
    
  empName:string='';
  email:string='';
  deptid:string='';

  url:any='/emp/addEmployee';

  constructor(private empservice:EmpServiceService){}

  display()
  {
    console.log(this.empName)
  }

  onSubmit()
  {

    let postUser={

        'ename':this.empName,
        'email':this.email,
        'deptId':this.deptid,
      };
      this.empservice.postRequest(this.url,postUser).subscribe((_data:any)=>{

        alert("done");
      });
  }

}
