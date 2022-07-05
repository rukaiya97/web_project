import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Enroll } from 'src/app/Services/enroll';
import { EnrollService } from 'src/app/Services/enroll.service';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent implements OnInit {

  CreateEnroll!:FormGroup

  constructor(private enrollservice:EnrollService,private router:Router) { }

 
 ngOnInit(): void {

    this.CreateEnroll= new FormGroup({
      fname:new FormControl(''),
      lname:new FormControl(''),
      address:new FormControl(''),
      email:new FormControl(''),
      gender:new FormControl(''),
      time:new FormControl('')
    });

  }

 public AddtoEnroll(){
   return this.enrollservice.createEnroll(this.CreateEnroll.value).subscribe(data=>{
     console.log(data)
     this.gotoenrolllist();
   });
 }

  public gotoenrolllist(){
    this.router.navigate(['navigation/enroll_table']);
  }

submit(){

  console.log(this.CreateEnroll.value)
  this.AddtoEnroll();

}



}
