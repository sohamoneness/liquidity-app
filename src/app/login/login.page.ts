import { Platform, NavController, ModalController, MenuController } from '@ionic/angular';
import { Component, OnInit, ChangeDetectorRef, ViewChildren, QueryList } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ToastController, IonRouterOutlet, AlertController } from '@ionic/angular';
import { HelperProvider } from 'src/app/services/helper.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthProvider } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // Login
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;

  lastTimeBackPress = 0;
  timePeriodToExit = 2000;
  usermail = '';
  password = '';
  cpassword = '';
  isSubmitted = false;
  isSignUpSubmitted = false;

  isPasswordVisible = false;
  confirmPasswordType: string = "password";

  constructor(
    private authService: AuthenticationService,
    private navCtrl: NavController,
    public toastController: ToastController,
    public helper: HelperProvider,
    public router: Router,
    public platform: Platform,
    public cdr: ChangeDetectorRef,
    public modalController: ModalController,
    private location: Location,
    private alertController: AlertController,
    public menuCtrl: MenuController,
    private authProvider: AuthProvider,


  ) {

  }

  ngOnInit() {
    this.menuCtrl.close();
    this.menuCtrl.enable(false);
    localStorage.clear();
    console.log('storage clear')
  }

  /**
   * This method is for calling handling login functionality
   */
  submitLogin() {
    this.isSubmitted = true;

    //Validation checking
    if (this.usermail == '') {
      this.helper.presentAlert("Please enter your email id");
    } else if (this.password == '') {
      this.helper.presentAlert("Please enter your password");
    } else {
      let data = {
        "email": this.usermail,
        "password": this.password,
      }
      this.authProvider.userLogin(data).then((res) => {
        if (res["status"] == '1') {
          this.helper.presentToast(res["message"]);
          console.log(res["user"].id);
          localStorage.setItem("userDetails", JSON.stringify(res['user']));
          localStorage.setItem("user_id", res["user"].id);
          window.location.reload();
          this.navCtrl.navigateRoot('/homenew');
        }
        else {
          this.helper.presentAlert(res["message"]);
        }
      })
    }
  }

  
  private async onBack() {
    this.navCtrl.navigateBack('/getstarted');
  }

  /**
   * This method is for back handling
   */
  backButtonEvent() {
    this.platform.backButton.subscribeWithPriority(0, () => {
      this.routerOutlets.forEach(async (outlet: IonRouterOutlet) => {
        if (this.router.url != '/home') {
          // await this.router.navigate(['/']);
          await this.location.back();
        } else if (this.router.url === '/home') {
          if (new Date().getTime() - this.lastTimeBackPress >= this.timePeriodToExit) {
            this.lastTimeBackPress = new Date().getTime();
            this.presentAlertConfirm();
          } else {
            navigator['app'].exitApp();
          }
        }
      });
    });
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      // header: 'Confirm!',
      message: 'Are you sure you want to exit the app?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => { }
      }, {
        text: 'Close App',
        handler: () => {
          navigator['app'].exitApp();
        }
      }]
    });

    await alert.present();
  }

  /**
   * This method is for route the app to sign up
   */
  goToSignUp() {
    this.navCtrl.navigateForward('/signup');
  }

  /**
   * This method is for route the app to sign up
   */
  goToForgetPassword() {
    this.navCtrl.navigateForward('/forgot-pass');
  }


  goToMbile() {
    this.navCtrl.navigateForward('/login-otp');
  }
}
