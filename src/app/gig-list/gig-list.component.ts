import { Component, OnInit } from '@angular/core';
import { GigService } from '../gig.service';
import { Gig } from '../models/gig.model';

@Component({
  selector: 'app-gig-list',
  templateUrl: './gig-list.component.html',
  styleUrls: ['./gig-list.component.css']
})
export class GigListComponent implements OnInit {

  arrGigs: Gig[];

  constructor(private gigService: GigService) { }

  ngOnInit() {
    this.getGigList();
  }

  getGigList() {
    this.gigService.getAllGigs().then(response => {
      this.arrGigs = response
      console.log("Gigs list: " + JSON.stringify(this.arrGigs));
    })
  }
}
