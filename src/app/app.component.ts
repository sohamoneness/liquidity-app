import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HelperProvider } from './services/helper.service';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';
import { AlertController, NavController, IonRouterOutlet } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { Location } from '@angular/common';
import { UserDetailsService } from 'src/app/services/user-details.service';
import { interval } from 'rxjs';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public selectedIndex = 0;
  user_name: any = [];
  user_mail: any = [];
  user_mobile: any = [];
  user: any = [];
  wallet_balance: any = [];
  mySubscription: any;
  labels: any = [];
  latitude: any = '';
  longitude: any = '';

  public appPages = [
    {
      title: 'Home',
      url: '/homenew',
      icon: 'home'
    },
    {
      title: 'Liquidity Vault',
      url: '/vaulthome',
      icon: 'shield'
    },
    {
      title: 'My Profile',
      url: '/myprofile',
      icon: 'person'
    },
    {
      title: 'Order History',
      url: '/liquororderhistroy',
      icon: 'time'
    },
    {
      title: 'Test Funds',
      url: '/wallet',
      icon: 'wallet'
    },
    {
      title: 'Notification',
      url: '/notification',
      icon: 'notifications'
    },
    {
      title: 'Events',
      url: '/event',
      icon: 'calendar'
    },
    {
      title: 'WatchList',
      url: '/watch-list-store',
      icon: 'bookmark'
    },
    {
      title: 'Favourite List',
      url: '/favourite',
      icon: 'heart'
    },
    {
      title: 'Help',
      url: '/homenew',
      icon: 'help-buoy'
    },
    {
      title: 'Privacy Policy',
      url: '/privacy',
      icon: 'lock-closed'
    },
    {
      title: 'Terms of Use',
      url: '/terms',
      icon: 'document-text'
    },
    {
      title: 'General Terms & Conditions',
      url: '/general-terms',
      icon: 'newspaper'
    },
    {
      title: 'Faq',
      url: '/faq',
      icon: 'help-circle'
    },
    {
      title: 'Logout',
      url: '',
      icon: 'power'
    }
  ];

  // currentPageTitle = 'Dashboard';

  // appPages = [
  //   {
  //     title: 'Dashboard',
  //     url: '',
  //     icon: 'easel'
  //   },
  //   {
  //     title: 'Timeline',
  //     url: '/timeline',
  //     icon: 'film'
  //   },
  //   {
  //     title: 'Settings',
  //     url: '/settings',
  //     icon: 'settings'
  //   }
  // ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private auth: AuthenticationService,
    public router: Router,
    private helper: HelperProvider,
    private _location: Location,
    private userDetails: UserDetailsService,
    private geolocation: Geolocation


  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();



      if (localStorage.getItem("userDetails")) {
        this.user = JSON.parse(localStorage.getItem('userDetails'));
        console.log(this.user)
        this.user_mail = this.user.email;
        this.user_name = this.user.name;
        this.user_mobile = this.user.mobile;
        // this.wallet_balance=this.user.wallet_balance;
        // const id = JSON.parse(localStorage.getItem("userDetails")).id;
        // this.mySubscription = interval(5000).subscribe((x => {
        //   this.userDetails.fetchWalletTransactions(id).then((res) => {
        //     // console.log("call_function", res)
        //     if (res["status"] == "1") {
        //       this.wallet_balance = res["wallet_balance"];
        //       localStorage.setItem('wallet_balance', this.wallet_balance);
        //     } else {
        //       this.helper.showErrorCustom(res["message"])
        //     }

        //   }).catch((err) => {
        //     this.helper.showErrorCustom('Please try again later')

        //   })
        // }));
        /**
         * call this to get recent location of a user
         */
        // this.geolocation.getCurrentPosition().then((resp) => {
        //   this.latitude = resp.coords.latitude;
        //   this.longitude = resp.coords.longitude;
        //   let currentAddress = {
        //     lat : this.latitude,
        //     long : this.longitude
        //   }
        //   //****  current position is saved in localStorage  **** //
        //   localStorage.setItem('currentAddress',JSON.stringify(currentAddress))
        // }).catch((error) => {
        //   console.log('Error getting location', error);
        // });

        this.navCtrl.navigateRoot('/homenew');
      } else {
        console.log("i am in");
        this.router.navigate(['/slide']);
      }

    });
    this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
      console.log('Back press handler!');
      if (this._location.isCurrentPathEqualTo('/homenew')) {
        console.log('Show Exit Alert!');
        this.showExitConfirm();
        processNextHandler();
      } else {
        console.log('Navigate to back page');
        this._location.back();

      }

    });
  }


  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  ionViewDidEnter() {
    const id = JSON.parse(localStorage.getItem("userDetails")).id;
    this.mySubscription = interval(5000).subscribe((x => {
      this.userDetails.fetchWalletTransactions(id).then((res) => {
        // console.log("call_function", res)
        if (res["status"] == "1") {
          this.wallet_balance = res["wallet_balance"];
          localStorage.setItem('wallet_balance', this.wallet_balance);
        } else {
          this.helper.showErrorCustom(res["message"])
        }

      }).catch((err) => {
        this.helper.showErrorCustom('Please try again later')

      })
    }));
  }
  editProfile() {
    console.log("myprofile")
    this.navCtrl.navigateRoot('/myprofile');
    this.router.navigate(['/myprofile']);

  }
  wallet() {
    console.log("wallet")
    this.navCtrl.navigateRoot('/wallet');
    this.router.navigate(['/wallet']);

  }

  showExitConfirm() {
    this.alertCtrl.create({
      header: 'Liquidity App',
      message: 'Do you want to close the app?',
      backdropDismiss: false,
      buttons: [{
        text: 'Stay',
        role: 'cancel',
        handler: () => {
          console.log('Application exit prevented!');
        }
      }, {
        text: 'Exit',
        handler: () => {
          navigator['app'].exitApp();
        }
      }]
    })
      .then(alert => {
        alert.present();
      });
  }

  openMenu() {
    console.log('click');

    // this.list=JSON.parse(localStorage.getItem('userInfo'));
    // this.profilelist(this.list._id);
  }

}
