import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from '../emp-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leave-info',
  templateUrl: './leave-info.component.html',
  styleUrls: ['./leave-info.component.css']
})
export class LeaveInfoComponent implements OnInit{
  leaveList:any[]=[];
  empName:string='';
  leaveType:string='';
  startDate:string='';
  endDate:string='';
  leaveId:string='';
  approve:number=1;
  reject:number=0;
  constructor(private empservice:EmpServiceService,private router:Router){}
  ngOnInit(): void {
    this.getLeaveListInfo();
  }
  OnSubmit(leaveId:string){
    let postUser={
    'status':this.approve,
    
    };
    this.empservice.postRequest4('emp/',postUser).subscribe((response:any)=>{

    }

    )

  }
  OnSubmit1(leaveId:string){
    let postUser={
      'status':this.reject,
    }
    this.empservice.postRequest4('emp/',postUser).subscribe((response:any)=>{

    }

    )
  }
getLeaveListInfo(){
     this.empservice.postRequest4('emp/leavelist','').subscribe((data:any)=>{
      if(data){
        this.leaveList=data;
      }else {
        console.error('No data or invalid data structure received from the server.');
      }

     }); 
}


  // leaveId:string='';
  // eID:string='';
  // startdate:string='';
  // enddate:string='';
  // desc:string='';

  // url:any='/emp/addEmployee';

  // constructor(private empservice:EmpServiceService){}
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  // display()
  // {
  //   console.log(this.leaveId)
  // }

  // onSubmit()
  // {

  //   let postUser={

  //       'leavetypeId':this.leaveId,
  //       'eId':this.eID,
  //       'start_date':this.startdate,
  //       'end_date':this.enddate,
  //       'description':this.desc
  //     };
  //     this.empservice.postRequest(this.url,postUser).subscribe((_data:any)=>{

  //       alert("done");
  //     });
  // }

}
