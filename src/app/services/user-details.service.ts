import { AuthenticationService } from 'src/app/services/authentication.service';
import {
    AngularFirestore,
    AngularFirestoreCollection
} from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import * as firebase from 'firebase';
import { combineAll } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform, NavController, ModalController, MenuController, LoadingController } from '@ionic/angular';
import { HelperProvider } from 'src/app/services/helper.service';

@Injectable({
    providedIn: 'root'
})
export class UserDetailsService {
    serviceurl = "http://liquiditybars.com/canada/backend/admin/api/";
    constructor(
        private afs: AngularFirestore,
        private storage: AngularFireStorage,
        private authService: AuthenticationService,
        public http: HttpClient,
        private loadingCtrl: LoadingController,
        private navCtrl: NavController,
        public helper: HelperProvider,

    ) { }


    uploadProfileImages(image, myId) {
        const date = new Date();
        return new Promise((resolve, reject) => {
            if (image) {
                const file = image;
                const filePath = `profile_img/img-${myId}`;
                const ref = this.storage.ref(filePath);

                const task = ref
                    .putString(file, 'data_url')
                    .then(() => {
                        ref.getDownloadURL().subscribe(
                            url => {
                                console.log('url : ', url);
                                resolve({ status: true, url });
                            },
                            err => {
                                console.log(err);
                                reject({ status: false, err });
                            }
                        );
                    })
                    .catch(err => {
                        reject({ status: false, err });
                    });
            }
        });
    }

    addUserData(collection, userId, user_name, user_age, user_city, user_country, dream_job, about_me) {
        return this.afs
            .collection(`/${collection}`)
            .doc(userId)
            .update({
                name: user_name,
                age: user_age,
                user_city: user_city,
                user_country: user_country,
                dream_job: dream_job,
                about_me: about_me
            });
    }



    getLiquorShops() {
        return this.afs.collection('/liquorshops').valueChanges();
    }

    getOrderList() {
        return this.afs.collection('/orderHistory').valueChanges();
    }

    getLiquorList() {
        return this.afs.collection('/outletCategory').valueChanges();
    }
    getLiquorListWithPrice() {
        return this.afs.collection('/liquorPrice').valueChanges();
    }
    fetchShop(collection, shop_id) {
        return this.afs
            .collection(`/${collection}`, ref =>
                ref.where('id', '==', shop_id)
            )
            .valueChanges();
    }

    // getUserbyId(user_id) {
    //     return this.afs.collection('/userProfile'), ref =>
    //     ref.where('id', '==', user_id)
    // .valueChanges();
    // }

    promptsAnswer(collection, userId, promptArr) {
        return this.afs
            .collection(`/${collection}`)
            .doc(userId)
            .update({
                prompts: promptArr
            });
    }

    getUserbyId(collection, user_id) {
        console.log("user_id?????", user_id)
        return this.afs
            .collection(`/${collection}`, ref =>
                ref.where('id', '==', user_id)
            )
            .valueChanges();
    }

    getVisions() {
        return this.afs.collection('/visions').valueChanges();
    }

    uploadVisionImages(image, myId, visionId) {
        const date = new Date();
        return new Promise((resolve, reject) => {
            if (image) {
                const file = image;
                const filePath = `vision_img/img-${myId}-${visionId}`;
                const ref = this.storage.ref(filePath);

                const task = ref
                    .putString(file, 'data_url')
                    .then(() => {
                        ref.getDownloadURL().subscribe(
                            url => {
                                console.log('url : ', url);
                                resolve({ status: true, url });
                            },
                            err => {
                                console.log(err);
                                reject({ status: false, err });
                            }
                        );
                    })
                    .catch(err => {
                        reject({ status: false, err });
                    });
            }
        });
    }

    visionsAnswer(collection, userId, visionArr) {
        return this.afs
            .collection(`/${collection}`)
            .doc(userId)
            .update({
                visions: visionArr
            });
    }

