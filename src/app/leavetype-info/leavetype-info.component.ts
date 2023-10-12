import { Component } from '@angular/core';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-leavetype-info',
  templateUrl: './leavetype-info.component.html',
  styleUrls: ['./leavetype-info.component.css']
})
export class LeavetypeInfoComponent {

  leaveName:string='';

  url:any='/emp/addEmployee';

  constructor(private empservice:EmpServiceService){}

  display()
  {
    console.log(this.leaveName)
  }

  onSubmit()
  {

    let postUser={

        'leave_name':this.leaveName,
      };
      this.empservice.postRequest(this.url,postUser).subscribe((_data:any)=>{

        alert("done");
      });
  }

}
