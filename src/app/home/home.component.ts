import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import alert from 'sweetalert2';
import * as THREE from 'three';

//import {rubberBandAnimation} from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})

export class HomeComponent implements OnInit {
    v:number=0;
  constructor(private http:HttpClient) {


    this.http.get<any>('https://codechefcmrtc.tech/getc.php' )
    .subscribe(Response => {
       this.v=parseInt(Response);
       
    });
   }
   getval():number {
    return this.v;
    
//alert.fire(v.toString());
   
    
   }
   nop(){
     alert.fire("ERROR","User is not using this platform","error");
   }
        fullname:any=null;
  ngOnInit(): void {
  /*  this.http.get<any>('https://competitive-coding-api.herokuapp.com/api/codechef/charann' )
    .subscribe(Response => {
  try{
      this.fullname=Response["user_details"]["name"];
      alert.fire("SUCCESS",'Your name is '+this.fullname,'success');
  }
  catch(err){
    this.fullname=null;
    alert.fire("ERROR",'Invalid Codechef Username','error');
  }
       
       
  });*/
}
 
}
