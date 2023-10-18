import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  baseurl:any="http://localhost:8080/";
  baseurl1:any="http://localhost:8080/";
  baseurl2:any="http://localhost:8080/";

  baseurl3:any="http://localhost:8080/";
  baseurl4:any="http://localhost:8080/";

  constructor(private http:HttpClient) { }


 headers = new HttpHeaders({
  'Content-Type': 'application/json'
});

postRequest(url: string, param: any) {
  this.baseurl = this.baseurl + url;
  return this.http.post(this.baseurl, param, { headers: this.headers });
}

postRequest1(url: string, param: any) {
  this.baseurl1 = this.baseurl1 + url;
  return this.http.post(this.baseurl1, param, { headers: this.headers });
}

postRequest2(url: string, param: any) {
  this.baseurl2 = this.baseurl2 + url;
  return this.http.post(this.baseurl2, param, { headers: this.headers });
}

postRequest3(url: string, param: any) {
  this.baseurl3 = this.baseurl3 + url;
  return this.http.post(this.baseurl3, param, { headers: this.headers });
}

postRequest4(url:string,param:any){
  this.baseurl4=this.baseurl4+url;
  return this.http.post(this.baseurl4,param,{headers:this.headers});
}

}
