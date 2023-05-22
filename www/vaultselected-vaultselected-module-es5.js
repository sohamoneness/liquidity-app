(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vaultselected-vaultselected-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/vaultselected/vaultselected.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vaultselected/vaultselected.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppVaultselectedVaultselectedPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"chevron-back-outline\" text=\"\" defaultHref=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Liquidity</ion-title>\n    <ion-buttons slot=\"end\">\n\t\t<ion-button (click)=\"search()\">\n      <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <g clip-path=\"url(#clip0_21_31)\">\n        <path d=\"M10.5691 0C4.74145 0 0 4.74145 0 10.5691C0 16.3971 4.74145 21.1382 10.5691 21.1382C16.3971 21.1382 21.1382 16.3971 21.1382 10.5691C21.1382 4.74145 16.3971 0 10.5691 0ZM10.5691 19.187C5.81723 19.187 1.95122 15.321 1.95122 10.5691C1.95122 5.81728 5.81723 1.95122 10.5691 1.95122C15.321 1.95122 19.187 5.81723 19.187 10.5691C19.187 15.321 15.321 19.187 10.5691 19.187Z\" fill=\"#28303F\"/>\n        <path d=\"M23.7142 22.3347L18.1207 16.7412C17.7395 16.36 17.1223 16.36 16.7411 16.7412C16.36 17.122 16.36 17.7399 16.7411 18.1207L22.3346 23.7142C22.4251 23.805 22.5326 23.8769 22.651 23.926C22.7694 23.975 22.8963 24.0002 23.0244 24.0001C23.1525 24.0002 23.2794 23.975 23.3978 23.9259C23.5162 23.8769 23.6237 23.8049 23.7142 23.7142C24.0953 23.3334 24.0953 22.7155 23.7142 22.3347Z\" fill=\"#28303F\"/>\n        </g>\n        <defs>\n        <clipPath id=\"clip0_21_31\">\n        <rect width=\"24\" height=\"24\" fill=\"white\"/>\n        </clipPath>\n        </defs>\n      </svg>\n\n    </ion-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div class=\"banner_wraper\">\n    <!-- <img src=\"assets/banner-home.png\"> -->\n    <ion-slides class=\"collection_banner\" pager=\"true\" [options]=\"slideOpts\">\n      <ion-slide>\n        <img src=\"assets/banner-home1.png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"assets/banner-home2.png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"assets/banner-home3.png\">\n      </ion-slide>\n    </ion-slides>\n  </div>\n  <div class=\"segment_2\">\n    <!-- <div>\n        <ion-segment class=\"ion-no-padding\" >\n          <ion-segment-button *ngFor=\"let categoryMain of liquorCategory;\">\n            <ion-button shape=\"round\" (click)=\"getCategoryItem(categoryMain.id)\">{{categoryMain.name}}</ion-button>\n          </ion-segment-button>\n        </ion-segment>\n    </div> -->\n    <ion-slides [options]=\"slideOpts1\" class=\"sec1\">\n      <ion-slide *ngFor=\"let categoryMain of liquorCategory;\">\n        <ion-button shape=\"round\" (click)=\"getCategoryItem(categoryMain.id)\">{{categoryMain.name}}</ion-button>\n      </ion-slide>\n    </ion-slides>\n    <div class=\"note\">\n      <p><span>*</span>You can order only 1 transaction</p>\n    </div>\n    <div>\n      <ion-list class=\"liquor_items\">\n        <ion-item *ngFor=\"let categoryItem of categoryItems;\">\n          <ion-thumbnail slot=\"start\">\n            <img src=\"{{categoryItem.image}}\">\n          </ion-thumbnail>\n          <div class=\"drink_content\">\n            <h3>{{categoryItem.name}}</h3>\n            <div class=\"select_area\">\n              <div class=\"select_box\">\n                <label>Select Unit</label>\n                <ul>\n                  <!-- <li>\n                    <input type=\"radio\" value=\"0\" id=\"name0{{categoryItem.id}}\" name=\"name{{categoryItem.id}}\" (click)=\"radioButtonSelect(categoryItem,0)\" />\n                    <label for=\"name0{{categoryItem.id}}\">0<span>units</span></label>\n                  </li> -->\n                  <li>\n                    <input type=\"radio\" value=\"25\" id=\"name25{{categoryItem.id}}\" name=\"name{{categoryItem.id}}\" (click)=\"radioButtonSelect(categoryItem,25)\" />\n                    <label for=\"name25{{categoryItem.id}}\">25 <span>units</span></label>\n                  </li>\n                  <li>\n                    <input type=\"radio\" value=\"50\" id=\"name50{{categoryItem.id}}\" name=\"name{{categoryItem.id}}\" (click)=\"radioButtonSelect(categoryItem,50)\" />\n                    <label for=\"name50{{categoryItem.id}}\">50 <span>units</span></label>\n                  </li>\n                </ul>\n              </div>\n  \n              <div class=\"select_box outlet\">\n                <select placeholder=\"Select Category\" (change)=\"selectVaultCategory($event,categoryItem.vault_product_prices,categoryItem)\">\n                  <option value=\"\">Add to Reserve</option>\n                  <option *ngFor=\"let item of categoryItem.vault_product_prices\"  value=\"{{item.vault_category_id}}\">{{item.vault_category_name}}</option>\n                </select>\n              </div>\n            </div>\n            \n            <!-- <div class=\"unit_category\">\n              <ion-col size=\"5\">\n                \n              </ion-col>\n              <ion-col size=\"7\">\n                <ion-item>\n                  <select placeholder=\"Select Category\" (change)=\"selectVaultCategory($event,categoryItem.vault_product_prices,categoryItem)\">\n                    <option value=\"\">Select Outlet</option>\n                    <option *ngFor=\"let item of categoryItem.vault_product_prices\"  value=\"{{item.vault_category_id}}\">{{item.vault_category_name}}</option>\n                  </select>\n                  <ion-button small slot=\"end\" (click)=\"addToCarts(categoryItem)\">\n                    <ion-icon name=\"cart\"></ion-icon>\n                  </ion-button>\n                </ion-item>\n              </ion-col>\n            </div> -->\n            <!-- <div class=\"unit_category\">\n              <ion-col size=\"9\">\n                 <ul>\n                  <li>\n                    <input type=\"radio\" value=\"0\" id=\"name0{{categoryItem.id}}\" name=\"name{{categoryItem.id}}\" (click)=\"radioButtonSelect(categoryItem,0)\" />\n                    <label for=\"name0{{categoryItem.id}}\">0<span>units</span></label>\n                  </li>\n                  <li>\n                    <input type=\"radio\" value=\"25\" id=\"name25{{categoryItem.id}}\" name=\"name{{categoryItem.id}}\" (click)=\"radioButtonSelect(categoryItem,25)\" />\n                    <label for=\"name25{{categoryItem.id}}\">25 <span>units</span></label>\n                  </li>\n                  <li>\n                    <input type=\"radio\" value=\"50\" id=\"name50{{categoryItem.id}}\" name=\"name{{categoryItem.id}}\" (click)=\"radioButtonSelect(categoryItem,50)\" />\n                    <label for=\"name50{{categoryItem.id}}\">50 <span>units</span></label>\n                  </li>\n                </ul>\n                <ul class=\"p-price\">   \n                  <li *ngFor=\"let item of categoryItem.vault_product_prices\">\n                    <input type=\"radio\" value=\"{{item.id}}\" id=\"name01{{item.id}}\" name=\"name1{{categoryItem.id}}\" (click)=\"select(item);\" />\n                    <label for=\"name01{{item.id}}\">{{item.vault_category_name}}</label>\n                  </li> \n                </ul> \n              </ion-col>\n              <ion-col size=\"3\" class=\"ion-no-padding cardAdd\" (click)=\"addToCarts(categoryItem)\">\n                <img src=\"assets/cart.png\" style=\"padding-top: 5px;\">\n                <ion-button small> Buy Now</ion-button> \n              </ion-col>\n            </div> -->\n          </div>\n        </ion-item>\n    </ion-list>\n    <div class=\"note\">\n      <p><span>*</span>30ounce per unit</p>\n    </div>\n  </div>\n</div>\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n  <div class=\"footer_content\">\n    <div class=\"footer_item_start\">\n      <svg width=\"512\" height=\"512\" viewBox=\"0 0 512 512\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <g clip-path=\"url(#clip0_402_2)\">\n        <path d=\"M253.484 166.788L241.207 47.88H151.192L138.915 166.788C138.275 172.985 136.155 178.937 132.733 184.142C129.31 189.347 124.687 193.653 119.251 196.697L92.8442 211.485C61.3542 229.12 44.1312 264.46 49.6442 300.128L76.9942 477.074C80.1002 497.168 97.3952 511.996 117.728 511.996H274.671C295.004 511.996 312.299 497.169 315.405 477.074L342.755 300.128C348.268 264.46 331.045 229.12 299.555 211.485L273.148 196.697C267.713 193.653 263.089 189.347 259.667 184.142C256.245 178.936 254.124 172.985 253.484 166.788Z\" fill=\"url(#paint0_linear_402_2)\"/>\n        <path d=\"M250.962 142.32H141.438L151.194 47.88H241.206L250.962 142.32Z\" fill=\"url(#paint1_linear_402_2)\"/>\n        <path d=\"M250.962 142.32H141.438L151.194 47.88H241.206L250.962 142.32Z\" fill=\"url(#paint2_linear_402_2)\"/>\n        <path d=\"M342.753 300.125L315.405 477.073C312.301 497.172 295.002 512 274.666 512H117.733C97.3975 512 80.0995 497.172 76.9955 477.072L49.6475 300.125C44.1305 264.459 61.3535 229.124 92.8455 211.486L119.247 196.695C124.683 193.653 129.308 189.349 132.73 184.144C136.152 178.94 138.273 172.988 138.911 166.792L141.438 142.321H250.962L253.489 166.792C254.128 172.988 256.248 178.94 259.671 184.144C263.093 189.349 267.718 193.653 273.153 196.695L299.555 211.486C331.047 229.124 348.269 264.459 342.753 300.125Z\" fill=\"url(#paint3_linear_402_2)\"/>\n        <path d=\"M66.3369 408.109L76.9959 477.072C80.0999 497.172 97.3979 512 117.734 512H274.667C295.003 512 312.301 497.172 315.405 477.072L326.064 408.109H66.3369Z\" fill=\"url(#paint4_linear_402_2)\"/>\n        <path d=\"M66.3369 408.109L76.9959 477.072C80.0999 497.172 97.3979 512 117.734 512H274.667C295.003 512 312.301 497.172 315.405 477.072L326.064 408.109H66.3369Z\" fill=\"url(#paint5_linear_402_2)\"/>\n        <path d=\"M299.555 211.485L273.153 196.694C267.717 193.652 263.092 189.348 259.67 184.143C256.248 178.939 254.127 172.987 253.489 166.791L250.962 142.32H160.643V512H274.666C295.002 512 312.3 497.172 315.404 477.072L342.752 300.124C348.27 264.459 331.048 229.124 299.555 211.485Z\" fill=\"url(#paint6_linear_402_2)\"/>\n        <path d=\"M248.277 77.5109L243.825 34.3879H148.576L144.124 77.5109C143.376 84.7539 149.059 91.0529 156.34 91.0529H236.062C243.343 91.0539 249.025 84.7539 248.277 77.5109Z\" fill=\"url(#paint7_linear_402_2)\"/>\n        <path d=\"M248.277 77.5109L243.825 34.3879H148.576L144.124 77.5109C143.376 84.7539 149.059 91.0529 156.34 91.0529H236.062C243.343 91.0539 249.025 84.7539 248.277 77.5109Z\" fill=\"url(#paint8_linear_402_2)\"/>\n        <path d=\"M248.277 77.5109L243.825 34.3879H148.576L144.124 77.5109C143.376 84.7539 149.059 91.0529 156.34 91.0529H236.062C243.343 91.0539 249.025 84.7539 248.277 77.5109Z\" fill=\"url(#paint9_linear_402_2)\"/>\n        <path d=\"M243.825 34.3879H192.35V91.0529H236.062C243.343 91.0529 249.026 84.7539 248.278 77.5109L243.825 34.3879Z\" fill=\"url(#paint10_linear_402_2)\"/>\n        <path d=\"M237.88 45.414L154.534 45.437C143.681 45.442 135.588 35.435 137.862 24.823L140.427 12.852C141.205 9.22145 143.204 5.96736 146.091 3.63254C148.978 1.29772 152.578 0.0233451 156.291 0.0220013L236.083 1.30902e-06C239.796 -0.00148917 243.397 1.26987 246.286 3.60208C249.175 5.93429 251.177 9.18637 251.958 12.816L254.534 24.785C256.818 35.395 248.733 45.409 237.88 45.414Z\" fill=\"url(#paint11_linear_402_2)\"/>\n        <path d=\"M237.88 45.414L154.534 45.437C143.681 45.442 135.588 35.435 137.862 24.823L140.427 12.852C141.205 9.22145 143.204 5.96736 146.091 3.63254C148.978 1.29772 152.578 0.0233451 156.291 0.0220013L236.083 1.30902e-06C239.796 -0.00148917 243.397 1.26987 246.286 3.60208C249.175 5.93429 251.177 9.18637 251.958 12.816L254.534 24.785C256.818 35.395 248.733 45.409 237.88 45.414Z\" fill=\"url(#paint12_linear_402_2)\"/>\n        <path d=\"M335.385 310.898H248.623L208.098 270.373C201.527 263.802 190.873 263.802 184.302 270.373L143.777 310.898H57.0156C50.6756 310.898 45.8416 316.574 46.8516 322.833L59.9276 403.867C60.3175 406.282 61.5544 408.479 63.4168 410.065C65.2793 411.651 67.6455 412.522 70.0916 412.522H143.778L184.303 453.047C190.874 459.618 201.528 459.618 208.099 453.047L248.624 412.522H322.31C327.363 412.522 331.669 408.855 332.474 403.867L345.55 322.833C346.559 316.574 341.725 310.898 335.385 310.898Z\" fill=\"url(#paint13_linear_402_2)\"/>\n        <path d=\"M335.384 310.898H248.622L208.097 270.373C203.577 265.853 197.124 264.442 191.398 266.141V457.278C197.124 458.977 203.576 457.567 208.097 453.046L248.622 412.521H322.308C327.361 412.521 331.667 408.854 332.472 403.866L345.548 322.832C346.558 316.574 341.724 310.898 335.384 310.898Z\" fill=\"url(#paint14_linear_402_2)\"/>\n        <path d=\"M185.784 441.676L116.235 372.127C110.482 366.374 110.482 357.047 116.235 351.294L185.784 281.745C191.537 275.992 200.864 275.992 206.617 281.745L276.166 351.294C281.919 357.047 281.919 366.374 276.166 372.127L206.617 441.676C200.864 447.429 191.537 447.429 185.784 441.676Z\" fill=\"url(#paint15_linear_402_2)\"/>\n        <path d=\"M234.012 368.8L158.318 368.659C151.296 368.646 145.614 362.943 145.628 355.921L145.652 342.911C145.665 335.889 151.368 330.207 158.39 330.221L234.084 330.362C241.106 330.375 246.788 336.078 246.774 343.1L246.75 356.11C246.737 363.132 241.034 368.813 234.012 368.8Z\" fill=\"url(#paint16_linear_402_2)\"/>\n        <path d=\"M171.527 380.391L153.356 380.357C151.674 380.354 150.059 381.019 148.867 382.206C147.675 383.394 147.004 385.006 147.001 386.688C146.998 388.37 147.663 389.985 148.85 391.177C150.038 392.369 151.65 393.04 153.332 393.043L171.503 393.077C173.185 393.08 174.8 392.415 175.992 391.228C177.183 390.04 177.855 388.428 177.858 386.746C177.861 385.064 177.196 383.449 176.009 382.257C174.821 381.066 173.209 380.394 171.527 380.391Z\" fill=\"url(#paint17_linear_402_2)\"/>\n        <path d=\"M236.934 380.513L190.899 380.427C189.217 380.424 187.602 381.089 186.41 382.276C185.218 383.464 184.547 385.076 184.544 386.758C184.541 388.44 185.206 390.055 186.393 391.247C187.581 392.439 189.193 393.11 190.875 393.113L236.91 393.199C237.743 393.201 238.568 393.038 239.338 392.721C240.108 392.403 240.809 391.938 241.399 391.35C241.989 390.762 242.457 390.063 242.778 389.294C243.098 388.525 243.263 387.701 243.265 386.868C243.267 386.035 243.104 385.21 242.787 384.44C242.469 383.67 242.004 382.969 241.416 382.379C240.828 381.789 240.129 381.321 239.36 381C238.591 380.68 237.767 380.515 236.934 380.513Z\" fill=\"url(#paint18_linear_402_2)\"/>\n        <path d=\"M234.012 368.8L158.318 368.659C151.296 368.646 145.614 362.943 145.628 355.921L145.652 342.911C145.665 335.889 151.368 330.207 158.39 330.221L234.084 330.362C241.106 330.375 246.788 336.078 246.774 343.1L246.75 356.11C246.737 363.132 241.034 368.813 234.012 368.8Z\" fill=\"url(#paint19_linear_402_2)\"/>\n        <path d=\"M234.084 330.362L194.759 330.289L194.687 368.727L234.012 368.8C241.034 368.813 246.737 363.131 246.75 356.11L246.774 343.1C246.787 336.078 241.105 330.375 234.084 330.362Z\" fill=\"url(#paint20_linear_402_2)\"/>\n        <path d=\"M454.243 362.908C461.009 362.908 466.183 368.941 465.15 375.628L447.97 486.801C445.732 501.308 433.253 512 418.586 512H305.372C290.705 512 278.227 501.308 275.988 486.801L258.81 375.628C257.777 368.941 262.949 362.908 269.716 362.908H454.243Z\" fill=\"url(#paint21_linear_402_2)\"/>\n        <path d=\"M322.736 512H305.378C301.432 512 297.658 511.227 294.184 509.812L291.598 490.749C290.401 481.926 297.261 474.073 306.165 474.073C313.837 474.073 320.219 479.973 320.82 487.621L322.736 512Z\" fill=\"url(#paint22_linear_402_2)\"/>\n        <path d=\"M358.324 512H330.053L328.625 489.711C328.082 481.24 334.807 474.071 343.295 474.071H343.451C351.527 474.071 358.091 480.586 358.151 488.662L358.324 512Z\" fill=\"url(#paint23_linear_402_2)\"/>\n        <path d=\"M395.332 489.711L393.904 512H365.644L365.811 488.667C365.869 480.59 372.433 474.072 380.511 474.072H380.663C389.15 474.072 395.874 481.241 395.332 489.711Z\" fill=\"url(#paint24_linear_402_2)\"/>\n        <path d=\"M432.361 490.748L429.774 509.822C426.221 511.263 422.423 512.003 418.59 512.001H401.222L403.139 487.621C403.74 479.973 410.122 474.073 417.794 474.073H417.795C426.698 474.072 433.558 481.925 432.361 490.748Z\" fill=\"url(#paint25_linear_402_2)\"/>\n        <path d=\"M265.396 418.248L275.989 486.802C278.227 501.308 290.705 512 305.372 512H418.585C433.252 512 445.731 501.308 447.97 486.801L458.562 418.247L265.396 418.248Z\" fill=\"url(#paint26_linear_402_2)\"/>\n        <path d=\"M325.457 412.029L315.408 477.073C313.199 491.339 303.843 502.944 291.334 508.476C283.333 504.189 277.46 496.319 275.994 486.801L264.509 412.521H322.305C323.398 412.521 324.463 412.351 325.457 412.029Z\" fill=\"url(#paint27_linear_402_2)\"/>\n        <path d=\"M454.244 362.908H345.268V512H418.586C433.253 512 445.732 501.308 447.971 486.801L465.15 375.627C466.183 368.941 461.01 362.908 454.244 362.908Z\" fill=\"url(#paint28_linear_402_2)\"/>\n        <path d=\"M435.576 420.636C440.01 420.636 443.399 424.589 442.722 428.971L436.973 466.174C435.015 478.823 424.133 488.15 411.343 488.15H312.617C299.827 488.15 288.944 478.824 286.987 466.174L281.238 428.971C280.561 424.59 283.95 420.636 288.384 420.636H435.576Z\" fill=\"url(#paint29_linear_402_2)\"/>\n        <path d=\"M320.858 488.147H312.616C309.169 488.148 305.756 487.461 302.578 486.127C299.399 484.793 296.519 482.838 294.104 480.377C296.734 476.592 301.122 474.072 306.161 474.072C309.996 474.072 313.51 475.548 316.14 477.977C318.861 480.484 320.532 483.927 320.818 487.615L320.858 488.147Z\" fill=\"url(#paint30_linear_402_2)\"/>\n        <path d=\"M358.143 488.147H328.618C328.929 480.377 335.344 474.072 343.295 474.072H343.456C351.357 474.072 357.812 480.316 358.143 488.147Z\" fill=\"url(#paint31_linear_402_2)\"/>\n        <path d=\"M395.338 488.147H365.823C366.144 480.306 372.599 474.072 380.51 474.072H380.661C388.612 474.072 395.027 480.376 395.338 488.147Z\" fill=\"url(#paint32_linear_402_2)\"/>\n        <path d=\"M429.854 480.376C425.115 485.195 418.53 488.146 411.342 488.146H403.1L403.14 487.614C403.742 479.974 410.117 474.071 417.797 474.071C422.837 474.072 427.224 476.592 429.854 480.376Z\" fill=\"url(#paint33_linear_402_2)\"/>\n        <path d=\"M282.75 438.763L286.986 466.173C288.944 478.822 299.826 488.149 312.616 488.149H411.342C424.132 488.149 435.014 478.823 436.972 466.173L441.208 438.763H282.75Z\" fill=\"url(#paint34_linear_402_2)\"/>\n        <path d=\"M435.575 420.636H360.535V488.15H411.341C424.131 488.15 435.013 478.824 436.971 466.174L442.721 428.971C443.397 424.589 440.008 420.636 435.575 420.636Z\" fill=\"url(#paint35_linear_402_2)\"/>\n        <path d=\"M269.715 362.908C262.949 362.908 257.776 368.941 258.809 375.628L264.51 412.523H322.308C327.361 412.523 331.667 408.856 332.472 403.868L339.082 362.909H269.715V362.908Z\" fill=\"url(#paint36_linear_402_2)\"/>\n        <path d=\"M312.046 488.124C313.68 484.617 314.811 480.897 315.407 477.074L324.127 420.636H288.383C283.949 420.636 280.56 424.589 281.237 428.971L286.987 466.174C288.914 478.633 299.506 487.849 312.046 488.124Z\" fill=\"url(#paint37_linear_402_2)\"/>\n        </g>\n        <defs>\n        <linearGradient id=\"paint0_linear_402_2\" x1=\"171.437\" y1=\"279.938\" x2=\"227.553\" y2=\"279.938\" gradientUnits=\"userSpaceOnUse\">\n        <stop stop-color=\"#EAF9FA\"/>\n        <stop offset=\"1\" stop-color=\"#B4D2E2\"/>\n        </linearGradient>\n        <linearGradient id=\"paint1_linear_402_2\" x1=\"211.138\" y1=\"93.751\" x2=\"248.016\" y2=\"88.804\" gradientUnits=\"userSpaceOnUse\">\n        <stop stop-color=\"#528FD8\" stop-opacity=\"0\"/>\n        <stop offset=\"0.219\" stop-color=\"#4E8ED8\" stop-opacity=\"0.219\"/>\n        <stop offset=\"0.451\" stop-color=\"#4189D6\" stop-opacity=\"0.451\"/>\n        <stop offset=\"0.69\" stop-color=\"#2C81D3\" stop-opacity=\"0.69\"/>\n        <stop offset=\"0.931\" stop-color=\"#0E76CF\" stop-opacity=\"0.931\"/>\n        <stop offset=\"1\" stop-color=\"#0473CE\"/>\n        </linearGradient>\n        <linearGradient id=\"paint2_linear_402_2\" x1=\"198.803\" y1=\"111.025\" x2=\"202.851\" y2=\"82.692\" gradientUnits=\"userSpaceOnUse\">\n        <stop stop-color=\"#528FD8\" stop-opacity=\"0\"/>\n        <stop offset=\"0.219\" stop-color=\"#4E8ED8\" stop-opacity=\"0.219\"/>\n        <stop offset=\"0.451\" stop-color=\"#4189D6\" stop-opacity=\"0.451\"/>\n        <stop offset=\"0.69\" stop-color=\"#2C81D3\" stop-opacity=\"0.69\"/>\n        <stop offset=\"0.931\" stop-color=\"#0E76CF\" stop-opacity=\"0.931\"/>\n        <stop offset=\"1\" stop-color=\"#0473CE\"/>\n        </linearGradient>\n        <linearGradient id=\"paint3_linear_402_2\" x1=\"122.867\" y1=\"327.16\" x2=\"319.207\" y2=\"327.16\" gradientUnits=\"userSpaceOnUse\">\n        <stop stop-color=\"#C86D36\"/>\n        <stop offset=\"0.184\" stop-color=\"#C06937\"/>\n        <stop offset=\"0.478\" stop-color=\"#A95F3B\"/>\n        <stop offset=\"0.845\" stop-color=\"#834D41\"/>\n        <stop offset=\"1\" stop-color=\"#704444\"/>\n        </linearGradient>\n        <linearGradient id=\"paint4_linear_402_2\" x1=\"196.201\" y1=\"455.33\" x2=\"196.201\" y2=\"512.396\" gradientUnits=\"userSpaceOnUse\">\n        <stop stop-color=\"#593636\" stop-opacity=\"0\"/>\n        <stop offset=\"0.36\" stop-color=\"#583533\" stop-opacity=\"0.361\"/>\n        <stop offset=\"0.621\" stop-color=\"#53302A\" stop-opacity=\"0.621\"/>\n        <stop offset=\"0.848\" stop-color=\"#4A281A\" stop-opacity=\"0.848\"/>\n        <stop offset=\"1\" stop-color=\"#42210B\"/>\n        </linearGradient>\n        <linearGradient id=\"paint5_linear_402_2\" x1=\"193.961\" y1=\"471.731\" x2=\"196.346\" y2=\"403.981\" gradientUnits=\"userSpaceOnUse\">\n        <stop stop-color=\"#593636\" stop-opacity=\"0\"/>\n        <stop offset=\"0.36\" stop-color=\"#583533\" stop-opacity=\"0.361\"/>\n        <stop offset=\"0.621\" stop-color=\"#53302A\" stop-opacity=\"0.621\"/>\n        <stop offset=\"0.848\" stop-color=\"#4A281A\" stop-opacity=\"0.848\"/>\n        <stop offset=\"1\" stop-color=\"#42210B\"/>\n        </linearGradient>\n        <linearGradient id=\"paint6_linear_402_2\" x1=\"265.603\" y1=\"334.06\" x2=\"335.76\" y2=\"342.155\" gradientUnits=\"userSpaceOnUse\">\n        <stop stop-color=\"#593636\" stop-opacity=\"0\"/>\n        <stop offset=\"0.36\" stop-color=\"#583533\" stop-opacity=\"0.361\"/>\n        <stop offset=\"0.621\" stop-color=\"#53302A\" stop-opacity=\"0.621\"/>\n        <stop offset=\"0.848\" stop-color=\"#4A281A\" stop-opacity=\"0.848\"/>\n        <stop offset=\"1\" stop-color=\"#42210B\"/>\n        </linearGradient>\n        <linearGradient id=\"paint7_linear_402_2\" x1=\"187.451\" y1=\"62.7209\" x2=\"207.279\" y2=\"62.7209\" gradientUnits=\"userSpaceOnUse\">\n        <stop stop-color=\"#FEF0AE\"/>\n        <stop offset=\"1\" stop-color=\"#FAC600\"/>\n        </linearGradient>\n        <linearGradient id=\"paint8_linear_402_2\" x1=\"196.524\" y1=\"71.4479\" x2=\"197.873\" y2=\"40.7539\" gradientUnits=\"userSpaceOnUse\">\n        <stop stop-color=\"#FEA613\" stop-opacity=\"0\"/>\n        <stop offset=\"0.203\" stop-color=\"#FDA215\" stop-opacity=\"0.203\"/>\n        <stop offset=\"0.405\" stop-color=\"#FB961B\" stop-opacity=\"0.405\"/>\n        <stop offset=\"0.607\" stop-color=\"#F68225\" stop-opacity=\"0.607\"/>\n        <stop offset=\"0.807\" stop-color=\"#F06633\" stop-opacity=\"0.807\"/>\n        <stop offset=\"1\" stop-color=\"#E94444\"/>\n        </linearGradient>\n        <linearGradient id=\"paint9_linear_402_2\" x1=\"195.543\" y1=\"67.2199\" x2=\"197.23\" y2=\"96.9009\" gradientUnits=\"userSpaceOnUse\">\n        <stop stop-color=\"#FEA613\" stop-opacity=\"0\"/>\n        <stop offset=\"0.203\" stop-color=\"#FDA215\" stop-opacity=\"0.203\"/>\n        <stop offset=\"0.405\" stop-color=\"#FB961B\" stop-opacity=\"0.405\"/>\n        <stop offset=\"0.607\" stop-color=\"#F68225\" stop-opacity=\"0.607\"/>\n        <stop offset=\"0.807\" stop-color=\"#F06633\" stop-opacity=\"0.807\"/>\n        <stop offset=\"1\" stop-color=\"#E94444\"/>\n        </linearGradient>\n        <linearGradient id=\"paint10_linear_402_2\" x1=\"205.831\" y1=\"63.0499\" x2=\"249.342\" y2=\"61.3639\" gradientUnits=\"userSpaceOnUse\">\n        <stop stop-color=\"#FEA613\" stop-opacity=\"0\"/>\n        <stop offset=\"0.203\" stop-color=\"#FDA215\" stop-opacity=\"0.203\"/>\n        <stop offset=\"0.405\" stop-color=\"#FB961B\" stop-opacity=\"0.405\"/>\n        <stop offset=\"0.607\" stop-color=\"#F68225\" stop-opacity=\"0.607\"/>\n        <stop offset=\"0.807\" stop-color=\"#F06633\" stop-opacity=\"0.807\"/>\n        <stop offset=\"1\" stop-color=\"#E94444\"/>\n        </linearGradient>\n        <linearGradient id=\"paint11_linear_402_2\" x1=\"162.206\" y1=\"22.775\" x2=\"232.482\" y2=\"22.775\" gradientUnits=\"userSpaceOnUse\">\n        <stop stop-color=\"#FEF0AE\"/>\n        <stop offset=\"1\" stop-color=\"#FAC600\"/>\n        </linearGradient>\n        <linearGradient id=\"paint12_linear_402_2\" x1=\"196.221\" y1=\"29.074\" x2=\"196.895\" y2=\"49.986\" gradientUnits=\"userSpaceOnUse\">\n        <stop stop-color=\"#FEA613\" stop-opacity=\"0\"/>\n        <stop offset=\"0.203\" stop-color=\"#FDA215\" stop-opacity=\"0.203\"/>\n        <stop offset=\"0.405\" stop-color=\"#FB961B\" stop-opacity=\"0.405\"/>\n        <stop offset=\"0.607\" stop-color=\"#F68225\" stop-opacity=\"0.607\"/>\n        <stop offset=\"0.807\" stop-color=\"#F06633\" stop-opacity=\"0.807\"/>\n        <stop offset=\"1\" stop-color=\"#E94444\"/>\n        </linearGradient>\n        <linearGradient id=\"paint13_linear_402_2\" x1=\"128.421\" y1=\"361.71\" x2=\"291.593\" y2=\"361.71\" gradientUnits=\"userSpaceOnUse\">\n        <stop stop-color=\"#537983\"/>\n        <stop offset=\"1\" stop-color=\"#384949\"/>\n        </linearGradient>\n        <linearGradient id=\"paint14_linear_402_2\" x1=\"287.236\" y1=\"382.624\" x2=\"322.542\" y2=\"390.734\" gradientUnits=\"userSpaceOnUse\">\n        <stop stop-color=\"#1A1A1A\" stop-opacity=\"0\"/>\n        <stop offset=\"1\" stop-color=\"#1A1A1A\"/>\n        </linearGradient>\n        <linearGradient id=\"paint15_linear_402_2\" x1=\"166.247\" y1=\"331.756\" x2=\"228.134\" y2=\"393.643\" gradientUnits=\"userSpaceOnUse\">\n        <stop stop-color=\"#EAF9FA\"/>\n        <stop offset=\"1\" stop-color=\"#B4D2E2\"/>\n        </linearGradient>\n        <linearGradient id=\"paint16_linear_402_2\" x1=\"189.254\" y1=\"328.967\" x2=\"208.178\" y2=\"380.415\" gradientUnits=\"userSpaceOnUse\">\n        <stop stop-color=\"#FEF0AE\"/>\n        <stop offset=\"1\" stop-color=\"#FAC600\"/>\n        </linearGradient>\n        <linearGradient id=\"paint17_linear_402_2\" x1=\"156.114\" y1=\"363.23\" x2=\"171.697\" y2=\"415.902\" gradientUnits=\"userSpaceOnUse\">\n        <stop stop-color=\"#537983\"/>\n        <stop offset=\"1\" stop-color=\"#384949\"/>\n        </linearGradient>\n        <linearGradient id=\"paint18_linear_402_2\" x1=\"203.027\" y1=\"347.814\" x2=\"221.309\" y2=\"409.606\" gradientUnits=\"userSpaceOnUse\">\n        <stop stop-color=\"#537983\"/>\n        <stop offset=\"1\" stop-color=\"#384949\"/>\n        </linearGradient>\n        <linearGradient id=\"paint19_linear_402_2\" x1=\"196.355\" y1=\"345.007\" x2=\"195.455\" y2=\"371.335\" gradientUnits=\"userSpaceOnUse\">\n        <stop stop-color=\"#FEA613\" stop-opacity=\"0\"/>\n        <stop offset=\"0.203\" stop-color=\"#FDA215\" stop-opacity=\"0.203\"/>\n        <stop offset=\"0.405\" stop-color=\"#FB961B\" stop-opacity=\"0.405\"/>\n        <stop offset=\"0.607\" stop-color=\"#F68225\" stop-opacity=\"0.607\"/>\n        <stop offset=\"0.807\" stop-color=\"#F06633\" stop-opacity=\"0.807\"/>\n        <stop offset=\"1\" stop-color=\"#E94444\"/>\n        </linearGradient>\n        <linearGradient id=\"paint20_linear_402_2\" x1=\"216.598\" y1=\"349.544\" x2=\"250.519\" y2=\"349.544\" gradientUnits=\"userSpaceOnUse\">\n        <stop stop-color=\"#FEA613\" stop-opacity=\"0\"/>\n        <stop offset=\"0.203\" stop-color=\"#FDA215\" stop-opacity=\"0.203\"/>\n        <stop offset=\"0.405\" stop-color=\"#FB961B\" stop-opacity=\"0.405\"/>\n        <stop offset=\"0.607\" stop-color=\"#F68225\" stop-opacity=\"0.607\"/>\n        <stop offset=\"0.807\" stop-color=\"#F06633\" stop-opacity=\"0.807\"/>\n        <stop offset=\"1\" stop-color=\"#E94444\"/>\n        </linearGradient>\n        <linearGradient id=\"paint21_linear_402_2\" x1=\"325.707\" y1=\"437.454\" x2=\"429.45\" y2=\"437.454\" gradientUnits=\"userSpaceOnUse\">\n        <stop stop-color=\"#EAF9FA\"/>\n        <stop offset=\"1\" stop-color=\"#B4D2E2\"/>\n        </linearGradient>\n        <linearGradient id=\"paint22_linear_402_2\" x1=\"321.293\" y1=\"493.036\" x2=\"291.574\" y2=\"493.036\" gradientUnits=\"userSpaceOnUse\">\n        <stop stop-color=\"#EAF9FA\"/>\n        <stop offset=\"1\" stop-color=\"#B4D2E2\"/>\n        </linearGradient>\n        <linearGradient id=\"paint23_linear_402_2\" x1=\"359.223\" y1=\"493.036\" x2=\"329.06\" y2=\"493.036\" gradientUnits=\"userSpaceOnUse\">\n        <stop stop-color=\"#EAF9FA\"/>\n        <stop offset=\"1\" stop-color=\"#B4D2E2\"/>\n        </linearGradient>\n        <linearGradient id=\"paint24_linear_402_2\" x1=\"394.291\" y1=\"493.036\" x2=\"369.601\" y2=\"493.036\" gradientUnits=\"userSpaceOnUse\">\n        <stop stop-color=\"#EAF9FA\"/>\n        <stop offset=\"1\" stop-color=\"#B4D2E2\"/>\n        </linearGradient>\n        <linearGradient id=\"paint25_linear_402_2\" x1=\"437.231\" y1=\"493.036\" x2=\"405.74\" y2=\"493.036\" gradientUnits=\"userSpaceOnUse\">\n        <stop stop-color=\"#EAF9FA\"/>\n        <stop offset=\"1\" stop-color=\"#B4D2E2\"/>\n        </linearGradient>\n        <linearGradient id=\"paint26_linear_402_2\" x1=\"361.98\" y1=\"483.731\" x2=\"361.98\" y2=\"515.651\" gradientUnits=\"userSpaceOnUse\">\n        <stop stop-color=\"#528FD8\" stop-opacity=\"0\"/>\n        <stop offset=\"0.219\" stop-color=\"#4E8ED8\" stop-opacity=\"0.219\"/>\n        <stop offset=\"0.451\" stop-color=\"#4189D6\" stop-opacity=\"0.451\"/>\n        <stop offset=\"0.69\" stop-color=\"#2C81D3\" stop-opacity=\"0.69\"/>\n        <stop offset=\"0.931\" stop-color=\"#0E76CF\" stop-opacity=\"0.931\"/>\n        <stop offset=\"1\" stop-color=\"#0473CE\"/>\n        </linearGradient>\n        <linearGradient id=\"paint27_linear_402_2\" x1=\"257.27\" y1=\"428.877\" x2=\"334.741\" y2=\"476.468\" gradientUnits=\"userSpaceOnUse\">\n        <stop stop-color=\"#593636\" stop-opacity=\"0\"/>\n        <stop offset=\"0.36\" stop-color=\"#583533\" stop-opacity=\"0.361\"/>\n        <stop offset=\"0.621\" stop-color=\"#53302A\" stop-opacity=\"0.621\"/>\n        <stop offset=\"0.848\" stop-color=\"#4A281A\" stop-opacity=\"0.848\"/>\n        <stop offset=\"1\" stop-color=\"#42210B\"/>\n        </linearGradient>\n        <linearGradient id=\"paint28_linear_402_2\" x1=\"421.299\" y1=\"440.378\" x2=\"465.313\" y2=\"446.461\" gradientUnits=\"userSpaceOnUse\">\n        <stop stop-color=\"#528FD8\" stop-opacity=\"0\"/>\n        <stop offset=\"0.219\" stop-color=\"#4E8ED8\" stop-opacity=\"0.219\"/>\n        <stop offset=\"0.451\" stop-color=\"#4189D6\" stop-opacity=\"0.451\"/>\n        <stop offset=\"0.69\" stop-color=\"#2C81D3\" stop-opacity=\"0.69\"/>\n        <stop offset=\"0.931\" stop-color=\"#0E76CF\" stop-opacity=\"0.931\"/>\n        <stop offset=\"1\" stop-color=\"#0473CE\"/>\n        </linearGradient>\n        <linearGradient id=\"paint29_linear_402_2\" x1=\"333.597\" y1=\"454.393\" x2=\"414.772\" y2=\"454.393\" gradientUnits=\"userSpaceOnUse\">\n        <stop stop-color=\"#FEF0AE\"/>\n        <stop offset=\"1\" stop-color=\"#FAC600\"/>\n        </linearGradient>\n        <linearGradient id=\"paint30_linear_402_2\" x1=\"319.624\" y1=\"481.109\" x2=\"294.199\" y2=\"481.109\" gradientUnits=\"userSpaceOnUse\">\n        <stop stop-color=\"#FEF0AE\"/>\n        <stop offset=\"1\" stop-color=\"#FAC600\"/>\n        </linearGradient>\n        <linearGradient id=\"paint31_linear_402_2\" x1=\"359.036\" y1=\"481.109\" x2=\"329.08\" y2=\"481.109\" gradientUnits=\"userSpaceOnUse\">\n        <stop stop-color=\"#FEF0AE\"/>\n        <stop offset=\"1\" stop-color=\"#FAC600\"/>\n        </linearGradient>\n        <linearGradient id=\"paint32_linear_402_2\" x1=\"394.275\" y1=\"481.109\" x2=\"369.753\" y2=\"481.109\" gradientUnits=\"userSpaceOnUse\">\n        <stop stop-color=\"#FEF0AE\"/>\n        <stop offset=\"1\" stop-color=\"#FAC600\"/>\n        </linearGradient>\n        <linearGradient id=\"paint33_linear_402_2\" x1=\"433.904\" y1=\"481.109\" x2=\"406.964\" y2=\"481.109\" gradientUnits=\"userSpaceOnUse\">\n        <stop stop-color=\"#FEF0AE\"/>\n        <stop offset=\"1\" stop-color=\"#FAC600\"/>\n        </linearGradient>\n        <linearGradient id=\"paint34_linear_402_2\" x1=\"361.979\" y1=\"459.279\" x2=\"361.979\" y2=\"494.161\" gradientUnits=\"userSpaceOnUse\">\n        <stop stop-color=\"#FEA613\" stop-opacity=\"0\"/>\n        <stop offset=\"0.203\" stop-color=\"#FDA215\" stop-opacity=\"0.203\"/>\n        <stop offset=\"0.405\" stop-color=\"#FB961B\" stop-opacity=\"0.405\"/>\n        <stop offset=\"0.607\" stop-color=\"#F68225\" stop-opacity=\"0.607\"/>\n        <stop offset=\"0.807\" stop-color=\"#F06633\" stop-opacity=\"0.807\"/>\n        <stop offset=\"1\" stop-color=\"#E94444\"/>\n        </linearGradient>\n        <linearGradient id=\"paint35_linear_402_2\" x1=\"413.247\" y1=\"456.787\" x2=\"439.965\" y2=\"461.081\" gradientUnits=\"userSpaceOnUse\">\n        <stop stop-color=\"#FEA613\" stop-opacity=\"0\"/>\n        <stop offset=\"0.203\" stop-color=\"#FDA215\" stop-opacity=\"0.203\"/>\n        <stop offset=\"0.405\" stop-color=\"#FB961B\" stop-opacity=\"0.405\"/>\n        <stop offset=\"0.607\" stop-color=\"#F68225\" stop-opacity=\"0.607\"/>\n        <stop offset=\"0.807\" stop-color=\"#F06633\" stop-opacity=\"0.807\"/>\n        <stop offset=\"1\" stop-color=\"#E94444\"/>\n        </linearGradient>\n        <linearGradient id=\"paint36_linear_402_2\" x1=\"258.477\" y1=\"373.34\" x2=\"364.873\" y2=\"408.646\" gradientUnits=\"userSpaceOnUse\">\n        <stop stop-color=\"#1A1A1A\" stop-opacity=\"0\"/>\n        <stop offset=\"1\" stop-color=\"#1A1A1A\"/>\n        </linearGradient>\n        <linearGradient id=\"paint37_linear_402_2\" x1=\"293.705\" y1=\"435.841\" x2=\"343.325\" y2=\"483.075\" gradientUnits=\"userSpaceOnUse\">\n        <stop stop-color=\"#FEA613\" stop-opacity=\"0\"/>\n        <stop offset=\"0.203\" stop-color=\"#FDA215\" stop-opacity=\"0.203\"/>\n        <stop offset=\"0.405\" stop-color=\"#FB961B\" stop-opacity=\"0.405\"/>\n        <stop offset=\"0.607\" stop-color=\"#F68225\" stop-opacity=\"0.607\"/>\n        <stop offset=\"0.807\" stop-color=\"#F06633\" stop-opacity=\"0.807\"/>\n        <stop offset=\"1\" stop-color=\"#E94444\"/>\n        </linearGradient>\n        <clipPath id=\"clip0_402_2\">\n        <rect width=\"512\" height=\"512\" fill=\"white\"/>\n        </clipPath>\n        </defs>\n      </svg>                \n      <div class=\"item_total\">\n        <!-- <p><small>{{cart_item}} ITEM IN CART</small></p> -->\n                <p *ngIf=\"total_prices=='0'\"><small>0 ITEM IN CART</small></p>\n        <p *ngIf=\"total_prices!='0'\"><small>{{cart_length.length}} ITEM IN CART</small></p>\n        <p class=\"price_end\">$ 0{{total_prices | number : '.2-2'}}</p>\n        <!-- <p class=\"price_end\">$ {{total_prices | number : '.2-2'}}</p> -->\n\n        <!-- <p><small>30ounce per unit</small></p> -->\n      </div>\n    </div>\n    <div class=\"footer_item_end mw_230\">\n      <div class=\"reserve_btn\" (click)=\"compareNDreview()\">\n        <p>Reserve</p>\n        <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n      </div>\n    </div>\n  </div>\n</ion-footer>\n\n\n\n\n\n<!-- <ion-content>\n  <div class=\"banner_wraper\"><img src=\"assets/banner-home.png\"></div>\n  <div class=\"segment_2\">\n    <div>\n        <ion-segment [(ngModel)]=\"scotch\" class=\"ion-no-padding\" >\n          <ion-segment-button value=\"premium-scotch\" (click)=\"liquorSegmentPremium()\">\n            <ion-button class=\"\" shape=\"round\">Premium Scotch</ion-button>\n          </ion-segment-button>\n          <ion-segment-button value=\"regular-scotch\" (click)=\"liquorSegmentRegular()\">\n            <ion-button class=\"\" shape=\"round\">Regular Scotch</ion-button>\n          </ion-segment-button>\n          <ion-segment-button value=\"scotch-whisky\" (click)=\"liquorSegmentWhisky()\">\n            <ion-button class=\"\" shape=\"round\">Scotch Whisky</ion-button>\n          </ion-segment-button>\n        </ion-segment>\n    </div>\n\n  <div [ngSwitch]=\"scotch\" >\n    <ion-list *ngSwitchCase=\"'premium-scotch'\" class=\"drink_items\" >\n      <ion-item *ngFor=\"let item of all_liquor_categorywise\">\n        <div >\n        <ion-grid>\n          <ion-row class=\"ion-align-items-center\" >\n          <ion-col size=\"7\">\n            <div class=\"drink_content\">\n              <h3>{{item.liquorName}}</h3>\n              <ul>\n                <li>HIGH: <span class=\"price_hike\">$ {{item.BigLiquorMaxPrice}}<img src=\"assets/green-arrow.png\"></span></li>\n                <li>LOW: <span class=\"price_down\">$ {{item.BigLiquorMinPrice}}<img src=\"assets/red-arrow.png\"></span></li>\n                <li>NOW: <span class=\"price_now\">$ {{item.BigLiquorNormalPrice}}</span></li>\n              </ul>\n            </div>\n          </ion-col>\n          <ion-col size=\"4\">\n            <div class=\"quantity\">\n              <span class=\"plus\">+</span>\n              <p>1</p>\n              <span class=\"minus\">-</span>\n            </div>\n          </ion-col>\n          <ion-col size=\"1\" class=\"ion-no-padding\">\n            <img src=\"assets/copy.png\" style=\"padding-top: 5px;\">\n          </ion-col>\n        </ion-row>\n        </ion-grid>\n        </div>\n      </ion-item>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase=\"'regular-scotch'\" class=\"liquor_items\">\n      <ion-item *ngFor=\"let item of all_liquor_categorywise\">\n          <ion-thumbnail slot=\"start\">\n            <img src=\"{{item.image}}\">\n          </ion-thumbnail>\n            <div class=\"drink_content\">\n        <h3>{{item.liquorName}}</h3>\n        <div class=\"unit_category\">\n          <ul>\n            <li class=\"active\" (click)=\"unit0(0,item.SmallLiquorNormalPrice,item.liquorName)\">0 <span>units</span></li>\n            <li (click)=\"unit25(25,item.SmallLiquorNormalPrice,item.liquorName)\">25 <span>units</span></li>\n            <li (click)=\"unit50(50,item.SmallLiquorNormalPrice,item.liquorName)\">50 <span>units</span></li>\n          </ul>\n          <ion-select multiple=\"false\" (ionChange)=\"optionsliquorShopOwner($event,i);\" cancelText=\"cancel\" okText=\"ok\">\n            <ion-select-option *ngFor=\"let item of all_liquor_category\" [value]=\"item.id\">{{item.liquorName}}\n            </ion-select-option>\n            </ion-select>\n        </div>\n      </div>\n        </ion-item>\n    </ion-list>\n    <ion-list *ngSwitchCase=\"'scotch-whisky'\">\n      \n    </ion-list>\n  </div>\n</div>\n</ion-content> -->\n\n\n";
      /***/
    },

    /***/
    "./src/app/vaultselected/vaultselected-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/vaultselected/vaultselected-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: VaultselectedPageRoutingModule */

    /***/
    function srcAppVaultselectedVaultselectedRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VaultselectedPageRoutingModule", function () {
        return VaultselectedPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _vaultselected_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./vaultselected.page */
      "./src/app/vaultselected/vaultselected.page.ts");

      var routes = [{
        path: '',
        component: _vaultselected_page__WEBPACK_IMPORTED_MODULE_3__["VaultselectedPage"]
      }];

      var VaultselectedPageRoutingModule = /*#__PURE__*/_createClass(function VaultselectedPageRoutingModule() {
        _classCallCheck(this, VaultselectedPageRoutingModule);
      });

      VaultselectedPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], VaultselectedPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/vaultselected/vaultselected.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/vaultselected/vaultselected.module.ts ***!
      \*******************************************************/

    /*! exports provided: VaultselectedPageModule */

    /***/
    function srcAppVaultselectedVaultselectedModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VaultselectedPageModule", function () {
        return VaultselectedPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _vaultselected_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./vaultselected-routing.module */
      "./src/app/vaultselected/vaultselected-routing.module.ts");
      /* harmony import */


      var _vaultselected_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./vaultselected.page */
      "./src/app/vaultselected/vaultselected.page.ts");

      var VaultselectedPageModule = /*#__PURE__*/_createClass(function VaultselectedPageModule() {
        _classCallCheck(this, VaultselectedPageModule);
      });

      VaultselectedPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _vaultselected_routing_module__WEBPACK_IMPORTED_MODULE_5__["VaultselectedPageRoutingModule"]],
        declarations: [_vaultselected_page__WEBPACK_IMPORTED_MODULE_6__["VaultselectedPage"]]
      })], VaultselectedPageModule);
      /***/
    },

    /***/
    "./src/app/vaultselected/vaultselected.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/vaultselected/vaultselected.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppVaultselectedVaultselectedPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content ion-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 32px;\n  --background: #212121;\n  --background-activated: #212121;\n  font-family: \"Outfit\" !important;\n  color: #dcc88d;\n  font-size: 11px;\n  letter-spacing: -0.01px;\n  --box-shadow: none;\n  --padding-top: 3px;\n  font-weight: 900;\n  text-transform: capitalize;\n}\nion-content .sec1 {\n  padding-left: 10px;\n  margin-bottom: 10px;\n}\nion-content .collection_banner {\n  padding: 10px 0;\n}\nion-content .collection_banner img {\n  border-radius: 10px;\n  max-height: 120px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nion-content .liquor_items img {\n  -o-object-fit: scale-down;\n     object-fit: scale-down;\n}\n.liquor_items {\n  padding: 0 10px;\n  margin: 0 0 10px;\n}\n.liquor_items ion-item {\n  --padding-start: 0;\n  --inner-border-width: 0;\n  --inner-padding-end: 0;\n  border-bottom: 1px solid #eee;\n}\n.liquor_items ion-item ion-thumbnail {\n  background: #f7f7f7;\n  border-radius: 6px;\n  width: 80px;\n  height: 80px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.liquor_items ion-item ion-thumbnail img {\n  width: 60px;\n  height: 110px;\n  position: relative;\n  display: block;\n  margin: 0 auto;\n  top: -20px;\n}\n.liquor_items ion-item .drink_content h3 {\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0;\n}\n.note {\n  padding: 0 10px;\n  color: #58151c;\n}\n.note:last-child {\n  margin-bottom: 10px;\n}\n.note span {\n  color: #f00;\n}\n.note p {\n  margin: 0;\n}\n.select_area {\n  display: flex;\n  align-items: flex-end;\n}\n.select_box {\n  display: flex;\n  align-items: flex-start;\n  margin-top: 10px;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n.select_box.outlet {\n  margin-left: auto;\n}\n.select_box label {\n  flex: 1 0 0%;\n  font-size: 12px;\n  margin-bottom: 5px;\n  color: #898989;\n}\n.select_box select {\n  border: none;\n  padding: 6px;\n  border-radius: 4px;\n  font-size: 14px;\n  color: #898989;\n  background: #be9d4e;\n  color: #000;\n  margin-left: auto;\n  -moz-appearance: none;\n  -o-appearance: none;\n  -webkit-appearance: none;\n  -ms-appearance: none;\n  line-height: 18px;\n  text-align: center;\n  font-weight: 700;\n}\n.select_box select:focus {\n  outline: none;\n  box-shadow: none;\n}\n.select_box ul {\n  display: flex;\n  align-items: center;\n  margin: 0;\n  padding: 0;\n}\n.select_box ul li {\n  display: inline-block;\n  vertical-align: top;\n  margin-right: 10px;\n}\n.select_box ul li:last-child {\n  margin-right: 0;\n}\n.select_box ul li label {\n  display: inline-block;\n  vertical-align: top;\n  border: 2px solid #ccc;\n  padding: 3px 6px;\n  border-radius: 4px;\n  font-size: 16px;\n  color: #898989;\n  margin: 0;\n  font-weight: 700;\n}\n.select_box ul li input {\n  position: absolute;\n  opacity: 0;\n}\n.select_box ul li input:checked + label {\n  border-color: #be9d4e;\n  color: #be9d4e;\n}\n.select_box ul li span {\n  text-transform: uppercase;\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmF1bHRzZWxlY3RlZC92YXVsdHNlbGVjdGVkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxSkk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FBcEpSO0FBc0pJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQXBKUjtBQXNKSTtFQUNGLGVBQUE7QUFwSkY7QUFzSkU7RUFDQyxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFwSkg7QUF3Skk7RUFDSSx5QkFBQTtLQUFBLHNCQUFBO0FBdEpSO0FBcUtBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBbEtKO0FBb0tJO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUFsS1I7QUFvS1E7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBbEtaO0FBb0tZO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQWxLaEI7QUFzS1k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBcEtoQjtBQXlLQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBdEtKO0FBd0tJO0VBQ0ksbUJBQUE7QUF0S1I7QUF5S0k7RUFDSSxXQUFBO0FBdktSO0FBMEtJO0VBQ0ksU0FBQTtBQXhLUjtBQTJLQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtBQXhLSjtBQTBLQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQXZLSjtBQXlLSTtFQUNJLGlCQUFBO0FBdktSO0FBMEtJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUF4S1I7QUEyS0k7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBektSO0FBMktRO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FBektaO0FBNktJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUEzS1I7QUE2S1E7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUEzS1o7QUE2S1k7RUFDSSxlQUFBO0FBM0toQjtBQThLWTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQTVLaEI7QUErS1k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUE3S2hCO0FBK0tnQjtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQTdLcEI7QUFpTFk7RUFDSSx5QkFBQTtFQUNBLGVBQUE7QUEvS2hCIiwiZmlsZSI6InNyYy9hcHAvdmF1bHRzZWxlY3RlZC92YXVsdHNlbGVjdGVkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5zZWdtZW50XzIgaW9uLXNlZ21lbnR7XHJcbi8vICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuLy8gLmxpcXVvcl9pdGVtcyB7XHJcbi8vICAgICBwYWRkaW5nOiAwO1xyXG5cclxuLy8gICAgIGlvbi1pdGVtIHtcclxuLy8gICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcclxuLy8gICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiA1cHg7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuLy8gLmRyaW5rX2NvbnRlbnQge1xyXG4vLyAgICAgaDMge1xyXG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuLy8gICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgJi5kcmlua19jb250ZW50LS1tb2Qge1xyXG4vLyAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuLy8gLmRyaW5rX2NvbnRlbnQuZHJpbmtfY29udGVudC0tbW9kIHtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbi8vIH1cclxuLy8gLmRyaW5rX2NvbnRlbnQgLnVuaXRfY2F0ZWdvcnl7XHJcblxyXG4vLyAgICAgaW9uLWl0ZW0ge1xyXG4vLyAgICAgICAgIC0tbWluLWhlaWdodDogMzJweDtcclxuLy8gICAgICAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcclxuLy8gICAgICAgICAtLWlubmVyLWJveC1zaGFkb3c6IG5vbmU7XHJcbi8vICAgICAgICAgLS1ib3JkZXItd2lkdGg6IDA7XHJcbi8vICAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG5cclxuLy8gICAgICAgICBpb24tYnV0dG9uIHtcclxuLy8gICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICAgIGlvbi1jb2wge1xyXG4vLyAgICAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDA7XHJcblxyXG4vLyAgICAgICAgIC5idXR0b24ge1xyXG4vLyAgICAgICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbi8vICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNiZTlkNGU7XHJcbi8vICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwKTtcclxuLy8gICAgICAgICAgICAgLS1jb2xvcjogIzAwMDtcclxuLy8gICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4vLyAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbi8vICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAuaXRlbS1oYXMtdmFsdWUge1xyXG4vLyAgICAgICAgICAgICBpb24tc2VsZWN0IHtcclxuLy8gICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNiZTlkNGU7XHJcbi8vICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICAgIHNlbGVjdCB7XHJcbi8vICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2RjYzg4ZDtcclxuLy8gICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbi8vICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuLy8gICAgICAgICBjb2xvcjogI2RjYzg4ZDtcclxuLy8gICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4vLyAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbi8vICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgICAgcGFkZGluZy10b3A6IDRweDtcclxuLy8gICAgIH1cclxuLy8gICAgIHVse1xyXG4vLyAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNXB4KTtcclxuLy8gICAgICAgICAgICAgYmFja2dyb3VuZDogI2U1ZTVlNTtcclxuLy8gICAgICAgICAgICAgbWFyZ2luOiAwIDVweCAwIDA7XHJcbi8vICAgICAgICAgICAgIGhlaWdodDogMzJweDtcclxuLy8gICAgICAgICBsaXtcclxuLy8gICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzg4ODtcclxuXHJcbi8vICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbi8vICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbi8vICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgIGxhYmVse1xyXG4vLyAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbi8vICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG5cclxuLy8gICAgICAgICAgICAgICAgIHNwYW57XHJcbi8vICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDJweDtcclxuLy8gICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMnB4IDtcclxuLy8gICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICAucC1wcmljZXtcclxuLy8gICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4vLyAgICAgICAgIHVse1xyXG4vLyAgICAgICAgICAgICBsaXtcclxuLy8gICAgICAgICAgICAgICAgIGxhYmVse1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4gICAgXHJcbi8vIH1cclxuXHJcbi8vIC5ub3Rle1xyXG4vLyAgICAgcHtcclxuLy8gICAgICAgICBwYWRkaW5nOiA1cHggMTZweDtcclxuLy8gICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4vLyAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbi8vICAgICAgICAgY29sb3I6ICNhYWFhYWE7XHJcbi8vICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4vLyAgICAgICAgIHNwYW57XHJcbi8vICAgICAgICAgICAgIGNvbG9yOiAjZmYwMDAwO1xyXG4vLyAgICAgICAgICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuLy8gICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8vIC5jYXJkQWRke1xyXG4vLyAgICAgaW9uLWJ1dHRvbntcclxuLy8gICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbi8vICAgICAgICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4vLyAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuLy8gICAgICAgICBjb2xvcjogIzAwMDtcclxuLy8gICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuLy8gICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4vLyAgICAgICAgIGhlaWdodDogMzBweDtcclxuLy8gICAgICAgICBpbWd7XHJcbi8vICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4vLyAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG4vLyAubGlxdW9yX2l0ZW1ze1xyXG4vLyAgICAgaW9uLXRodW1ibmFpbHtcclxuLy8gICAgICAgICBtYXJnaW4taW5saW5lLWVuZDogNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgXHJcbi8vICAgICB9XHJcbi8vIH1cclxuLy8gLmxpcXVvcl9pdGVtcyAuaXRlbSAuZHJpbmtfY29udGVudCAudW5pdF9jYXRlZ29yeSB1bCBsaSBsYWJlbHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcbi8vIC5saXF1b3JfaXRlbXMgLml0ZW0gLmRyaW5rX2NvbnRlbnQgLnVuaXRfY2F0ZWdvcnkgdWwgbGkge1xyXG4vLyAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyAgICAgd2lkdGg6IGNhbGMoMTAwJSAvIDIpICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMjEyMTIxO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMyMTIxMjE7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiT3V0Zml0XCIgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogI2RjYzg4ZDtcclxuICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxcHg7XHJcbiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIC0tcGFkZGluZy10b3A6IDNweDtcclxuICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgfVxyXG4gICAgLnNlYzEge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbGxlY3Rpb25fYmFubmVyIHtcclxuXHRcdHBhZGRpbmc6IDEwcHggMDtcclxuXHJcblx0XHRpbWcge1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdFx0XHRtYXgtaGVpZ2h0OiAxMjBweDtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdG9iamVjdC1maXQ6IGNvdmVyO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbiAgICAubGlxdW9yX2l0ZW1zIGltZyB7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcclxuICAgIH1cclxufVxyXG5cclxuLy8gLmNtb3B7XHJcbi8vIFx0cG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgdG9wOiA1cHg7XHJcbi8vICAgICB3aWR0aDogMzBweDtcclxuLy8gICAgIHBhZGRpbmc6IDVweDtcclxuLy8gICAgIGJvcmRlcjogMnB4IHNvbGlkICNkNWMyODk7XHJcbi8vICAgICBoZWlnaHQ6IDI4cHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiAjZGNjODhkO1xyXG4vLyB9XHJcblxyXG5cclxuLmxpcXVvcl9pdGVtcyB7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xyXG5cclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDA7XHJcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcclxuXHJcbiAgICAgICAgaW9uLXRodW1ibmFpbCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuZHJpbmtfY29udGVudCB7XHJcbiAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLm5vdGUge1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgY29sb3I6ICM1ODE1MWM7XHJcblxyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiAjZjAwO1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxufVxyXG4uc2VsZWN0X2FyZWEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxufVxyXG4uc2VsZWN0X2JveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHJcbiAgICAmLm91dGxldCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgbGFiZWwge1xyXG4gICAgICAgIGZsZXg6IDEgMCAwJTtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjODk4OTg5O1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdCB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDZweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjODk4OTg5O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNiZTlkNGU7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgIC1vLWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgIC1tcy1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG5cclxuICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuXHJcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogM3B4IDZweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjODk4OTg5O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuXHJcbiAgICAgICAgICAgICAgICAmOmNoZWNrZWQgKyBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjYmU5ZDRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYmU5ZDRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/vaultselected/vaultselected.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/vaultselected/vaultselected.page.ts ***!
      \*****************************************************/

    /*! exports provided: VaultselectedPage */

    /***/
    function srcAppVaultselectedVaultselectedPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VaultselectedPage", function () {
        return VaultselectedPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/helper.service */
      "./src/app/services/helper.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_vault_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/vault.service */
      "./src/app/services/vault.service.ts");
      /* harmony import */


      var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/common.service */
      "./src/app/services/common.service.ts");

      var VaultselectedPage = /*#__PURE__*/function () {
        function VaultselectedPage( //private userDetails: UserDetailsService,
        vaultProvider, commonProvider, helper, navCtrl, _router) {
          _classCallCheck(this, VaultselectedPage);

          this.vaultProvider = vaultProvider;
          this.commonProvider = commonProvider;
          this.helper = helper;
          this.navCtrl = navCtrl;
          this._router = _router;
          this.liquorMainCategory = []; // liquore Main Category

          this.liquorCategory = []; // liquor Category

          this.vaultCategory = []; // vault Category

          this.vaultCategory_id = ''; // vault Category

          this.filter_vault_category = [];
          this.categoryItems = [];
          this.allItems = [];
          this.selectedMainCategory = 0;
          this.userId = 0;
          this.total_price = 0.0;
          this.vault_selected = '';
          this.UniqueDeviceids = '12345678';
          this.cart_length = [];
          this.cart_item = 0;
          this.total_prices = '';
          this.final_prices = '';
          this.vault_category_id = '';
          this.cart_price = 0;
          this.vault_selected_item_price = "0";
          this.price = 0;
          this.slideOpts = {
            initialSlide: 0,
            speed: 600,
            spaceBetween: 10,
            centeredSlides: true,
            slidesPerView: 1.1,
            autoplay: true,
            loop: true
          };
          this.slideOpts1 = {
            slidesPerView: 3,
            spaceBetween: 10,
            watchSlidesProgress: true,
            initialSlide: 0,
            centeredSlides: false,
            loop: false
          }; //this.addToCart = { carts: [] };

          this.userId = localStorage.getItem('user_id');
        }

        _createClass(VaultselectedPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {}
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.commonProvider.fetchSubCategories("1").then(function (res) {
              if (res["status"] == 1) {
                _this.liquorCategory = res["sub_categories"];
              }
            });
            this.getCategoryItem("1");
            var data = {
              "device_id": localStorage.getItem('uniqueDeviceID')
            };
            this.vaultProvider.getVaultCartDetails(data).then(function (res) {
              if (res["status"] == '1') {
                console.log(res);
                _this.cart_length = res["cartItems"];
                _this.cart_item = _this.cart_length.length;
              }
            });
          }
        }, {
          key: "getCategoryItem",
          value: function getCategoryItem(id) {
            var _this2 = this;

            this.vaultProvider.fetchVaultProducts(id).then(function (res) {
              if (res["status"] == 1) {
                _this2.categoryItems = res["vault_products"];
              }
            });
          } // public cartPrice = 0;

        }, {
          key: "radioButtonSelect",
          value: function radioButtonSelect(categoryItem, valueSelected) {
            console.log(valueSelected);
            this.vault_selected = valueSelected;
            this.cart_price = Number(this.final_prices) * Number(this.vault_selected); // if (this.vault_category_id == "") {
            //   this.helper.showErrorCustom("Please select vault category")
            // } else {
            //   this.vault_selected = valueSelected;
            // }
          }
        }, {
          key: "compareNDreview",
          value: function compareNDreview() {
            if (this.cart_item == 0) {
              this.helper.showErrorCustom('Please select one item and click cart icon for add to cart');
            } else if (this.cart_item >= 1) {
              localStorage.setItem('outletCategory', this.vault_category_id);
              this.navCtrl.navigateForward('/vaultcompare');
            }
          }
        }, {
          key: "getSelectedBefore",
          value: function getSelectedBefore(category) {
            return 0;
          }
        }, {
          key: "select",
          value: function select(item) {
            console.log(item);
            this.final_prices = item.price;
            this.vault_category_id = item.vault_category_id;
            this.cart_price = Number(item.price) * Number(this.vault_selected);
            console.log(this.cart_price);
            console.log(this.vault_selected);
          }
        }, {
          key: "addToCarts",
          value: function addToCarts(item) {
            var _this3 = this;

            console.log('addToCarts', item);
            console.log('vault_selected', this.vault_selected);
            console.log("item>>" + this.cart_item);

            if (this.UniqueDeviceids === "") {
              this.UniqueDeviceids = "12345678";
            } else if (this.vault_category_id == undefined) {
              this.helper.presentAlert("Sorry you did not select the vault category");
            } else if (this.vault_selected == '') {
              this.helper.presentAlert("Sorry you did not select the quantity");
            } else if (this.vault_selected_item_price == '0') {
              this.helper.presentAlert("Sorry you did not select the vault category");
            } else {
              var data = {
                "device_id": localStorage.getItem('uniqueDeviceID'),
                "product_id": item.id,
                "product_name": item.name,
                "price": this.vault_selected_item_price,
                "quantity": this.vault_selected,
                "vault_category_id": this.vault_category_id
              };
              console.log("cartDAta>>" + JSON.stringify(data));
              this.vaultProvider.addToVaultCart(data).then(function (res) {
                if (res["status"] == '1') {
                  //this.vault_selected_item_price= "0";
                  _this3.helper.suucessAlert(res["message"]);

                  console.log(res);
                  _this3.cart_length = res["cartItems"];
                  _this3.cart_item = res["cartItems"].length;
                  _this3.total_prices = res["total_price"]; //this.compareNDreview();
                }
              });
            }
          }
          /**
           * This method is for displaying category wise products
           * @param response
           */

        }, {
          key: "pushDataIntoVaultCATEGORYClass",
          value: function pushDataIntoVaultCATEGORYClass(response) {
            var _this4 = this;

            // this.addToLiquorItem.liquorItem = []; // doing empty the Interface Class
            this.allItems = response;
            console.log(response);
            this.allItems.forEach(function (categoryItem) {
              if (_this4.allItems.length > 0) {
                var liquorItem = response; // pusing the data in to FoodCategory Interface

                _this4.categoryItems.push({
                  counter: 0,
                  itemId: categoryItem.id,
                  name: categoryItem.name,
                  total: categoryItem.total,
                  current_price: _this4.filter_vault_category.price,
                  category_id: categoryItem.category_id,
                  sub_category_id: categoryItem.sub_category_id,
                  vault_categories_id: _this4.filter_vault_category.vault_category_id,
                  vault_category: categoryItem.vault_product_prices,
                  image: categoryItem.image
                });
              }
            });
            console.log("addToLiquorItem", this.categoryItems);
          }
        }, {
          key: "search",
          value: function search() {
            this._router.navigate(['/search']);
          }
        }, {
          key: "selectVaultCategory",
          value: function selectVaultCategory(event, item, item1) {
            var _this5 = this;

            console.log("val>>" + event.target.value);
            console.log("selected_item>>" + JSON.stringify(item));
            this.vault_category_id = event.target.value;
            console.log("vault_category_id>>" + this.vault_category_id);

            for (var i = 0; i < item.length; i++) {
              if (this.vault_category_id == item[i].vault_category_id) {
                this.price = item[i].price;
                console.log("price_selected>>" + this.price);
                this.vault_selected_item_price = this.price.toString();
                ;

                if (this.UniqueDeviceids === "") {
                  this.UniqueDeviceids = "12345678";
                } else if (this.vault_category_id == undefined) {
                  this.helper.presentAlert("Sorry you didnot select the vault category");
                } else if (this.vault_category_id == '') {
                  this.helper.presentAlert("Sorry you didnot select the vault category");
                } else if (this.vault_selected == '') {
                  this.helper.presentAlert("Sorry you didnot select the quantity");
                } else {
                  var data = {
                    "device_id": localStorage.getItem('uniqueDeviceID'),
                    "product_id": item1.id,
                    "product_name": item1.name,
                    "price": this.vault_selected_item_price,
                    "quantity": this.vault_selected,
                    "vault_category_id": this.vault_category_id
                  };
                  console.log("cartDAta>>" + JSON.stringify(data));
                  this.vaultProvider.addToVaultCart(data).then(function (res) {
                    if (res["status"] == '1') {
                      //this.vault_selected_item_price= "0";
                      _this5.helper.suucessAlert(res["message"]);

                      console.log(res);
                      _this5.cart_length = res["cartItems"];
                      _this5.cart_item = res["cartItems"].length;
                      _this5.total_prices = res["total_price"]; //this.compareNDreview();
                    }
                  });
                } //this.vault_selected_item_price = this.price.toString();;


                break;
              } else {
                console.log("nothing match");
              }
            } //this.cart_price = Number(price) * Number(this.vault_selected);
            // console.log(event.detail.value);
            // this.vault_selected = event.detail.value;
            // this.cart_price = Number(this.final_prices) * Number(this.vault_selected);
            // if (this.vault_category_id == "") {
            //   this.helper.showErrorCustom("Please select vault category")
            // } else {
            //   this.vault_selected = event.detail.value;
            // }
            // console.log(item);
            // this.final_prices = item.price;
            // this.vault_category_id = event.detail.value;
            // this.cart_price = Number(item.price) * Number(this.vault_selected);
            // console.log(this.cart_price);
            // console.log(this.vault_selected);
            //console.log("cartprice>>"+this.cart_price);

          }
        }]);

        return VaultselectedPage;
      }();

      VaultselectedPage.ctorParameters = function () {
        return [{
          type: src_app_services_vault_service__WEBPACK_IMPORTED_MODULE_5__["VaultProvider"]
        }, {
          type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonProvider"]
        }, {
          type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_1__["HelperProvider"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      VaultselectedPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-vaultselected',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./vaultselected.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/vaultselected/vaultselected.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./vaultselected.page.scss */
        "./src/app/vaultselected/vaultselected.page.scss"))["default"]]
      })], VaultselectedPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=vaultselected-vaultselected-module-es5.js.map