    getPrograms() {
        return this.afs.collection('/programs').valueChanges();
    }
    getYourself_date() {
        return this.afs.collection('/dates').valueChanges();
    }
    UpdateUserData(collection, itemid, name, mail, mobile, dob, gender, address) {
        return this.afs
            .collection(`/${collection}`)
            .doc(itemid.toString())
            .update({
                id: itemid,
                name: name,
                mail: mail,
                mobile: mobile,
                dob: dob,
                gender: gender,
                address: address,


            });
    }
    deleteUserData(pid) {
        return this.afs
            .collection('/userProfile')
            .doc(pid.toString())
            .delete();
    }

    UpdateLiquorShopData(collection, itemid, liquorShopOwner, liquorShopName, liquorLocation, liquorName, liquorSize, liquorPrice, liquorLocationLatitude, liquorLocationLongitude, liquorShopOwnerEmail, phone, website, fb_link, twitter_link, youtube_link) {
        return this.afs
            .collection(`/${collection}`)
            .doc(itemid.toString())
            .update({
                liquorShopOwner: liquorShopOwner,
                liquorLocation: liquorLocation,
                liquorShopName: liquorShopName,
                liquorName: liquorName,
                liquorSize: liquorSize,
                liquorPrice: liquorPrice,
                liquorLocationLatitude: liquorLocationLatitude,
                liquorLocationLongitude: liquorLocationLongitude,
                liquorShopOwnerEmail: liquorShopOwnerEmail,
                phone: phone,
                website: website,
                fb_link: fb_link,
                twitter_link: twitter_link,
                youtube_link: youtube_link,

            });
    }
    deleteLiquorShop(pid) {
        return this.afs
            .collection('/liquorshops')
            .doc(pid.toString())
            .delete();
    }


    UpdateLiquorWithPrice(collection, liquorShopOwner, liquorLocation, id, liquorName, liquorCategory, SmallLiquorMinPrice, SmallLiquorMaxPrice, SmallLiquorNormalPrice, BigLiquorMinPrice, BigLiquorMaxPrice, BigLiquorNormalPrice, liquorShopId) {
        return this.afs
            .collection(`/${collection}`)
            .doc(id.toString())
            .update({
                liquorShopId: liquorShopId,
                liquorShopOwner: liquorShopOwner,
                liquorName: liquorCategory,
                liquorCategory: liquorName,
                SmallLiquorMinPrice: SmallLiquorMinPrice,
                SmallLiquorMaxPrice: SmallLiquorMaxPrice,
                SmallLiquorNormalPrice: SmallLiquorNormalPrice,
                BigLiquorMinPrice: BigLiquorMinPrice,
                BigLiquorMaxPrice: BigLiquorMaxPrice,
                BigLiquorNormalPrice: BigLiquorNormalPrice,

            });
    }
    deleteLiquorWithPrice(pid) {
        return this.afs
            .collection('/liquorPrice')
            .doc(pid.toString())
            .delete();
    }

    UpdateOrderData(collection, itemid, name, mail, price, order_date, orderid, shop_name) {
        return this.afs
            .collection(`/${collection}`)
            .doc(itemid.toString())
            .update({
                id: itemid,
                name: name,
                mail: mail,
                price: price,
                order_date: order_date,
                orderid: orderid,
                shop_name: shop_name,

            });
    }
    deleteOrder(pid) {
        return this.afs
            .collection('/orderHistory')
            .doc(pid.toString())
            .delete();
    }

    deleteEnquiryList(pid) {
        return this.afs
            .collection('/enquiryList')
            .doc(pid.toString())
            .delete();
    }

    UpdateLiquor(collection, itemid, liquorName) {
        return this.afs
            .collection(`/${collection}`)
            .doc(itemid.toString())
            .update({
                liquorName: liquorName
            });
    }

    deleteLiquor(pid) {
        return this.afs.collection('/liquorName').doc(pid.toString()).delete();
    }

    UpdateVisions(collection, itemid, visions) {
        return this.afs
            .collection(`/${collection}`)
            .doc(itemid.toString())
            .update({
                vision: visions,
            });
    }

    deleteVisions(pid) {
        return this.afs.collection('/visions').doc(pid.toString()).delete();
    }

    getAllliquorshops() {
        return this.afs.collection('/liquorshops').valueChanges();
    }

