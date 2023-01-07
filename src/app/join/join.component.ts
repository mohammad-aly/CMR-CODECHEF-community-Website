import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import {MatRippleModule} from '@angular/material/core';

import alert from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
 
export class JoinComponent implements OnInit {
  fullname: any;
 yearlist=[1,2,3,4];
 year=0;
 Fbranch=["Click to select","CSE","CSE(AIML)","CSE(DataScience)","CS(Design)","AIML","IT","ECE"];
 Sbranch=["Click to select","Civil Engineering","Mechanical Engineering","ECE","CSE","IT","CSE(DataScience)","CSE(AIML)"];
 Tbranch=["Click to select","CSE","IT","ECE","Civil Engineering","Mechanical Engineering"];
 branchlist=[""];
 gotyear(y:any){
if(y==1)
this.branchlist=this.Fbranch;
else if(y==2)
this.branchlist=this.Sbranch;
else
this.branchlist=this.Tbranch;

 }
   
  onChange() {
  //Do something
}
    validateForm(  sec: any,   branch: any,   Year: any,   rollno: any, ccuser: any,   mobile: any,    sname: any,   gname: any):boolean {
    

    var b=0;
    var c=0;
    var i=0;
    if(sec==""){
      alert.fire("ERROR","Enter all the details","error");
    return false;}
    if(branch=="Click to select"){alert.fire("ERROR","Enter all the details","error");
    return false;}
    if(branch==""){alert.fire("ERROR","Enter all the details","error");
    return false;}
    if(Year==""){alert.fire("ERROR","Enter all the details","error");
    return false;}
    for(i=0;i<gname.length;i++)
    {
        if('A' <= gname[i] && gname[i] <= 'Z') 
            b++;
        if('a' <= gname[i] && gname[i] <= 'z') 
            c++;
    }

    var s=0;
    var g=0;
    for(i=0;i<sname.length;i++)
    {
        if('A' <= sname[i] && sname[i] <= 'Z')
            s++;
        if('a' <= sname[i] && sname[i] <= 'z')
            g++;
    }


    if ((gname == "") ||(sname=="") || (mobile=="")||(ccuser=="")||(rollno==""))
    {
      
        alert.fire("ERROR"," please fill all the fields ","error");
        return false;
    }else if(rollno.length!=10){  
        alert.fire("ERROR","input the correct Roll Number","error");  
        return false;  
    }else if(mobile.length!=10){  
        alert.fire("ERROR","input the 10 digits mobile number","error");  
        return false;  
    }else if(c+b<=2){
        alert.fire("ERROR","Minimum 3 letters should be present in the [GIVEN NAME] field","error");
        return false;
    }else if(s+g<=2){
        alert.fire("ERROR","Minimum 3 letters should be present in the [SURNAME] field","error");
        return false;
    }
    
    return true;
}
 
  router: string;
  name!: string;
  constructor(_router: Router,private http:HttpClient){
    

          this.router = _router.url; 
    }

  ngOnInit(): void {



  }
 
  
  onSubmit(data: any   ) {
  let name: string;
    let vds=this.validateForm(data.sec,data.branch, data.Year,  data.rollno,  data.ccuser,  data.mobile, data.sname,  data.gname);
   if(vds){
    this.http.get<any>('https://competitive-coding-api.herokuapp.com/api/codechef/'+data.ccuser )
     .subscribe(Response => {
   try{
name=Response["user_details"]["name"];
 
    this.http.post<any>('https://codechefcmrtc.tech/adduser',{'email': data.rollno+'@cmrtc.ac.in'
  ,
  'firstname':data.gname,'lastname':data.sname,'roll':data.rollno,'chefname':data.ccuser,'year':data.Year,'dept':data.branch,'section':data.sec,
  'auth':' ','mobile':data.mobile
  
  }
  
  )
    .subscribe(Response => {
 let st;
 st=Response;
 if(st["status"]==1)
 alert.fire('GREAT','Thank you '+name+'. You are now a community member of Codechef CMRTC chapter.Click OK button to join our discord server now. ','success').then(
function(){
 
window.location.href='https://discord.gg/eaZc85ad';
  
}


 );
else
{
  alert.fire('ERROR','Something went wrong . please contact your executive member/ coreteam','error');
}
    });
   }
   catch(err){
     this.fullname=null;
     alert.fire("ERROR",'Invalid Codechef Username','error');
   }
        
        
   });}
    }

}
 
