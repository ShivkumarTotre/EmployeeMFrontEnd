import { Component } from '@angular/core';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-department-info',
  templateUrl: './department-info.component.html',
  styleUrls: ['./department-info.component.css']
})
export class DepartmentInfoComponent {

  deptName:string='';

  url:any='/emp/addEmployee';

  constructor(private empservice:EmpServiceService){}

  display()
  {
    console.log(this.deptName)
  }

  onSubmit()
  {

    let postUser={

        'dept_name':this.deptName,
      };
      this.empservice.postRequest(this.url,postUser).subscribe((_data:any)=>{

        alert("done");
      });
  }

}
