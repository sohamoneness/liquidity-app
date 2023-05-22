import {
    AngularFirestore,
    AngularFirestoreCollection
} from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { combineAll } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform, NavController, MenuController, LoadingController } from '@ionic/angular';
import { HelperProvider } from 'src/app/services/helper.service';

@Injectable({
    providedIn: 'root'
})
export class AuthProvider {
    // serviceurl = "https://liquiditybars.in/backend/admin/api/";
    serviceurl = "http://liquiditybars.com/canada/backend/admin/api/";
    constructor(
        public http: HttpClient,
        private loadingCtrl: LoadingController,
        private navCtrl: NavController,
        public helper: HelperProvider,

    ) { }

    /**
     * This method is for user login
     * @param data 
     * @returns 
     */
    async userLogin(data) {
        const loading = await this.loadingCtrl.create({
            message: 'Loading...'
        });
        await loading.present();

        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'email=' + data.email + '&password=' + data.password;
        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl + 'userLogin/', body, {
                headers
            })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    /**
     * This method is for user registration
     * @param data
     * @returns 
     */
    async userRegistration(data) {
        const loading = await this.loadingCtrl.create({
            message: 'Loading...'
        });
        await loading.present();

        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'name=' + data.name + '&email=' + data.email + '&mobile=' + data.mobile
            + '&password=' + data.password;
        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl + 'userRegistration/', body, {
                headers
            })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    /**
     * This method is for user verification
     * @param data
     * @returns 
     */
    async verifyUser(data) {
        const loading = await this.loadingCtrl.create({
            message: 'Loading...'
        });
        await loading.present();

        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'id=' + data.id + '&otp=' + data.otp;
        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl + 'verifyUser/', body, {
                headers
            })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

     /**
     * This method is for user login via mobile otp
     * @param data 
     * @returns 
     */
    async userLoginviaMobile(data) {
        console.log('data',data);
        
        const loading = await this.loadingCtrl.create({
            message: 'Loading...'
        });
        await loading.present();

        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'mobile=' + data;
        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl + 'loginWithOtp/', body, {
                headers
            })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    /**
     * This method is for otp verification for mobile login
     * @param data
     * @returns 
    */
    async verifyMobileUser(data) {
        const loading = await this.loadingCtrl.create({
            message: 'Loading...'
        });
        await loading.present();

        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'mobile=' + data.mobile + '&otp=' + data.otp;
        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl + 'otpVerification/', body, {
                headers
            })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    

}
