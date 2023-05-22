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
export class CommonProvider {
    // serviceurl = "https://liquiditybars.in/backend/admin/api/";
    serviceurl = "http://liquiditybars.com/canada/backend/admin/api/";
    constructor(
        public http: HttpClient,
        private loadingCtrl: LoadingController,
        private navCtrl: NavController,
        public helper: HelperProvider,

    ) { }

    /**
     * This method is for fetching home page data
     * @returns 
     */
    async fetchHomePageData() {
        const loading = await this.loadingCtrl.create({
            message: 'Loading...'
        });
        await loading.present();

        let headers = new HttpHeaders({});
        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + 'fetchHomePageData/', {
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
     * This method is for fetching sub categories
     * @param category_id
     * @returns 
     */
    async fetchSubCategories(category_id) {

        let headers = new HttpHeaders({});
        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + 'fetchSubCategories/' + category_id, {
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
     * This method is for fetching products shop and category wise
     * @param category_id 
     * @param shop_id 
     * @returns 
     */
    async fetchOtherProductsByCategory(category_id, shop_id, userId) {
        const loading = await this.loadingCtrl.create({
            message: 'Loading...'
        });
        await loading.present();

        let headers = new HttpHeaders({});
        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + 'fetchOtherProductsByCategory/' + category_id + '/' + shop_id + '/' +userId, {
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
     * This method is to add multiple items in cart
     * @param data
     * @returns 
     */
    async addMultipleCartItems(data) {
        const loading = await this.loadingCtrl.create({
            message: 'Loading...'
        });
        await loading.present();

        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'device_id=' + data.device_id + '&cartProductIds=' + data.cartProductIds + '&cartProductsNames=' + data.cartProductsNames
            + '&cartProductPrices=' + data.cartProductPrices + '&cartQuantities=' + data.cartQuantities
            + '&cartIsLiquors=' + data.cartIsLiquors;

        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl + 'addMultipleCartItems/', body, {
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
     * This method is for clearing the cart
     * @param device_id
     * @returns 
     */
    async clearCart(device_id) {
        let headers = new HttpHeaders({});
        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + 'clearCart/' + device_id , {
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
     * This method is for fetching product compare data
     * @param data
     * @returns 
     */
    async compareProduct(data) {
        const loading = await this.loadingCtrl.create({
            message: 'Loading...'
        });
        await loading.present();

        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'product_name=' + data.product_name;

        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl + 'compareProduct/', body, {
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
     * This method is for fetching events data
     * @returns 
     */
     async fetchEvents() {
        const loading = await this.loadingCtrl.create({
            message: 'Loading...'
        });
        await loading.present();

        let headers = new HttpHeaders({});
        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + 'fetchEvents/', {
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

    async fetchProducts(sub_category_id, shop_id) {
        const loading = await this.loadingCtrl.create({
            message: 'Loading...'
        });
        await loading.present();

        let headers = new HttpHeaders({});
        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + 'fetchProducts/' + sub_category_id + '/' + shop_id, {
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

    async getSearchProducts(){
        const loading = await this.loadingCtrl.create({
            message: 'Loading...'
        });
        await loading.present();

        let headers = new HttpHeaders({});
        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + 'getSearchProducts/', {
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

    /*map*/
    async getDistanceResult(userId,lat, lng, distance){
        const loading = await this.loadingCtrl.create({
            message: 'Loading...'
        });
        await loading.present();

        let headers = new HttpHeaders({});
        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + 'filterShops?user_id='+userId+'&lat='+lat+'&lng='+lng+'&distance='+distance, {
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




    updateProfile(data) {
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'id=' + data.id + '&name=' + data.name + '&email=' + data.email+ '&gender=' + data.gender;
        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl + 'updateProfile/', body, {
                headers
            })
                .subscribe(res => {
                    // loading.dismiss();
                    resolve(res);
                }, (err) => {
                    // loading.dismiss();
                    reject(err);
                });
        });
    }

    
    /*
        call api to get search history
    */

    async getUserSearchHistory(userId){
        const loading = await this.loadingCtrl.create({
            message: 'Loading...'
        });
        await loading.present();

        let headers = new HttpHeaders({});
        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + 'getUserSearchHistory/'+userId, {
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

    /*
        call api to delete data frm history
    */

    async deleteKeyWord(keywrdId){
        const loading = await this.loadingCtrl.create({
            message: 'Loading...'
        });
        await loading.present();

        let headers = new HttpHeaders({});
        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + 'deleteSearchData/'+keywrdId, {
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

    /*
        call api to get search result
    */

   async getSearchResult(text,userId,lat,lng){
        const loading = await this.loadingCtrl.create({
            message: 'Loading...'
        });
        await loading.present();

        let headers = new HttpHeaders({});
        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + 'searchData?keyword='+text+'&user_id='+userId+'&lat='+lat+'&lng='+lng, {
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



    /*
        call api to save store in watchList
    */
    async favouriteShop(userId,storeId){
        const loading = await this.loadingCtrl.create({
            message: 'Loading...'
        });
        await loading.present();

        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'store_id=' + storeId + '&user_id=' + userId;
        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl + 'addToWatchList', body,{         
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

    /*
        call api to unsave store from watchList
    */
    async deleteFrmfavouriteShop(userId,storeId){
        const loading = await this.loadingCtrl.create({
            message: 'Loading...'
        });
        await loading.present();

        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + 'removeFromWatchList/'+storeId+'/'+userId,{         
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

    /*
        call api to get watchList for user
    */
    async getwatchList(userId){
        const loading = await this.loadingCtrl.create({
            message: 'Loading...'
        });
        await loading.present();

        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + 'viewWatchList/'+userId,{         
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


    // *********************************************************** //

     /*
        call api to save product in favourite
    */
    async favouriteProducts(userId,product_id){
        const loading = await this.loadingCtrl.create({
            message: 'Loading...'
        });
        await loading.present();

        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'product_id=' + product_id + '&user_id=' + userId;
        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl + 'addToFavourite', body,{         
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

    /*
        call api to unsave product from favourite
    */
    async deleteFrmfavouriteProducts(userId,productId){
        const loading = await this.loadingCtrl.create({
            message: 'Loading...'
        });
        await loading.present();

        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + 'removeFromFavourite/'+productId+'/'+userId,{         
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

    /*
        call api to get favouritelist for user
    */
    async getfavouriteList(userId){
        const loading = await this.loadingCtrl.create({
            message: 'Loading...'
        });
        await loading.present();

        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + 'favouriteList/'+userId,{         
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

    /*
        call api to fetching stores from watchlist of favorite items
    */
   async getwatchListForItems(product_name, userId, lat, lng){
    const loading = await this.loadingCtrl.create({
        message: 'Loading...'
    });
    await loading.present();

    let headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
    });
    return new Promise((resolve, reject) => {
        this.http.get(this.serviceurl + 'watchListPrice?'+'product_name='+product_name+
        '&user_id='+userId+'&lat='+lat+'&lng='+lng,{         
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