    getAllliquorCategory() {
        return this.afs.collection('/liquorCategory').valueChanges();
    }

    getLiquorData(id) {
        return this.afs.collection('/liquorPrice', ref => ref.where('liquorShopId', '==', id)).valueChanges();
    }

    getLiquorShopById(id) {
        return this.afs
            .collection('/liquorshops', ref => ref.where('id', '==', id)).valueChanges();
    }
    fetchDataByCollectionId(collection, shopid, categoryid) {
        return this.afs
            .collection(`/${collection}`, ref =>
                ref.where('liquorShopId', '==', Number(shopid)).where('liquorCategoryId', '==', categoryid)
            ).valueChanges();
    }

    fetchFoodBycategory(collection, shopid) {
        return this.afs
            .collection(`/${collection}`, ref =>
                ref.where('liquorShopId', '==', shopid)
            ).valueChanges();
    }

    fetchOrderbyOrderId(collection, orderId) {
        return this.afs
            .collection(`/${collection}`, ref =>
                ref.where('id', '==', Number(orderId))
            ).valueChanges();
    }

    getCartData(id) {
        return this.afs.collection('/cartItem', ref => ref.where('user_id', '==', id)).valueChanges();
    }
    UpdateCartData(collection, itemid, final_cart, total_value) {
        return this.afs
            .collection(`/${collection}`)
            .doc(itemid.toString())
            .update({
                cart_items: final_cart,
                totalCost: total_value
            });
    }

    getLiquorMainCategory() {
        return this.afs.collection('/liquorCategory').valueChanges();
    }

    getLiquorItemsByCatgory(categoryMainId) {
        return this.afs.collection('/liquorPrice', ref => ref.where('liquorCategoryId', '==', categoryMainId)
        ).valueChanges();
    }

    getLiquorOrderHistory(user_id) {
        return this.afs.collection('/liquorOrderHistory', ref => ref.where('user_id', '==', user_id)
        ).valueChanges();
    }

    deleteSelectedItemforUserFromCart() {
        return this.afs.collection('/cartItem').valueChanges();
    }

    addSelectedItemToCart(itemObject, quantity, userId) {
        let id = new Date().getTime();
        this.afs.doc(`/cartItem/${id}`).set({
            id: id,
            itemId: itemObject.itemId,
            userId: userId,
            liquorCategoryId: itemObject.liquorCategoryId,
            itemsCount: quantity,
            BigLiquorMaxPrice: itemObject.BigLiquorMaxPrice,
            BigLiquorMinPrice: itemObject.BigLiquorMinPrice,
            BigLiquorNormalPrice: itemObject.BigLiquorNormalPrice,
            liquorCategory: itemObject.liquorCategory,
            liquorShopId: itemObject.liquorShopId,
            liquorName: itemObject.liquorName,
        }, { merge: true });
    }

    getVaultOrderHistory(userId) {
        return this.afs.collection('/voultOrderHistory', ref => ref.where('userId', '==', userId)
        ).valueChanges();
    }

    getVaultOrderDetailsById(orderId, userId) {
        return this.afs.collection('/voultOrderHistory', ref => ref.where('id', '==', orderId).where('userId', '==', userId)
        ).valueChanges();
    }

    updateVaultLiquorBalance(orderDetails, totalRedeemed, cartPrice, bookingData) {
        return this.afs.collection('/voultOrderHistory').doc(orderDetails.id.toString()).update({
            redeemed: totalRedeemed,
        });
    }

    updateLiquorPriceAfterPurchase(itemId, newPrice) {
        // the Details is the Parameter which is hold all the Information of Liquor price and The New price is Holding the new Price increase or Decrease
        // here the BigLiquorActualPrice is the base column or for Price Calculation
        return this.afs.collection('/liquorPrice').doc(itemId.toString()).update({
            BigLiquorActualPrice: newPrice,
        });
    }

    getLiquorDataExceptTheseIds(Ids) {
        return this.afs.collection('/liquorPrice').valueChanges();
    }

