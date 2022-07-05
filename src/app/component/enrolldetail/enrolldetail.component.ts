import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Enroll } from 'src/app/Services/enroll';
import { EnrollService } from 'src/app/Services/enroll.service';

@Component({
  selector: 'app-enrolldetail',
  templateUrl: './enrolldetail.component.html',
  styleUrls: ['./enrolldetail.component.css']
})
export class EnrolldetailComponent implements OnInit {

  id!: number
  enroll!: Enroll
  constructor(private route: ActivatedRoute, private enrollService: EnrollService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.enroll = new Enroll();
    this.enrollService.getEnrollID(this.id).subscribe( data => {
      this.enroll = data;
    });
  }

}


