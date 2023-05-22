import { Component, OnInit } from '@angular/core';
import { HelperProvider } from 'src/app/services/helper.service';
import { NavController, AlertController, Platform } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AccountProvider } from 'src/app/services/account.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  notifications = [];
  
  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private helper: HelperProvider,
    private plt: Platform,
    private _router: Router,
    private accountProvider : AccountProvider
  ) { }

  ngOnInit() {
    this.accountProvider.fetchNotificationList(localStorage.getItem("user_id")).then((res) => {
      if (res["status"] == 1) {
        this.notifications = res["notifications"];
      }
    })
  }

}
