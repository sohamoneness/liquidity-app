import { combineAll } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform, NavController, MenuController, LoadingController } from '@ionic/angular';
import { HelperProvider } from 'src/app/services/helper.service';

@Injectable({
    providedIn: 'root'
})
export class AccountProvider {
    // serviceurl = "http://liquiditybars.com/canada/backend/admin/api";
    serviceurl = "http://liquiditybars.com/canada/backend/admin/api/";
    constructor(
        public http: HttpClient,
        private loadingCtrl: LoadingController,
        private navCtrl: NavController,
        public helper: HelperProvider,

    ) { }

    /**
     * This method is for fetching notification list
     * @param user_id 
     * @returns 
     */
    async fetchNotificationList(user_id) {
        const loading = await this.loadingCtrl.create({
            message: 'Loading...'
        });
        await loading.present();

        let headers = new HttpHeaders({});
        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + 'notificationList/' + user_id, {
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
     * This method is for fetching walllet transaction list
     * @param user_id 
     * @returns 
     */
     async fetchWalletTransactions(user_id) {
        const loading = await this.loadingCtrl.create({
            message: 'Loading...'
        });
        await loading.present();

        let headers = new HttpHeaders({});
        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + 'fetch_wallet_balance/' + user_id, {
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
     * This method is for adding wallet balance
     * @param data
     * @returns 
     */
    async addWalletBalance(data) {
        const loading = await this.loadingCtrl.create({
            message: 'Loading...'
        });
        await loading.present();

        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });

        let body = 'amount=' + data.amount + '&user_id=' + data.user_id;

        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl + "add_wallet_balance", body, {
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
