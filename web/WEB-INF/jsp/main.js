(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _seccion_seccion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./seccion/seccion.component */ "./src/app/seccion/seccion.component.ts");
/* harmony import */ var _menu_second_menuSecond_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-second/menuSecond.component */ "./src/app/menu-second/menuSecond.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"], _seccion_seccion_component__WEBPACK_IMPORTED_MODULE_5__["SeccionComponent"], _menu_second_menuSecond_component__WEBPACK_IMPORTED_MODULE_6__["MenuSecondComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"], _seccion_seccion_component__WEBPACK_IMPORTED_MODULE_5__["SeccionComponent"], _menu_second_menuSecond_component__WEBPACK_IMPORTED_MODULE_6__["MenuSecondComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"header\" class=\"page-topbar\">\n  <!-- start header nav-->\n  <div class=\"navbar-fixed\">\n    <nav class=\"navbar-color gradient-45deg-light-blue-cyan\">\n      <div class=\"nav-wrapper\">\n        <ul class=\"left\">\n          <li>\n            <h1 class=\"logo-wrapper\">\n              <a href=\"index.html\" class=\"brand-logo darken-1\">\n                <img src=\"images/logo/materialize-logo.png\" alt=\"materialize logo\">\n                <span class=\"logo-text hide-on-med-and-down\">Materialize</span>\n              </a>\n            </h1>\n          </li>\n        </ul>\n        <div class=\"header-search-wrapper hide-on-med-and-down\">\n          <i class=\"material-icons\">search</i>\n          <input type=\"text\" name=\"Search\" class=\"header-search-input z-depth-2\" placeholder=\"Explore Materialize\" />\n        </div>\n        <ul class=\"right hide-on-med-and-down\">\n          <li>\n            <a href=\"javascript:void(0);\" class=\"waves-effect waves-block waves-light translation-button\" data-activates=\"translation-dropdown\">\n              <span class=\"flag-icon flag-icon-gb\"></span>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0);\" class=\"waves-effect waves-block waves-light toggle-fullscreen\">\n              <i class=\"material-icons\">settings_overscan</i>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0);\" class=\"waves-effect waves-block waves-light notification-button\" data-activates=\"notifications-dropdown\">\n              <i class=\"material-icons\">notifications_none\n                <small class=\"notification-badge pink accent-2\">5</small>\n              </i>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0);\" class=\"waves-effect waves-block waves-light profile-button\" data-activates=\"profile-dropdown\">\n              <span class=\"avatar-status avatar-online\">\n                <img src=\"images/avatar/avatar-7.png\" alt=\"avatar\">\n                <i></i>\n              </span>\n            </a>\n          </li>\n          <li>\n            <a href=\"#\" data-activates=\"chat-out\" class=\"waves-effect waves-block waves-light chat-collapse\">\n              <i class=\"material-icons\">format_indent_increase</i>\n            </a>\n          </li>\n        </ul>\n        <!-- translation-button -->\n        <ul id=\"translation-dropdown\" class=\"dropdown-content\">\n          <li>\n            <a href=\"#!\" class=\"grey-text text-darken-1\">\n              <i class=\"flag-icon flag-icon-gb\"></i> English</a>\n          </li>\n          <li>\n            <a href=\"#!\" class=\"grey-text text-darken-1\">\n              <i class=\"flag-icon flag-icon-fr\"></i> French</a>\n          </li>\n          <li>\n            <a href=\"#!\" class=\"grey-text text-darken-1\">\n              <i class=\"flag-icon flag-icon-cn\"></i> Chinese</a>\n          </li>\n          <li>\n            <a href=\"#!\" class=\"grey-text text-darken-1\">\n              <i class=\"flag-icon flag-icon-de\"></i> German</a>\n          </li>\n        </ul>\n        <!-- notifications-dropdown -->\n        <ul id=\"notifications-dropdown\" class=\"dropdown-content\">\n          <li>\n            <h6>NOTIFICATIONS\n              <span class=\"new badge\">5</span>\n            </h6>\n          </li>\n          <li class=\"divider\"></li>\n          <li>\n            <a href=\"#!\" class=\"grey-text text-darken-2\">\n              <span class=\"material-icons icon-bg-circle cyan small\">add_shopping_cart</span> A new order has been placed!</a>\n            <time class=\"media-meta\" datetime=\"2015-06-12T20:50:48+08:00\">2 hours ago</time>\n          </li>\n          <li>\n            <a href=\"#!\" class=\"grey-text text-darken-2\">\n              <span class=\"material-icons icon-bg-circle red small\">stars</span> Completed the task</a>\n            <time class=\"media-meta\" datetime=\"2015-06-12T20:50:48+08:00\">3 days ago</time>\n          </li>\n          <li>\n            <a href=\"#!\" class=\"grey-text text-darken-2\">\n              <span class=\"material-icons icon-bg-circle teal small\">settings</span> Settings updated</a>\n            <time class=\"media-meta\" datetime=\"2015-06-12T20:50:48+08:00\">4 days ago</time>\n          </li>\n          <li>\n            <a href=\"#!\" class=\"grey-text text-darken-2\">\n              <span class=\"material-icons icon-bg-circle deep-orange small\">today</span> Director meeting started</a>\n            <time class=\"media-meta\" datetime=\"2015-06-12T20:50:48+08:00\">6 days ago</time>\n          </li>\n          <li>\n            <a href=\"#!\" class=\"grey-text text-darken-2\">\n              <span class=\"material-icons icon-bg-circle amber small\">trending_up</span> Generate monthly report</a>\n            <time class=\"media-meta\" datetime=\"2015-06-12T20:50:48+08:00\">1 week ago</time>\n          </li>\n        </ul>\n        <!-- profile-dropdown -->\n        <ul id=\"profile-dropdown\" class=\"dropdown-content\">\n          <li>\n            <a href=\"#\" class=\"grey-text text-darken-1\">\n              <i class=\"material-icons\">face</i> Profile</a>\n          </li>\n          <li>\n            <a href=\"#\" class=\"grey-text text-darken-1\">\n              <i class=\"material-icons\">settings</i> Settings</a>\n          </li>\n          <li>\n            <a href=\"#\" class=\"grey-text text-darken-1\">\n              <i class=\"material-icons\">live_help</i> Help</a>\n          </li>\n          <li class=\"divider\"></li>\n          <li>\n            <a href=\"#\" class=\"grey-text text-darken-1\">\n              <i class=\"material-icons\">lock_outline</i> Lock</a>\n          </li>\n          <li>\n            <a href=\"#\" class=\"grey-text text-darken-1\">\n              <i class=\"material-icons\">keyboard_tab</i> Logout</a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </div>\n  <!-- end header nav-->\n</header>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'header-app',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html")
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/menu-second/menuSecond.component.html":
/*!*******************************************************!*\
  !*** ./src/app/menu-second/menuSecond.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside id=\"right-sidebar-nav\">\n    <ul id=\"chat-out\" class=\"side-nav rightside-navigation\">\n      <li class=\"li-hover\">\n        <div class=\"row\">\n          <div class=\"col s12 border-bottom-1 mt-5\">\n            <ul class=\"tabs\">\n              <li class=\"tab col s4\">\n                <a href=\"#activity\" class=\"active\">\n                  <span class=\"material-icons\">graphic_eq</span>\n                </a>\n              </li>\n              <li class=\"tab col s4\">\n                <a href=\"#chatapp\">\n                  <span class=\"material-icons\">face</span>\n                </a>\n              </li>\n              <li class=\"tab col s4\">\n                <a href=\"#settings\">\n                  <span class=\"material-icons\">settings</span>\n                </a>\n              </li>\n            </ul>\n          </div>\n          <div id=\"settings\" class=\"col s12\">\n            <h6 class=\"mt-5 mb-3 ml-3\">GENERAL SETTINGS</h6>\n            <ul class=\"collection border-none\">\n              <li class=\"collection-item border-none\">\n                <div class=\"m-0\">\n                  <span class=\"font-weight-600\">Notifications</span>\n                  <div class=\"switch right\">\n                    <label>\n                      <input checked type=\"checkbox\">\n                      <span class=\"lever\"></span>\n                    </label>\n                  </div>\n                </div>\n                <p>Use checkboxes when looking for yes or no answers.</p>\n              </li>\n              <li class=\"collection-item border-none\">\n                <div class=\"m-0\">\n                  <span class=\"font-weight-600\">Show recent activity</span>\n                  <div class=\"switch right\">\n                    <label>\n                      <input checked type=\"checkbox\">\n                      <span class=\"lever\"></span>\n                    </label>\n                  </div>\n                </div>\n                <p>The for attribute is necessary to bind our custom checkbox with the input.</p>\n              </li>\n              <li class=\"collection-item border-none\">\n                <div class=\"m-0\">\n                  <span class=\"font-weight-600\">Notifications</span>\n                  <div class=\"switch right\">\n                    <label>\n                      <input type=\"checkbox\">\n                      <span class=\"lever\"></span>\n                    </label>\n                  </div>\n                </div>\n                <p>Use checkboxes when looking for yes or no answers.</p>\n              </li>\n              <li class=\"collection-item border-none\">\n                <div class=\"m-0\">\n                  <span class=\"font-weight-600\">Show recent activity</span>\n                  <div class=\"switch right\">\n                    <label>\n                      <input type=\"checkbox\">\n                      <span class=\"lever\"></span>\n                    </label>\n                  </div>\n                </div>\n                <p>The for attribute is necessary to bind our custom checkbox with the input.</p>\n              </li>\n              <li class=\"collection-item border-none\">\n                <div class=\"m-0\">\n                  <span class=\"font-weight-600\">Show your emails</span>\n                  <div class=\"switch right\">\n                    <label>\n                      <input type=\"checkbox\">\n                      <span class=\"lever\"></span>\n                    </label>\n                  </div>\n                </div>\n                <p>Use checkboxes when looking for yes or no answers.</p>\n              </li>\n              <li class=\"collection-item border-none\">\n                <div class=\"m-0\">\n                  <span class=\"font-weight-600\">Show Task statistics</span>\n                  <div class=\"switch right\">\n                    <label>\n                      <input type=\"checkbox\">\n                      <span class=\"lever\"></span>\n                    </label>\n                  </div>\n                </div>\n                <p>The for attribute is necessary to bind our custom checkbox with the input.</p>\n              </li>\n            </ul>\n          </div>\n          <div id=\"chatapp\" class=\"col s12\">\n            <div class=\"collection border-none\">\n              <a href=\"#!\" class=\"collection-item avatar border-none\">\n                <img src=\"images/avatar/avatar-1.png\" alt=\"\" class=\"circle cyan\">\n                <span class=\"line-height-0\">Elizabeth Elliott </span>\n                <span class=\"medium-small right blue-grey-text text-lighten-3\">5.00 AM</span>\n                <p class=\"medium-small blue-grey-text text-lighten-3\">Thank you </p>\n              </a>\n              <a href=\"#!\" class=\"collection-item avatar border-none\">\n                <img src=\"images/avatar/avatar-2.png\" alt=\"\" class=\"circle deep-orange accent-2\">\n                <span class=\"line-height-0\">Mary Adams </span>\n                <span class=\"medium-small right blue-grey-text text-lighten-3\">4.14 AM</span>\n                <p class=\"medium-small blue-grey-text text-lighten-3\">Hello Boo </p>\n              </a>\n              <a href=\"#!\" class=\"collection-item avatar border-none\">\n                <img src=\"images/avatar/avatar-3.png\" alt=\"\" class=\"circle teal accent-4\">\n                <span class=\"line-height-0\">Caleb Richards </span>\n                <span class=\"medium-small right blue-grey-text text-lighten-3\">9.00 PM</span>\n                <p class=\"medium-small blue-grey-text text-lighten-3\">Keny ! </p>\n              </a>\n              <a href=\"#!\" class=\"collection-item avatar border-none\">\n                <img src=\"images/avatar/avatar-4.png\" alt=\"\" class=\"circle cyan\">\n                <span class=\"line-height-0\">June Lane </span>\n                <span class=\"medium-small right blue-grey-text text-lighten-3\">4.14 AM</span>\n                <p class=\"medium-small blue-grey-text text-lighten-3\">Ohh God </p>\n              </a>\n              <a href=\"#!\" class=\"collection-item avatar border-none\">\n                <img src=\"images/avatar/avatar-5.png\" alt=\"\" class=\"circle red accent-2\">\n                <span class=\"line-height-0\">Edward Fletcher </span>\n                <span class=\"medium-small right blue-grey-text text-lighten-3\">5.15 PM</span>\n                <p class=\"medium-small blue-grey-text text-lighten-3\">Love you </p>\n              </a>\n              <a href=\"#!\" class=\"collection-item avatar border-none\">\n                <img src=\"images/avatar/avatar-6.png\" alt=\"\" class=\"circle deep-orange accent-2\">\n                <span class=\"line-height-0\">Crystal Bates </span>\n                <span class=\"medium-small right blue-grey-text text-lighten-3\">8.00 AM</span>\n                <p class=\"medium-small blue-grey-text text-lighten-3\">Can we </p>\n              </a>\n              <a href=\"#!\" class=\"collection-item avatar border-none\">\n                <img src=\"images/avatar/avatar-7.png\" alt=\"\" class=\"circle cyan\">\n                <span class=\"line-height-0\">Nathan Watts </span>\n                <span class=\"medium-small right blue-grey-text text-lighten-3\">9.53 PM</span>\n                <p class=\"medium-small blue-grey-text text-lighten-3\">Great! </p>\n              </a>\n              <a href=\"#!\" class=\"collection-item avatar border-none\">\n                <img src=\"images/avatar/avatar-8.png\" alt=\"\" class=\"circle red accent-2\">\n                <span class=\"line-height-0\">Willard Wood </span>\n                <span class=\"medium-small right blue-grey-text text-lighten-3\">4.20 AM</span>\n                <p class=\"medium-small blue-grey-text text-lighten-3\">Do it </p>\n              </a>\n              <a href=\"#!\" class=\"collection-item avatar border-none\">\n                <img src=\"images/avatar/avatar-9.png\" alt=\"\" class=\"circle teal accent-4\">\n                <span class=\"line-height-0\">Ronnie Ellis </span>\n                <span class=\"medium-small right blue-grey-text text-lighten-3\">5.30 PM</span>\n                <p class=\"medium-small blue-grey-text text-lighten-3\">Got that </p>\n              </a>\n              <a href=\"#!\" class=\"collection-item avatar border-none\">\n                <img src=\"images/avatar/avatar-1.png\" alt=\"\" class=\"circle cyan\">\n                <span class=\"line-height-0\">Gwendolyn Wood </span>\n                <span class=\"medium-small right blue-grey-text text-lighten-3\">4.34 AM</span>\n                <p class=\"medium-small blue-grey-text text-lighten-3\">Like you </p>\n              </a>\n              <a href=\"#!\" class=\"collection-item avatar border-none\">\n                <img src=\"images/avatar/avatar-2.png\" alt=\"\" class=\"circle red accent-2\">\n                <span class=\"line-height-0\">Daniel Russell </span>\n                <span class=\"medium-small right blue-grey-text text-lighten-3\">12.00 AM</span>\n                <p class=\"medium-small blue-grey-text text-lighten-3\">Thank you </p>\n              </a>\n              <a href=\"#!\" class=\"collection-item avatar border-none\">\n                <img src=\"images/avatar/avatar-3.png\" alt=\"\" class=\"circle teal accent-4\">\n                <span class=\"line-height-0\">Sarah Graves </span>\n                <span class=\"medium-small right blue-grey-text text-lighten-3\">11.14 PM</span>\n                <p class=\"medium-small blue-grey-text text-lighten-3\">Okay you </p>\n              </a>\n              <a href=\"#!\" class=\"collection-item avatar border-none\">\n                <img src=\"images/avatar/avatar-4.png\" alt=\"\" class=\"circle red accent-2\">\n                <span class=\"line-height-0\">Andrew Hoffman </span>\n                <span class=\"medium-small right blue-grey-text text-lighten-3\">7.30 PM</span>\n                <p class=\"medium-small blue-grey-text text-lighten-3\">Can do </p>\n              </a>\n              <a href=\"#!\" class=\"collection-item avatar border-none\">\n                <img src=\"images/avatar/avatar-5.png\" alt=\"\" class=\"circle cyan\">\n                <span class=\"line-height-0\">Camila Lynch </span>\n                <span class=\"medium-small right blue-grey-text text-lighten-3\">2.00 PM</span>\n                <p class=\"medium-small blue-grey-text text-lighten-3\">Leave it </p>\n              </a>\n            </div>\n          </div>\n          <div id=\"activity\" class=\"col s12\">\n            <h6 class=\"mt-5 mb-3 ml-3\">RECENT ACTIVITY</h6>\n            <div class=\"activity\">\n              <div class=\"col s3 mt-2 center-align recent-activity-list-icon\">\n                <i class=\"material-icons white-text icon-bg-color deep-purple lighten-2\">add_shopping_cart</i>\n              </div>\n              <div class=\"col s9 recent-activity-list-text\">\n                <a href=\"#\" class=\"deep-purple-text medium-small\">just now</a>\n                <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Jim Doe Purchased new equipments for zonal office.</p>\n              </div>\n              <div class=\"recent-activity-list chat-out-list row mb-0\">\n                <div class=\"col s3 mt-2 center-align recent-activity-list-icon\">\n                  <i class=\"material-icons white-text icon-bg-color cyan lighten-2\">airplanemode_active</i>\n                </div>\n                <div class=\"col s9 recent-activity-list-text\">\n                  <a href=\"#\" class=\"cyan-text medium-small\">Yesterday</a>\n                  <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Your Next flight for USA will be on 15th August 2015.</p>\n                </div>\n              </div>\n              <div class=\"recent-activity-list chat-out-list row mb-0\">\n                <div class=\"col s3 mt-2 center-align recent-activity-list-icon medium-small\">\n                  <i class=\"material-icons white-text icon-bg-color green lighten-2\">settings_voice</i>\n                </div>\n                <div class=\"col s9 recent-activity-list-text\">\n                  <a href=\"#\" class=\"green-text medium-small\">5 Days Ago</a>\n                  <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Natalya Parker Send you a voice mail for next conference.</p>\n                </div>\n              </div>\n              <div class=\"recent-activity-list chat-out-list row mb-0\">\n                <div class=\"col s3 mt-2 center-align recent-activity-list-icon\">\n                  <i class=\"material-icons white-text icon-bg-color amber lighten-2\">store</i>\n                </div>\n                <div class=\"col s9 recent-activity-list-text\">\n                  <a href=\"#\" class=\"amber-text medium-small\">1 Week Ago</a>\n                  <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Jessy Jay open a new store at S.G Road.</p>\n                </div>\n              </div>\n              <div class=\"recent-activity-list row\">\n                <div class=\"col s3 mt-2 center-align recent-activity-list-icon\">\n                  <i class=\"material-icons white-text icon-bg-color deep-orange lighten-2\">settings_voice</i>\n                </div>\n                <div class=\"col s9 recent-activity-list-text\">\n                  <a href=\"#\" class=\"deep-orange-text medium-small\">2 Week Ago</a>\n                  <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">voice mail for conference.</p>\n                </div>\n              </div>\n              <div class=\"recent-activity-list chat-out-list row mb-0\">\n                <div class=\"col s3 mt-2 center-align recent-activity-list-icon medium-small\">\n                  <i class=\"material-icons white-text icon-bg-color brown lighten-2\">settings_voice</i>\n                </div>\n                <div class=\"col s9 recent-activity-list-text\">\n                  <a href=\"#\" class=\"brown-text medium-small\">1 Month Ago</a>\n                  <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Natalya Parker Send you a voice mail for next conference.</p>\n                </div>\n              </div>\n              <div class=\"recent-activity-list chat-out-list row mb-0\">\n                <div class=\"col s3 mt-2 center-align recent-activity-list-icon\">\n                  <i class=\"material-icons white-text icon-bg-color deep-purple lighten-2\">store</i>\n                </div>\n                <div class=\"col s9 recent-activity-list-text\">\n                  <a href=\"#\" class=\"deep-purple-text medium-small\">3 Month Ago</a>\n                  <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Jessy Jay open a new store at S.G Road.</p>\n                </div>\n              </div>\n              <div class=\"recent-activity-list row\">\n                <div class=\"col s3 mt-2 center-align recent-activity-list-icon\">\n                  <i class=\"material-icons white-text icon-bg-color grey lighten-2\">settings_voice</i>\n                </div>\n                <div class=\"col s9 recent-activity-list-text\">\n                  <a href=\"#\" class=\"grey-text medium-small\">1 Year Ago</a>\n                  <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">voice mail for conference.</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </aside>\n"

/***/ }),

