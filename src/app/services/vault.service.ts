import { combineAll } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform, NavController, MenuController, LoadingController } from '@ionic/angular';
import { HelperProvider } from 'src/app/services/helper.service';

@Injectable({
    providedIn: 'root'
})
export class VaultProvider {
    serviceurl = "http://liquiditybars.com/canada/backend/admin/api/";
    constructor(
        public http: HttpClient,
        private loadingCtrl: LoadingController,
        private navCtrl: NavController,
        public helper: HelperProvider,

    ) { }

    /**
     * This method is for getting vault order history
     * @param user_id
     * @returns 
     */
    async getVaultOrderList(user_id) {
        const loading = await this.loadingCtrl.create({
            message: 'Loading...'
        });
        await loading.present();

        let headers = new HttpHeaders({});
        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + 'fetchUserVaultItems/' + user_id, {
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
     * This method is for hitting vault booking api
     * @param data
     * @returns 
     */
    async redeemItemFromVault(data) {
        const loading = await this.loadingCtrl.create({
            message: 'Loading...'
        });
        await loading.present();

        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });

        let body = 'order_id=' + data.order_id + '&quantiy=' + data.quantiy
            + '&shop_id=' + data.shop_id + '&user_id=' + data.user_id
            + '&redeem_date=' + data.redeem_date
            + '&redeem_time=' + data.redeem_time;

        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl + 'redeemItemFromVault/', body, {
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

    // getLiquorShops() {
    //     return this.afs.collection('/liquorshops').valueChanges();
    // }

    /**
     * This method is for adding item to vault cart
     * @param data 
     * @returns 
     */
    async addToVaultCart(data) {
        const loading = await this.loadingCtrl.create({
            message: 'Loading...'
        });
        await loading.present();

        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'device_id=' + data.device_id + '&product_id=' + data.product_id + '&product_name=' + data.product_name
            + '&price=' + data.price + '&quantity=' + data.quantity + '&vault_category_id=' + data.vault_category_id;
        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl + 'addToVaultCart/', body, {
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
     * This method is for getting vault cart details
     * @param data 
     * @returns 
     */
    async getVaultCartDetails(data) {
        const loading = await this.loadingCtrl.create({
            message: 'Loading...'
        });
        await loading.present();

        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'device_id=' + data.device_id;
        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl + 'fetchVaultCartItems/', body, {
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
     * This method is for creating vault order
     * @param data 
     * @returns 
     */
    async createVaultOrder(data) {
        const loading = await this.loadingCtrl.create({
            message: 'Loading...'
        });
        await loading.present();

        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'name=' + data.customer_name + '&email=' + data.customer_email
            + '&mobile=' + data.customer_mobile + '&user_id=' + data.user_id + '&payment_type=' + data.payment_type
            + '&transaction_id=' + data.transaction_id
            + '&device_id=' + data.device_id;
        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl + 'createVaultOrder/', body, {
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
     * This method is for fetching vault products
     * @param sub_category_id 
     * @returns 
     */
    async fetchVaultProducts(sub_category_id) {
        let headers = new HttpHeaders({});
        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + 'fetchVaultProducts/' + sub_category_id, {
                headers
            })
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    /**
     * This method is for fetching vault outlets according to category
     * @param outletCategory 
     * @returns 
     */
    async fetchVaultShops(outletCategory) {
        const loading = await this.loadingCtrl.create({
            message: 'Loading...'
        });
        await loading.present();

        let headers = new HttpHeaders({});
        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + 'fetchVaultShops/' + outletCategory, {
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
     * This method is for deleting item from vault cart
     * @param cart_item_id 
     * @returns 
     */
    async deleteFromVaultCart(cart_item_id) {
        const loading = await this.loadingCtrl.create({
            message: 'Loading...'
        });
        await loading.present();

        let headers = new HttpHeaders({});
        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + 'deleteFromVaultCart/' + cart_item_id, {
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
