import { Component, OnInit } from '@angular/core';
import { HelperProvider } from 'src/app/services/helper.service';
import { NavController, AlertController, Platform } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CommonProvider } from 'src/app/services/common.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {
  events = [];

  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private helper: HelperProvider,
    private plt: Platform,
    private _router: Router,
    private commonProvider : CommonProvider
  ) { }

  ngOnInit() {
    this.commonProvider.fetchEvents().then((res) => {
      if (res["status"] == 1) {
        this.events = res["events"];
      }
    })
  }

  gotoEventDetails(item){
    
    localStorage.setItem('eventDetails', JSON.stringify(item));
    this.navCtrl.navigateForward('/eventdetails');
  }
}
