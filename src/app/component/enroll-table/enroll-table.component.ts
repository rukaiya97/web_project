import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enroll } from 'src/app/Services/enroll';
import { EnrollService } from 'src/app/Services/enroll.service';

@Component({
  selector: 'app-enroll-table',
  templateUrl: './enroll-table.component.html',
  styleUrls: ['./enroll-table.component.css']
})
export class EnrollTableComponent implements OnInit {

  enroll!:Enroll[]
  

  constructor(private enrollservice:EnrollService,
    private router:Router) { }

  ngOnInit(): void {

    this.getEnroll();

  }

  public getEnroll(){

    this.enrollservice.getEnrollList().subscribe(data=>{
      this.enroll =data;
      console.log(data);
    });
  }

  public deleteEnroll(id:number){
    return this.enrollservice.deleteEnroll(id).subscribe(data=>{
      console.log(data);
      this.getEnroll();
    })
  }

  enrollDetails(id: number){
    this.router.navigate(['navigation/enroll-details', {id}]);
  }


}
