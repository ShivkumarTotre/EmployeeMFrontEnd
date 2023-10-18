import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from '../emp-service.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.css']
})
export class EmpInfoComponent implements OnInit {

  // empName:string='';
  // designation:string='';
  // dept:string='';
  // salary:string='';

  empName:string='';
  
  deptid:string='';
  employees: Object | undefined;
  empList: any[]=[];
  deptList:any[]=[];
  deptName:string='';
  leaveType:string='';
  startDate:string='';
  endDate:string='';
  description:string='';
  status:string='';
  leaveList:any[]=[];
  
  

  

  constructor(private empservice:EmpServiceService, private router:Router){}

  ngOnInit(): void {
   this.getEmpList();
   this.getDeptList();
   this.getLeaveList();
   
  }
  
  onSubmit(){
        // alert("Leave has been appiled sucessfully");
      let postUser={
        'empName':this.empName,
        //'DeptName':this.deptName,
        'leaveType':this.leaveType,
        'startDate':this.startDate,
        'endDate':this.endDate,
        'description':this.description,
      };
       this.empservice.postRequest3('emp/addLeave',postUser).subscribe((_data:any)=>{
        console.log(_data);
        alert("Leave has been appiled sucessfully");
       });
    
      setTimeout(() => {
        location.reload();
      }, 100);
    }
navigatetoLeaveList(){
  this.router.navigate(['/leavelist']);
  // alert("DOne");

}
  

  getEmpList(){

    this.empservice.postRequest('emp/emplist', '').subscribe((data: any) => {
      if (data) {
        this.empList = data; 
    
        console.log(this.empList);
    
        
      } else {
        console.error('No data or invalid data structure received from the server.');
      }
    });

   
     
  }
  getDeptList(){

    this.empservice.postRequest1('emp/deptlist', '').subscribe((data: any) => {
      if (data) {
        this.deptList = data; 
    
        console.log(this.deptList);
    
        
      } else {
        console.error('No data or invalid data structure received from the server.');
      }
    });

  // display()
  // {
  //   console.log(this.empName)
  // }

}

getLeaveList(){

  this.empservice.postRequest2('emp/leavetypelist', '').subscribe((data: any) => {
    if (data) {
      this.leaveList = data; 
  
      console.log(this.leaveList);
  
      
    } else {
      console.error('No data or invalid data structure received from the server.');
    }
  });
}
}