/***/ "./src/app/menu-second/menuSecond.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/menu-second/menuSecond.component.ts ***!
  \*****************************************************/
/*! exports provided: MenuSecondComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuSecondComponent", function() { return MenuSecondComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuSecondComponent = /** @class */ (function () {
    function MenuSecondComponent() {
    }
    MenuSecondComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'menu-second-app',
            template: __webpack_require__(/*! ./menuSecond.component.html */ "./src/app/menu-second/menuSecond.component.html")
        })
    ], MenuSecondComponent);
    return MenuSecondComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside id=\"left-sidebar-nav\">\n            <ul id=\"slide-out\" class=\"side-nav fixed leftside-navigation\">\n              <li class=\"user-details cyan darken-2\">\n                <div class=\"row\">\n                  <div class=\"col col s4 m4 l4\">\n                    <img src=\"images/avatar/avatar-7.png\" alt=\"\" class=\"circle responsive-img valign profile-image cyan\">\n                  </div>\n                  <div class=\"col col s8 m8 l8\">\n                    <ul id=\"profile-dropdown-nav\" class=\"dropdown-content\">\n                      <li>\n                        <a href=\"#\" class=\"grey-text text-darken-1\">\n                          <i class=\"material-icons\">face</i> Profile</a>\n                      </li>\n                      <li>\n                        <a href=\"#\" class=\"grey-text text-darken-1\">\n                          <i class=\"material-icons\">settings</i> Settings</a>\n                      </li>\n                      <li>\n                        <a href=\"#\" class=\"grey-text text-darken-1\">\n                          <i class=\"material-icons\">live_help</i> Help</a>\n                      </li>\n                      <li class=\"divider\"></li>\n                      <li>\n                        <a href=\"#\" class=\"grey-text text-darken-1\">\n                          <i class=\"material-icons\">lock_outline</i> Lock</a>\n                      </li>\n                      <li>\n                        <a href=\"#\" class=\"grey-text text-darken-1\">\n                          <i class=\"material-icons\">keyboard_tab</i> Logout</a>\n                      </li>\n                    </ul>\n                    <a class=\"btn-flat dropdown-button waves-effect waves-light white-text profile-btn\" href=\"#\" data-activates=\"profile-dropdown-nav\">John Doe<i class=\"mdi-navigation-arrow-drop-down right\"></i></a>\n                    <p class=\"user-roal\">Administrator</p>\n                  </div>\n                </div>\n              </li>\n              <li class=\"no-padding\">\n                <ul class=\"collapsible\" data-collapsible=\"accordion\">\n                  <li class=\"bold\">\n                    <a href=\"index.html\" class=\"waves-effect waves-cyan\">\n                        <i class=\"material-icons\">pie_chart_outlined</i>\n                        <span class=\"nav-text\">Dashboard</span>\n                      </a>\n                  </li>\n                  <li class=\"bold\">\n                    <a href=\"cards-basic.html\" class=\"waves-effect waves-cyan\">\n                        <i class=\"material-icons\">cast</i>\n                        <span class=\"nav-text\">Cards</span>\n                      </a>\n                  </li>\n                  <li class=\"bold\">\n                    <a href=\"ui-basic-buttons.html\" class=\"waves-effect waves-cyan\">\n                        <i class=\"material-icons\">insert_link</i>\n                        <span class=\"nav-text\">Buttons</span>\n                      </a>\n                  </li>\n                  <li class=\"bold\">\n                    <a href=\"form-layouts.html\" class=\"waves-effect waves-cyan\">\n                        <i class=\"material-icons\">format_color_text</i>\n                        <span class=\"nav-text\">Forms</span>\n                      </a>\n                  </li>\n                  <li class=\"bold\">\n                    <a href=\"css-typography.html\" class=\"waves-effect waves-cyan\">\n                        <i class=\"material-icons\">format_size</i>\n                        <span class=\"nav-text\">Typography</span>\n                      </a>\n                  </li>\n                  <li class=\"bold\">\n                    <a href=\"css-color.html\" class=\"waves-effect waves-cyan\">\n                        <i class=\"material-icons\">invert_colors</i>\n                        <span class=\"nav-text\">Color</span>\n                      </a>\n                  </li>\n                  <li class=\"bold\">\n                    <a href=\"table-basic.html\" class=\"waves-effect waves-cyan\">\n                        <i class=\"material-icons\">border_all</i>\n                        <span class=\"nav-text\">Table</span>\n                      </a>\n                  </li>\n                  <li class=\"bold\">\n                    <a href=\"ui-icons.html\" class=\"waves-effect waves-cyan\">\n                      <i class=\"material-icons\">lightbulb_outline</i>\n                      <span class=\"nav-text\">Icons</span>\n                    </a>\n                  </li>\n                  <li>\n                    <a class=\"btn waves-effect waves-light gradient-45deg-red-pink\" href=\"https://pixinvent.com/materialize-material-design-admin-template/landing/\" target=\"_blank\">\n                      <i class=\"material-icons white-text\">file_upload</i>Upgrade to Pro!\n                    </a>\n                  </li>\n                </ul>\n              </li>\n            </ul>\n            <a href=\"#\" data-activates=\"slide-out\" class=\"sidebar-collapse btn-floating btn-medium waves-effect waves-light hide-on-large-only\">\n              <i class=\"material-icons\">menu</i>\n            </a>\n          </aside>\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "menu-app",
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html")
        })
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/seccion/seccion.component.html":
/*!************************************************!*\
  !*** ./src/app/seccion/seccion.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"content\">\n    <!--start container-->\n    <div class=\"container\">\n      <!--card stats start-->\n      <div id=\"card-stats\">\n        <div class=\"row mt-1\">\n          <div class=\"col s12 m6 l3\">\n            <div class=\"card gradient-45deg-light-blue-cyan gradient-shadow min-height-100 white-text\">\n              <div class=\"padding-4\">\n                <div class=\"col s7 m7\">\n                  <i class=\"material-icons background-round mt-5\">add_shopping_cart</i>\n                  <p>Orders</p>\n                </div>\n                <div class=\"col s5 m5 right-align\">\n                  <h5 class=\"mb-0\">690</h5>\n                  <p class=\"no-margin\">New</p>\n                  <p>6,00,00</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col s12 m6 l3\">\n            <div class=\"card gradient-45deg-red-pink gradient-shadow min-height-100 white-text\">\n              <div class=\"padding-4\">\n                <div class=\"col s7 m7\">\n                  <i class=\"material-icons background-round mt-5\">perm_identity</i>\n                  <p>Clients</p>\n                </div>\n                <div class=\"col s5 m5 right-align\">\n                  <h5 class=\"mb-0\">1885</h5>\n                  <p class=\"no-margin\">New</p>\n                  <p>1,12,900</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col s12 m6 l3\">\n            <div class=\"card gradient-45deg-amber-amber gradient-shadow min-height-100 white-text\">\n              <div class=\"padding-4\">\n                <div class=\"col s7 m7\">\n                  <i class=\"material-icons background-round mt-5\">timeline</i>\n                  <p>Sales</p>\n                </div>\n                <div class=\"col s5 m5 right-align\">\n                  <h5 class=\"mb-0\">80%</h5>\n                  <p class=\"no-margin\">Growth</p>\n                  <p>3,42,230</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col s12 m6 l3\">\n            <div class=\"card gradient-45deg-green-teal gradient-shadow min-height-100 white-text\">\n              <div class=\"padding-4\">\n                <div class=\"col s7 m7\">\n                  <i class=\"material-icons background-round mt-5\">attach_money</i>\n                  <p>Profit</p>\n                </div>\n                <div class=\"col s5 m5 right-align\">\n                  <h5 class=\"mb-0\">$890</h5>\n                  <p class=\"no-margin\">Today</p>\n                  <p>$25,000</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div id=\"card-widgets\">\n        <div class=\"row\">\n          <div class=\"col s12 m4 l4\">\n            <ul id=\"task-card\" class=\"collection with-header\">\n              <li class=\"collection-header teal accent-4\">\n                <h4 class=\"task-card-title\">My Task</h4>\n                <p class=\"task-card-date\">Sept 16, 2017</p>\n              </li>\n              <li class=\"collection-item dismissable\">\n                <input type=\"checkbox\" id=\"task1\" />\n                <label for=\"task1\">Create Mobile App UI.\n                  <a href=\"#\" class=\"secondary-content\">\n                    <span class=\"ultra-small\">Today</span>\n                  </a>\n                </label>\n                <span class=\"task-cat cyan\">Mobile App</span>\n              </li>\n              <li class=\"collection-item dismissable\">\n                <input type=\"checkbox\" id=\"task2\" />\n                <label for=\"task2\">Check the new API standerds.\n                  <a href=\"#\" class=\"secondary-content\">\n                    <span class=\"ultra-small\">Monday</span>\n                  </a>\n                </label>\n                <span class=\"task-cat red accent-2\">Web API</span>\n              </li>\n              <li class=\"collection-item dismissable\">\n                <input type=\"checkbox\" id=\"task3\" checked=\"checked\" />\n                <label for=\"task3\">Check the new Mockup of ABC.\n                  <a href=\"#\" class=\"secondary-content\">\n                    <span class=\"ultra-small\">Wednesday</span>\n                  </a>\n                </label>\n                <span class=\"task-cat teal accent-4\">Mockup</span>\n              </li>\n              <li class=\"collection-item dismissable\">\n                <input type=\"checkbox\" id=\"task4\" checked=\"checked\" disabled=\"disabled\" />\n                <label for=\"task4\">I did it !</label>\n                <span class=\"task-cat deep-orange accent-2\">Mobile App</span>\n              </li>\n            </ul>\n          </div>\n          <div class=\"col s12 m12 l4\">\n            <div id=\"flight-card\" class=\"card\">\n              <div class=\"card-header deep-orange accent-2\">\n                <div class=\"card-title\">\n                  <h4 class=\"flight-card-title\">Flight</h4>\n                  <p class=\"flight-card-date\">June 18, Thu 04:50</p>\n                </div>\n              </div>\n              <div class=\"card-content-bg white-text\">\n                <div class=\"card-content\">\n                  <div class=\"row flight-state-wrapper\">\n                    <div class=\"col s5 m5 l5 center-align\">\n                      <div class=\"flight-state\">\n                        <h4 class=\"margin\">LDN</h4>\n                        <p class=\"ultra-small\">London</p>\n                      </div>\n                    </div>\n                    <div class=\"col s2 m2 l2 center-align\">\n                      <i class=\"material-icons flight-icon\">local_airport</i>\n                    </div>\n                    <div class=\"col s5 m5 l5 center-align\">\n                      <div class=\"flight-state\">\n                        <h4 class=\"margin\">SFO</h4>\n                        <p class=\"ultra-small\">San Francisco</p>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col s6 m6 l6 center-align\">\n                      <div class=\"flight-info\">\n                        <p class=\"small\">\n                          <span class=\"grey-text text-lighten-4\">Depart:</span> 04.50</p>\n                        <p class=\"small\">\n                          <span class=\"grey-text text-lighten-4\">Flight:</span> IB 5786</p>\n                        <p class=\"small\">\n                          <span class=\"grey-text text-lighten-4\">Terminal:</span> B</p>\n                      </div>\n                    </div>\n                    <div class=\"col s6 m6 l6 center-align flight-state-two\">\n                      <div class=\"flight-info\">\n                        <p class=\"small\">\n                          <span class=\"grey-text text-lighten-4\">Arrive:</span> 08.50</p>\n                        <p class=\"small\">\n                          <span class=\"grey-text text-lighten-4\">Flight:</span> IB 5786</p>\n                        <p class=\"small\">\n                          <span class=\"grey-text text-lighten-4\">Terminal:</span> C</p>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col s12 m4 l4\">\n            <div id=\"profile-card\" class=\"card\">\n              <div class=\"card-image waves-effect waves-block waves-light\">\n                <img class=\"activator\" src=\"images/gallary/3.png\" alt=\"user bg\">\n              </div>\n              <div class=\"card-content\">\n                <img src=\"images/avatar/avatar-7.png\" alt=\"\" class=\"circle responsive-img activator card-profile-image cyan lighten-1 padding-2\">\n                <a class=\"btn-floating activator btn-move-up waves-effect waves-light red accent-2 z-depth-4 right\">\n                  <i class=\"material-icons\">edit</i>\n                </a>\n                <span class=\"card-title activator grey-text text-darken-4\">Roger Waters</span>\n                <p>\n                  <i class=\"material-icons\">perm_identity</i> Project Manager</p>\n                <p>\n                  <i class=\"material-icons\">perm_phone_msg</i> +1 (612) 222 8989</p>\n                <p>\n                  <i class=\"material-icons\">email</i> yourmail@domain.com</p>\n              </div>\n              <div class=\"card-reveal\">\n                <span class=\"card-title grey-text text-darken-4\">Roger Waters\n                  <i class=\"material-icons right\">close</i>\n                </span>\n                <p>Here is some more information about this card.</p>\n                <p>\n                  <i class=\"material-icons\">perm_identity</i> Project Manager</p>\n                <p>\n                  <i class=\"material-icons\">perm_phone_msg</i> +1 (612) 222 8989</p>\n                <p>\n                  <i class=\"material-icons\">email</i> yourmail@domain.com</p>\n                <p>\n                  <i class=\"material-icons\">cake</i> 18th June 1990\n                </p>\n                <p>\n                </p>\n                <p>\n                  <i class=\"material-icons\">airplanemode_active</i> BAR - AUS\n                </p>\n                <p>\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--card widgets end-->\n\n      <!--work collections start-->\n      <div id=\"work-collections\">\n        <div class=\"row\">\n          <div class=\"col s12 m12 l6\">\n            <ul id=\"projects-collection\" class=\"collection z-depth-1\">\n              <li class=\"collection-item avatar\">\n                <i class=\"material-icons cyan circle\">card_travel</i>\n                <h6 class=\"collection-header m-0\">Projects</h6>\n                <p>Your Favorites</p>\n              </li>\n              <li class=\"collection-item\">\n                <div class=\"row\">\n                  <div class=\"col s9\">\n                    <p class=\"collections-title\">Web App</p>\n                    <p class=\"collections-content\">AEC Company</p>\n                  </div>\n                  <div class=\"col s3\">\n                    <span class=\"task-cat cyan\">Development</span>\n                  </div>\n                </div>\n              </li>\n              <li class=\"collection-item\">\n                <div class=\"row\">\n                  <div class=\"col s9\">\n                    <p class=\"collections-title\">Mobile App for Social</p>\n                    <p class=\"collections-content\">iSocial App</p>\n                  </div>\n                  <div class=\"col s3\">\n                    <span class=\"task-cat red accent-2\">UI/UX</span>\n                  </div>\n                </div>\n              </li>\n              <li class=\"collection-item\">\n                <div class=\"row\">\n                  <div class=\"col s9\">\n                    <p class=\"collections-title\">Website</p>\n                    <p class=\"collections-content\">MediTab</p>\n                  </div>\n                  <div class=\"col s3\">\n                    <span class=\"task-cat teal accent-4\">Marketing</span>\n                  </div>\n                </div>\n              </li>\n              <li class=\"collection-item\">\n                <div class=\"row\">\n                  <div class=\"col s9\">\n                    <p class=\"collections-title\">AdWord campaign</p>\n                    <p class=\"collections-content\">True Line</p>\n                  </div>\n                  <div class=\"col s3\">\n                    <span class=\"task-cat deep-orange accent-2\">SEO</span>\n                  </div>\n                </div>\n              </li>\n            </ul>\n          </div>\n          <div class=\"col s12 m12 l6\">\n            <ul id=\"issues-collection\" class=\"collection z-depth-1\">\n              <li class=\"collection-item avatar\">\n                <i class=\"material-icons red accent-2 circle\">bug_report</i>\n                <h6 class=\"collection-header m-0\">Issues</h6>\n                <p>Assigned to you</p>\n              </li>\n              <li class=\"collection-item\">\n                <div class=\"row\">\n                  <div class=\"col s7\">\n                    <p class=\"collections-title\">\n                      <strong>#102</strong> Home Page</p>\n                    <p class=\"collections-content\">Web Project</p>\n                  </div>\n                  <div class=\"col s2\">\n                    <span class=\"task-cat deep-orange accent-2\">P1</span>\n                  </div>\n                  <div class=\"col s3\">\n                    <div class=\"progress\">\n                      <div class=\"determinate\" style=\"width: 70%\"></div>\n                    </div>\n                  </div>\n                </div>\n              </li>\n              <li class=\"collection-item\">\n                <div class=\"row\">\n                  <div class=\"col s7\">\n                    <p class=\"collections-title\">\n                      <strong>#108</strong> API Fix</p>\n                    <p class=\"collections-content\">API Project </p>\n                  </div>\n                  <div class=\"col s2\">\n                    <span class=\"task-cat cyan\">P2</span>\n                  </div>\n                  <div class=\"col s3\">\n                    <div class=\"progress\">\n                      <div class=\"determinate\" style=\"width: 40%\"></div>\n                    </div>\n                  </div>\n                </div>\n              </li>\n              <li class=\"collection-item\">\n                <div class=\"row\">\n                  <div class=\"col s7\">\n                    <p class=\"collections-title\">\n                      <strong>#205</strong> Profile page css</p>\n                    <p class=\"collections-content\">New Project </p>\n                  </div>\n                  <div class=\"col s2\">\n                    <span class=\"task-cat red accent-2\">P3</span>\n                  </div>\n                  <div class=\"col s3\">\n                    <div class=\"progress\">\n                      <div class=\"determinate\" style=\"width: 95%\"></div>\n                    </div>\n                  </div>\n                </div>\n              </li>\n              <li class=\"collection-item\">\n                <div class=\"row\">\n                  <div class=\"col s7\">\n                    <p class=\"collections-title\">\n                      <strong>#188</strong> SAP Changes</p>\n                    <p class=\"collections-content\">SAP Project</p>\n                  </div>\n                  <div class=\"col s2\">\n                    <span class=\"task-cat teal accent-4\">P1</span>\n                  </div>\n                  <div class=\"col s3\">\n                    <div class=\"progress\">\n                      <div class=\"determinate\" style=\"width: 10%\"></div>\n                    </div>\n                  </div>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <!--work collections end-->\n\n      <!-- //////////////////////////////////////////////////////////////////////////// -->\n    </div>\n    <!--end container-->\n  </section>\n"

/***/ }),

/***/ "./src/app/seccion/seccion.component.ts":
/*!**********************************************!*\
  !*** ./src/app/seccion/seccion.component.ts ***!
  \**********************************************/
/*! exports provided: SeccionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeccionComponent", function() { return SeccionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SeccionComponent = /** @class */ (function () {
    function SeccionComponent() {
    }
    SeccionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'seccion-app',
            template: __webpack_require__(/*! ./seccion.component.html */ "./src/app/seccion/seccion.component.html")
        })
    ], SeccionComponent);
    return SeccionComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/bragove/NetBeansProjects/repositorioAngularSpring/web/app-src/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map