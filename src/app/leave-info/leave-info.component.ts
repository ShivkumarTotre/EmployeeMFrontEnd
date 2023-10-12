import { Component } from '@angular/core';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-leave-info',
  templateUrl: './leave-info.component.html',
  styleUrls: ['./leave-info.component.css']
})
export class LeaveInfoComponent {

  leaveId:string='';
  eID:string='';
  startdate:string='';
  enddate:string='';
  desc:string='';

  url:any='/emp/addEmployee';

  constructor(private empservice:EmpServiceService){}

  display()
  {
    console.log(this.leaveId)
  }

  onSubmit()
  {

    let postUser={

        'leavetypeId':this.leaveId,
        'eId':this.eID,
        'start_date':this.startdate,
        'end_date':this.enddate,
        'description':this.desc
      };
      this.empservice.postRequest(this.url,postUser).subscribe((_data:any)=>{

        alert("done");
      });
  }

}
