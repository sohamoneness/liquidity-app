import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
   path: '',redirectTo: 'slide',pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'otpverification',
    loadChildren: () => import('./otpverification/otpverification.module').then( m => m.OtpverificationPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then( m => m.OrdersPageModule)
  },
  {
    path: 'ordersummary',
    loadChildren: () => import('./ordersummary/ordersummary.module').then( m => m.OrdersummaryPageModule)
  },
  {
    path: 'orderdetails',
    loadChildren: () => import('./orderdetails/orderdetails.module').then( m => m.OrderdetailsPageModule)
  },
  {
    path: 'mywallet',
    loadChildren: () => import('./mywallet/mywallet.module').then( m => m.MywalletPageModule)
  },
  {
    path: 'homenew',
    loadChildren: () => import('./homenew/homenew.module').then( m => m.HomenewPageModule)
  },
  {
    path: 'detectlocation',
    loadChildren: () => import('./detectlocation/detectlocation.module').then( m => m.DetectlocationPageModule)
  },
  {
    path: 'orderredeemed',
    loadChildren: () => import('./orderredeemed/orderredeemed.module').then( m => m.OrderredeemedPageModule)
  },
  {
    path: 'outlethome',
    loadChildren: () => import('./outlethome/outlethome.module').then( m => m.OutlethomePageModule)
  },
  {
    path: 'outlethomecompare',
    loadChildren: () => import('./outlethomecompare/outlethomecompare.module').then( m => m.OutlethomecomparePageModule)
  },
  {
    path: 'vaulthome',
    loadChildren: () => import('./vaulthome/vaulthome.module').then( m => m.VaulthomePageModule)
  },
  {
    path: 'orderdetailsredeemed',
    loadChildren: () => import('./orderdetailsredeemed/orderdetailsredeemed.module').then( m => m.OrderdetailsredeemedPageModule)
  },
  {
    path: 'vaultselected',
    loadChildren: () => import('./vaultselected/vaultselected.module').then( m => m.VaultselectedPageModule)
  },
  {
    path: 'vaultcart',
    loadChildren: () => import('./vaultcart/vaultcart.module').then( m => m.VaultcartPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'vaultcompare',
    loadChildren: () => import('./vaultcompare/vaultcompare.module').then( m => m.VaultcomparePageModule)
  },
  {
    path: 'vaultbalance',
    loadChildren: () => import('./vaultbalance/vaultbalance.module').then( m => m.VaultbalancePageModule)
  },
  {
    path: 'editprofile',
    loadChildren: () => import('./editprofile/editprofile.module').then( m => m.EditprofilePageModule)
  },
  {
    path: 'liquororderhistroy',
    loadChildren: () => import('./liquororderhistroy/liquororderhistroy.module').then( m => m.LiquororderhistroyPageModule)
  },
  {
    path: 'myprofile',
    loadChildren: () => import('./myprofile/myprofile.module').then( m => m.MyprofilePageModule)
  },
  {
    path: 'liquororderhistroy-details',
    loadChildren: () => import('./liquororderhistroy-details/liquororderhistroy-details.module').then( m => m.LiquororderhistroyDetailsPageModule)
  },
  {
    path: 'vault-redeem/:vaultOrderId',
    loadChildren: () => import('./vault-redeem/vault-redeem.module').then( m => m.VaultRedeemPageModule)
  },
  {
    path: 'vault-order-history',
    loadChildren: () => import('./vault-order-history/vault-order-history.module').then( m => m.VaultOrderHistoryPageModule)
  },
  {
    path: 'order-success',
    loadChildren: () => import('./order-success/order-success.module').then( m => m.OrderSuccessPageModule)
  },
  {
    path: 'slide',
    loadChildren: () => import('./slide/slide.module').then( m => m.SlidePageModule)
  },
  {
    path: 'food/cart',
    loadChildren: () => import('./outlethome/food-item-cart/food-item-cart.module').then( m => m.FoodItemCartPageModule)
  },
  {
    path: 'outlet-ordering-menu',
    loadChildren: () => import('./outlet-ordering-menu/outlet-ordering-menu.module').then( m => m.OutletOrderingMenuPageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'vault-order-details',
    loadChildren: () => import('./vault-order-details/vault-order-details.module').then( m => m.VaultOrderDetailsPageModule)
  },
  {
    path: 'privacy',
    loadChildren: () => import('./privacy/privacy.module').then( m => m.PrivacyPageModule)
  },
  {
    path: 'general-terms',
    loadChildren: () => import('./general-terms/general-terms.module').then( m => m.GeneralTermsPageModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./wallet/wallet.module').then( m => m.WalletPageModule)
  },
  {
    path: 'vault-order-success',
    loadChildren: () => import('./vault-order-success/vault-order-success.module').then( m => m.VaultOrderSuccessPageModule)
  },
  {
    path: 'forgot-pass',
    loadChildren: () => import('./forgot-pass/forgot-pass.module').then( m => m.ForgotPassPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'outletmenu',
    loadChildren: () => import('./outletmenu/outletmenu.module').then( m => m.OutletmenuPageModule)
  },
  {
    path: 'compare',
    loadChildren: () => import('./compare/compare.module').then( m => m.ComparePageModule)
  },
  {
    path: 'event',
    loadChildren: () => import('./event/event.module').then( m => m.EventPageModule)
  },
  {
    path: 'eventdetails',
    loadChildren: () => import('./eventdetails/eventdetails.module').then( m => m.EventdetailsPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'searchresult',
    loadChildren: () => import('./searchresult/searchresult.module').then( m => m.SearchresultPageModule)
  },
  {
    path: 'login-otp',
    loadChildren: () => import('./login-otp/login-otp.module').then( m => m.LoginOtpPageModule)
  },
  {
    path: 'filter-distance-result',
    loadChildren: () => import('./filter-distance-result/filter-distance-result.module').then( m => m.FilterDistanceResultPageModule)
  },
  {
    path: 'new-account',
    loadChildren: () => import('./new-account/new-account.module').then( m => m.NewAccountPageModule)
  },
  {
    path: 'favourite',
    loadChildren: () => import('./favourite/favourite.module').then( m => m.FavouritePageModule)
  },
  {
    path: 'watch-list-store',
    loadChildren: () => import('./watch-list-store/watch-list-store.module').then( m => m.WatchListStorePageModule)
  },
  {
    path: 'watchlist-fav',
    loadChildren: () => import('./watchlist-fav/watchlist-fav.module').then( m => m.WatchlistFavPageModule)
  },  {
    path: 'category',
    loadChildren: () => import('./category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'viewbalance',
    loadChildren: () => import('./viewbalance/viewbalance.module').then( m => m.ViewbalancePageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