    getFoodCategory(shopId) {
        return this.afs.collection('/foodCategory', ref => ref.where('shopId', '==', shopId)).valueChanges();
    }

    getFoodItemByCategory(categoryId) {
        return this.afs.collection('/foodItem', ref => ref.where('foodCategoryId', '==', categoryId.toString())
        ).valueChanges();
    }

    addFoodOrderDetails(orderData, userData, logeedInUserId) {
        let id = new Date().getTime();
        this.afs.doc(`/foodOrder/${id}`).set({
            id: id,
            userId: logeedInUserId,
            foodCategoryId: orderData.categoryId,
            foodCategoryName: orderData.categoryName,
            foodItemId: orderData.foodItemId,
            foodItemName: orderData.itemName,
            foodItemType: orderData.itemType,
            price: orderData.price,
            shopId: orderData.shopId,
            quantity: orderData.quantity,
            bookingFor: userData.bookingfor,
            date: userData.date,
            time: userData.time,
            email: userData.email,
            mobile: userData.mobile,
            created_at: '',
        }, { merge: true });
        return id;
    }

    async pay_email(data) {
        const loading = await this.loadingCtrl.create({
            message: 'Loading...'
        });
        await loading.present();
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'customer_name=' + data.customer_name + '&customer_email=' + data.customer_email
            + '&customer_mobile=' + data.customer_mobile + '&store_name=' + data.store_name
            + '&store_email=' + data.store_email + '&order_id=' + data.order_id
            + '&order_amount=' + data.order_amount + '&order_date=' + data.order_date;
        return new Promise((resolve, reject) => {
            this.http.post("http://demo90.co.in/dev/liquidity/mail.php?action=order_email", body, {
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

    register_email(data) {

        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'email=' + data.email + '&name=' + data.name;
        return new Promise((resolve, reject) => {
            this.http.post("http://demo90.co.in/dev/liquidity/mail.php?action=register_mail", body, {
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
    /* ---------------------------------------------- Api Hiting --------------------------------------------*/
    /*----------------------------------------Date:15/02/2021 -----------------------------------------------*/

    /**
        * This method is to get city list
        */
    fetchCities() {

        let headers = new HttpHeaders({});
        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + 'fetchCities', {
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
        * This method is to get Category list
        */
    fetchCategories() {

        let headers = new HttpHeaders({});
        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + 'fetchCategories', {
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
        * This method is to get Shop list
        */
    fetchShops(city_id) {

        let headers = new HttpHeaders({});
        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + 'fetchShops/' + city_id, {
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
        * This method is to get SubCategory list
        */
    fetchSubCategories(category_id) {

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
        * This method is to get SubCategory list
        */
    fetchProducts(sub_category_id, shop_id) {

        let headers = new HttpHeaders({});
        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + 'fetchProducts/' + sub_category_id + '/' + shop_id, {
                headers
            })
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    addToCart(data) {
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'device_id=' + data.device_id + '&product_id=' + data.product_id + '&product_name=' + data.product_name
            + '&price=' + data.price + '&quantity=' + data.quantity + '&is_liquor=' + data.is_liquor;
        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl + 'addToCart/', body, {
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


    getCartDetails(data) {
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'device_id=' + data.device_id;
        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl + 'getCartDetails/', body, {
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

    userRegistration(data) {
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
                    // loading.dismiss();
                    resolve(res);
                }, (err) => {
                    // loading.dismiss();
                    reject(err);
                });
        });
    }

    verifyUser(data) {
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
                    // loading.dismiss();
                    resolve(res);
                }, (err) => {
                    // loading.dismiss();
                    reject(err);
                });
        });
    }

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


    createOrder(data) {
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'name=' + data.customer_name + '&email=' + data.customer_email
            + '&mobile=' + data.customer_mobile + '&user_id=' + data.user_id + '&payment_type=' + data.payment_type
            + '&transaction_id=' + data.transaction_id + '&order_time=' + data.order_time
            + '&device_id=' + data.device_id + '&order_date=' + data.order_date + '&shop_id=' + data.shop_id;
        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl + 'createOrder/', body, {
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

    /**
    * This method is to get SubCategory list
    */
    fetchOrderHistroy(user_id) {

        let headers = new HttpHeaders({});
        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + 'orderList/' + user_id, {
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
        * This method is to get SubCategory list
        */
    fetchOrderHistroydetails(order_id) {

        let headers = new HttpHeaders({});
        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + 'orderDetails/' + order_id, {
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
        * This method is to get SubCategory list
        */
    fetchOtherProductsByCategory(category_id, shop_id) {

        let headers = new HttpHeaders({});
        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + 'fetchOtherProductsByCategory/' + category_id + '/' + shop_id, {
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
        * This method is to get SubCategory list
        */
    deleteFromCart(cart_item_id) {

        let headers = new HttpHeaders({});
        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + 'deleteFromCart/' + cart_item_id, {
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
        * This method is to get SubCategory list
        */
    deleteFromVaultCart(cart_item_id) {

        let headers = new HttpHeaders({});
        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + 'deleteFromVaultCart/' + cart_item_id, {
                headers
            })
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    updateProfile(data) {
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'id=' + data.id + '&name=' + data.name + '&mobile=' + data.mobile + '&gender=' + data.gender + '&dob=' + data.dob;
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


    /**********************************Vault Work******************************************************/

    /**
    * This method is to get SubCategory list
    */
    fetchVaultCategories() {
        let headers = new HttpHeaders({});
        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + 'fetchVaultCategories/', {
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
    * This method is to get SubCategory list
    */
    fetchVaultProducts(sub_category_id) {
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

    addToVaultCart(data) {
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
                    // loading.dismiss();
                    resolve(res);
                }, (err) => {
                    // loading.dismiss();
                    reject(err);
                });
        });
    }

    getVaultCartDetails(data) {
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
                    // loading.dismiss();
                    resolve(res);
                }, (err) => {
                    // loading.dismiss();
                    reject(err);
                });
        });
    }

    createVaultOrder(data) {
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
                    // loading.dismiss();
                    resolve(res);
                }, (err) => {
                    // loading.dismiss();
                    reject(err);
                });
        });
    }

    /**
    * This method is to get SubCategory list
    */
    getVaultOrderList(user_id) {

        let headers = new HttpHeaders({});
        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + 'fetchUserVaultItems/' + user_id, {
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
    * This method is to get SubCategory list
    */
    fetchVaultShops(outletCategory) {

        let headers = new HttpHeaders({});
        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + 'fetchVaultShops/' + outletCategory, {
                headers
            })
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    redeemItemFromVault(data) {
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
                    // loading.dismiss();
                    resolve(res);
                }, (err) => {
                    // loading.dismiss();
                    reject(err);
                });
        });
    }

    /**
        * This method is to get SubCategory list
        */
    fetchVaultOrderHistroydetails(order_id) {

        let headers = new HttpHeaders({});
        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + 'fetchVaultOrderDetails/' + order_id, {
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
* This method is to get SubCategory list
*/
    getVaultOrderListt(user_id) {

        let headers = new HttpHeaders({});
        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + 'getVaultOrderList/' + user_id, {
                headers
            })
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    cancelOrder(data) {
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'id=' + data.id;
        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl + 'cancelOrder/', body, {
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

    cancelVaultOrder(data) {
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'id=' + data.id;
        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl + 'cancelVaultOrder/', body, {
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
    /**
* This method is to get SubCategory list
*/
    fetchWalletTransactions(user_id) {

        let headers = new HttpHeaders({});
        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + 'fetch_wallet_balance/' + user_id, {
                headers
            })
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    addWalletBalance(data) {
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
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    async forgotPass(data) {
        const loading = await this.loadingCtrl.create({
            message: 'Loading...'
        });
        await loading.present();
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'email=' + data.email;
        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl + 'forgetPassword', body, {
                headers
            })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                    this.helper.showErrorCustom('Please Check your Mail to reset your password')

                }, (err) => {
                    loading.dismiss();
                    reject(err);
                    this.navCtrl.navigateRoot('/login');
                    this.helper.showErrorCustom('Please Check your Mail to reset your password')


                });
        });
    }

}
