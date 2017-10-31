webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <app-navbar></app-navbar>\r\n  <app-one-page></app-one-page>\r\n  <app-bottom></app-bottom>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__one_page_one_page_component__ = __webpack_require__("../../../../../src/app/one-page/one-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bottom_bottom_component__ = __webpack_require__("../../../../../src/app/bottom/bottom.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_4__one_page_one_page_component__["a" /* OnePageComponent */],
            __WEBPACK_IMPORTED_MODULE_5__bottom_bottom_component__["a" /* BottomComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/bottom/bottom.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bottom-div{\r\n    padding-top: 10%;\r\n    background-color: #263238;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bottom/bottom.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bottom-div\">\r\n  <a></a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/bottom/bottom.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BottomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BottomComponent = (function () {
    function BottomComponent() {
    }
    BottomComponent.prototype.ngOnInit = function () {
    };
    return BottomComponent;
}());
BottomComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-bottom',
        template: __webpack_require__("../../../../../src/app/bottom/bottom.component.html"),
        styles: [__webpack_require__("../../../../../src/app/bottom/bottom.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BottomComponent);

//# sourceMappingURL=bottom.component.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.navbar{\r\n    width: 100%;\r\n    overflow: hidden;\r\n    position: fixed; /* Set the navbar to fixed position */\r\n    background-color: #263238;\r\n    text-transform: uppercase;\r\n    \r\n}\r\n\r\n.nav-div{\r\n    padding-bottom: 2%;\r\n    padding-left: 5%;\r\n    padding-top: 2%;\r\n    background-color: #263238;\r\n}\r\n\r\n\r\n.left-nav-a{\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    font-size: 25px;\r\n    color: #fff;\r\n\r\n}\r\n\r\n.left-nav-a:hover{\r\n    color: #27ae60;\r\n}\r\n\r\n.left-nav-a:link{\r\n    color: none;\r\n    text-decoration: none;\r\n}\r\n.left-nav-a:visited{\r\n    color: none;\r\n    text-decoration: none;\r\n}\r\n\r\n.right-nav-a{\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    padding-right: 5%;\r\n    float: right;\r\n    font-size: 25px;\r\n    color: #fff;\r\n    \r\n}\r\n\r\n.right-nav-a:hover{\r\n    color: #27ae60;\r\n}\r\n\r\n.right-nav-a:link{\r\n    color: none;\r\n    text-decoration: none;\r\n}\r\n.right-nav-a:visited{\r\n    color: none;\r\n    text-decoration: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\">\r\n  <div class=\"nav-div\">\r\n    <a class=\"left-nav-a\" href=\"#topo\">Daniel</a>\r\n    <a class=\"right-nav-a\" href=\"#contato\">Contato</a>\r\n    <a class=\"right-nav-a\" href=\"#ferramentas\">Ferramentas</a>\r\n    <a class=\"right-nav-a\" href=\"#trabalhos\">Trabalhos</a>\r\n    <a class=\"right-nav-a\" href=\"#sobre\">Sobre</a>\r\n  </div>\r\n</nav>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/one-page/one-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".head{\r\n    background-color: #fff;\r\n    padding-top: 2%;\r\n    padding-bottom: 2%;\r\n}\r\n\r\n.sobre{\r\n    margin-bottom: 2%;\r\n    margin-top: 2%;\r\n    margin-left: 2%;\r\n    margin-right: 2%;\r\n    border-radius: 15px;\r\n    background-color: #27ae60;\r\n    padding-top: 2%;\r\n    padding-bottom: 2%;\r\n    color: #fff;\r\n    text-transform: uppercase;\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n}\r\n\r\n\r\n.my-image{\r\n\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    height: 15%;\r\n    width: 15%;\r\n    \r\n}\r\n\r\np{\r\n    text-align: center;\r\n    font-size: 30px;\r\n}\r\n\r\n.ferramentas{\r\n    background-color: #27ae60;\r\n    padding-top: 2%;\r\n    padding-bottom: 2%;\r\n}\r\n\r\n.trabalhos{\r\n    background-color: #fff ;\r\n    padding-top: 2%;\r\n    padding-bottom: 2%;\r\n}\r\n\r\n\r\n.contato{\r\n    background-color: #ffff;\r\n    padding-top: 2%;\r\n    padding-bottom: 2%;\r\n}\r\n\r\n\r\nh1{\r\n    font-size: 50px;\r\n    text-align: center;\r\n}\r\n\r\n.button-top{\r\n    \r\n    background-color: transparent;\r\n    border: none;\r\n    border-radius: 50%;\r\n    position:fixed;\r\n    left: 93%;\r\n    top: 88%;\r\n    float:right;\r\n    display:block;\r\n    width:80px;\r\n    height:80px;\r\n\r\n}\r\n\r\n.workfit{\r\n    width: 20%;\r\n    height: 20%;\r\n    padding-left: 2%;\r\n    padding-bottom: 2%;\r\n    padding-right: 2%;\r\n    padding-top: 2%;\r\n    border-radius: 50px;\r\n}\r\n\r\n.workfit:hover{\r\n    -webkit-filter: contrast(70%);\r\n            filter: contrast(70%);\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/one-page/one-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"topo\" class=\"head\">\r\n        \r\n    <h1></h1>\r\n        \r\n</div>\r\n\r\n<button class=\"button-top\"><img width=\"80px\" height=\"80px\" src=\"https://icon-icons.com/icons2/936/PNG/512/arrow-up-on-a-black-circle-background_icon-icons.com_73668.png\"/></button>\r\n\r\n<div id=\"sobre\" class=\"sobre\">\r\n    <img class=\"my-image\" src=\"https://goo.gl/5XxkFP\" />\r\n    <p>Daniel Sávio Lima Secundino<p>\r\n    <p>Desenvolvedor Web - Mobile - Designer<p>\r\n</div>\r\n\r\n<div id=\"trabalhos\" class=\"trabalhos\">\r\n    \r\n    <img class=\"workfit\" src=\"https://uploaddeimagens.com.br/images/001/147/358/full/Sem_T%C3%ADtulo-3.jpg?1508866477\" />\r\n    \r\n</div>\r\n\r\n<div id=\"ferramentas\" class=\"ferramentas\">\r\n        \r\n    <<h1>Ferramentas</h1>\r\n\r\n</div>\r\n\r\n\r\n<div id=\"contato\" class=\"contato\">\r\n                \r\n    <h1>Contato</h1>\r\n                \r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/one-page/one-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OnePageComponent = (function () {
    function OnePageComponent() {
    }
    OnePageComponent.prototype.ngOnInit = function () {
    };
    return OnePageComponent;
}());
OnePageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-one-page',
        template: __webpack_require__("../../../../../src/app/one-page/one-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/one-page/one-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], OnePageComponent);

//# sourceMappingURL=one-page.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map