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
export class OrderProvider {
    // serviceurl = "http://demo91.co.in/dev/liquidity/admin/api/";
    serviceurl = "http://liquiditybars.com/canada/backend/admin/api/";
    constructor(
        public http: HttpClient,
        private loadingCtrl: LoadingController,
        private navCtrl: NavController,
        public helper: HelperProvider,

    ) { }

    /**
     * This method is for fetching order history
     * @param user_id 
     * @returns 
     */
    async fetchOrderHistroy(user_id) {
        const loading = await this.loadingCtrl.create({
            message: 'Loading...'
        });
        await loading.present();

        let headers = new HttpHeaders({});
        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + 'orderList/' + user_id, {
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
     * This method is for fetching order details
     * @param order_id
     * @returns 
     */
    async fetchOrderDetails(order_id) {
        const loading = await this.loadingCtrl.create({
            message: 'Loading...'
        });
        await loading.present();

        let headers = new HttpHeaders({});
        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + 'orderDetails/' + order_id, {
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
