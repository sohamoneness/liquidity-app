import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventdetails',
  templateUrl: './eventdetails.page.html',
  styleUrls: ['./eventdetails.page.scss'],
})
export class EventdetailsPage implements OnInit {
  eventDetails : any;
  constructor() { }

  ngOnInit() {
    this.eventDetails = JSON.parse(localStorage.getItem('eventDetails'));
  }

}
