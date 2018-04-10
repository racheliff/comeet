webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "body{\r\n  margin: 0px;\r\n  position: relative;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-weather></app-weather>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__weather_weather_component__ = __webpack_require__("./src/app/weather/weather.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__loader_loader_component__ = __webpack_require__("./src/app/loader/loader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__weather_weather_service__ = __webpack_require__("./src/app/weather/weather.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__weather_weather_component__["b" /* WeatherComponent */],
                __WEBPACK_IMPORTED_MODULE_6__loader_loader_component__["a" /* LoaderComponent */],
                __WEBPACK_IMPORTED_MODULE_5__weather_weather_component__["a" /* KeysPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__weather_weather_service__["a" /* WeatherService */], __WEBPACK_IMPORTED_MODULE_5__weather_weather_component__["a" /* KeysPipe */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/loader/loader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper flex-center\">\n  <div class=\"container\" >\n    <img\n           src=\"https://racheliff.github.io/comeet/assets/globus.jpg\"/>\n\n\n      <div class=\"container-dot dot-a\">\n        <div class=\"dot\"></div>\n      </div>\n\n      <div class=\"container-dot dot-b\">\n        <div class=\"dot\"></div>\n      </div>\n      <div class=\"container-dot dot-c\">\n        <div class=\"dot\"></div>\n      </div>\n\n      <div class=\"container-dot dot-d\">\n        <div class=\"dot\"></div>\n      </div>\n\n      <div class=\"container-dot dot-e\">\n        <div class=\"dot\"></div>\n      </div>\n\n      <div class=\"container-dot dot-f\">\n        <div class=\"dot\"></div>\n      </div>\n      <div class=\"container-dot dot-g\">\n        <div class=\"dot\"></div>\n      </div>\n\n      <div class=\"container-dot dot-h\">\n        <div class=\"dot\"></div>\n      </div>\n\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/loader/loader.component.scss":
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  width: 100%;\n  height: 90vh;\n  position: absolute;\n  top: 0px;\n  left: 0px; }\n\n.flex-center {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.container {\n  width: 10em;\n  height: 10em;\n  position: relative;\n  border-radius: 50%; }\n\n.container img {\n    width: 10em;\n    height: 10em; }\n\n.container .dot {\n    background: #1f0a8b;\n    content: \"\";\n    border-radius: 0.5em;\n    margin-top: -0.5em;\n    margin-left: auto;\n    margin-right: auto;\n    width: 1em;\n    height: 1em;\n    -webkit-animation-name: bounce;\n            animation-name: bounce;\n    -webkit-animation-duration: 3000ms;\n            animation-duration: 3000ms;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n    -webkit-transition-timing-function: cubic-bezier(0, 0.99, 0, 0.1);\n            transition-timing-function: cubic-bezier(0, 0.99, 0, 0.1); }\n\n.container-dot {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0; }\n\n.dot-a {\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg); }\n\n.dot-a .dot {\n    -webkit-animation-delay: 0ms;\n            animation-delay: 0ms; }\n\n.dot-b {\n  -webkit-transform: rotate(-22.5deg);\n          transform: rotate(-22.5deg); }\n\n.dot-b .dot {\n    -webkit-animation-delay: -187.5ms;\n            animation-delay: -187.5ms; }\n\n.dot-c {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg); }\n\n.dot-c .dot {\n    -webkit-animation-delay: -375ms;\n            animation-delay: -375ms; }\n\n.dot-d {\n  -webkit-transform: rotate(-67.5deg);\n          transform: rotate(-67.5deg); }\n\n.dot-d .dot {\n    -webkit-animation-delay: -562.5ms;\n            animation-delay: -562.5ms; }\n\n.dot-e {\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg); }\n\n.dot-e .dot {\n    -webkit-animation-delay: -750ms;\n            animation-delay: -750ms; }\n\n.dot-f {\n  -webkit-transform: rotate(-112.5deg);\n          transform: rotate(-112.5deg); }\n\n.dot-f .dot {\n    -webkit-animation-delay: -937.5ms;\n            animation-delay: -937.5ms; }\n\n.dot-g {\n  -webkit-transform: rotate(-135deg);\n          transform: rotate(-135deg); }\n\n.dot-g .dot {\n    -webkit-animation-delay: -1125ms;\n            animation-delay: -1125ms; }\n\n.dot-h {\n  -webkit-transform: rotate(-157.5deg);\n          transform: rotate(-157.5deg); }\n\n.dot-h .dot {\n    -webkit-animation-delay: -1312.5ms;\n            animation-delay: -1312.5ms; }\n\n@-webkit-keyframes bounce {\n  0%, 100% {\n    -webkit-transform: translatey(0);\n            transform: translatey(0); }\n  50% {\n    -webkit-transform: translatey(10em);\n            transform: translatey(10em); } }\n\n@keyframes bounce {\n  0%, 100% {\n    -webkit-transform: translatey(0);\n            transform: translatey(0); }\n  50% {\n    -webkit-transform: translatey(10em);\n            transform: translatey(10em); } }\n"

/***/ }),

/***/ "./src/app/loader/loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    LoaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-loader',
            template: __webpack_require__("./src/app/loader/loader.component.html"),
            styles: [__webpack_require__("./src/app/loader/loader.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/weather/stateWeater.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateWeather; });
var StateWeather = /** @class */ (function () {
    function StateWeather(name, temp, humidity) {
        this.name = name;
        this.temp = temp;
        this.humidity = humidity;
    }
    StateWeather.prototype.getDifference = function (requiredTemp, requiredHumidity) {
        return ((Math.abs(requiredTemp - this.temp) + Math.abs(requiredHumidity - this.humidity)).toFixed(1));
    };
    return StateWeather;
}());



/***/ }),

/***/ "./src/app/weather/weather.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\r\n  Where's the best weather on earth right now?\r\n</h1>\r\n<div class=\"gender\">\r\n  For:\r\n  <label class=\"radio inline\">\r\n    <input type=\"radio\" name=\"sex\" value=\"male\" checked (change)=\"getWeatherWinnersList()\">\r\n    <span> Male </span>\r\n  </label>\r\n  <label class=\"radio inline\">\r\n    <input type=\"radio\" name=\"sex\" value=\"female\" (change)=\"getWeatherWinnersList(false)\">\r\n    <span>Female </span>\r\n  </label>\r\n</div>\r\n<app-loader *ngIf=\"!statesLoaded\"></app-loader>\r\n<h3 *ngIf=\"statesLoaded\">The ideal temperature is: temperature - {{requiredTemp}}{{signUnits}}, humidity - {{requiredHumidity}}%</h3>\r\n<ol *ngIf=\"statesLoaded\" class=\"rounded-list\">\r\n  <li *ngFor=\"let weatherScore of weatherScoreList | keys\">\r\n    <a href=\"\">Deviation of ~{{weatherScore.key}}:</a>\r\n    <ol class=\"inline-list\">\r\n      <li *ngFor=\"let state of weatherScore.value\">\r\n        <a href=\"\">{{state.name}} (temp: {{state.temp}}{{signUnits}}, humidity: {{state.humidity}}%)</a>\r\n      </li>\r\n    </ol>\r\n  </li>\r\n</ol>\r\n"

/***/ }),

/***/ "./src/app/weather/weather.component.scss":
/***/ (function(module, exports) {

module.exports = "\n@import url(http://fonts.googleapis.com/css?family=Merriweather+Sans);\n/*--list--*/\nh1, h3 {\n  text-align: center;\n  color: rgba(224, 158, 36, 0.62); }\nol {\n  counter-reset: li;\n  list-style: none;\n  font: 15px 'Merriweather Sans', 'lucida sans', sans-serif;\n  padding: 0;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n  width: 500px;\n  margin: 0 auto; }\nol ol {\n  margin-left: 2em; }\n.rounded-list a {\n  position: relative;\n  display: block;\n  padding: .4em .4em .4em 2em;\n  margin: .5em 0;\n  background: #ddd;\n  color: #444;\n  text-decoration: none;\n  border-radius: .3em;\n  -webkit-transition: all .5s ease-out;\n  transition: all .5s ease-out; }\n.rounded-list a:hover {\n  background: #fafafa; }\n.rounded-list a:hover:before {\n  transform: rotate(360deg);\n  -webkit-transform: rotate(360deg); }\n.rounded-list a:before {\n  content: counter(li);\n  counter-increment: li;\n  position: absolute;\n  left: -1.3em;\n  top: 50%;\n  margin-top: -1.3em;\n  background: rgba(49, 109, 160, 0.47);\n  height: 2em;\n  width: 2em;\n  line-height: 2em;\n  border: .3em solid #fff;\n  text-align: center;\n  font-weight: bold;\n  border-radius: 2em;\n  -webkit-transition: all .3s ease-out;\n  transition: all .3s ease-out; }\n.inline-list a:before {\n  content: '*';\n  line-height: 2.4em; }\n/*--radio button--*/\n.gender {\n  margin: 25px;\n  text-align: center;\n  color: rgba(224, 158, 36, 0.62); }\n.inline {\n  display: inline-block; }\n.inline + .inline {\n  margin-left: 10px; }\n.radio {\n  color: #999;\n  font-size: 15px;\n  position: relative; }\n.radio span {\n  position: relative;\n  padding-left: 20px; }\n.radio span:after {\n  content: '';\n  width: 15px;\n  height: 15px;\n  border: 3px solid;\n  position: absolute;\n  left: 0;\n  top: 1px;\n  border-radius: 100%;\n  -ms-border-radius: 100%;\n  -moz-border-radius: 100%;\n  -webkit-border-radius: 100%;\n  box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box; }\n.radio input[type=\"radio\"] {\n  cursor: pointer;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\"; }\n.radio input[type=\"radio\"]:checked + span {\n  color: rgba(49, 109, 160, 0.47); }\n.radio input[type=\"radio\"]:checked + span:before {\n  content: '';\n  width: 5px;\n  height: 5px;\n  position: absolute;\n  background: rgba(49, 109, 160, 0.47);\n  left: 5px;\n  top: 6px;\n  border-radius: 100%;\n  -ms-border-radius: 100%;\n  -moz-border-radius: 100%;\n  -webkit-border-radius: 100%; }\n"

/***/ }),

/***/ "./src/app/weather/weather.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WeatherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__weather_service__ = __webpack_require__("./src/app/weather/weather.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// pipe for over on key value pair in object
var KeysPipe = /** @class */ (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push({ key: key, value: value[key] });
        }
        return keys;
    };
    KeysPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Pipe */])({ name: 'keys' })
    ], KeysPipe);
    return KeysPipe;
}());

var WeatherComponent = /** @class */ (function () {
    function WeatherComponent(weatherService) {
        this.weatherService = weatherService;
        this.statesLoaded = false;
    }
    WeatherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.weatherService.getConfig().subscribe(function () {
            _this.signUnits = _this.weatherService.config.sign_units;
            _this.weatherService.getStatesWeatherList()
                .subscribe(function () {
                _this.getWeatherWinnersList();
            });
        });
    };
    WeatherComponent.prototype.getWeatherWinnersList = function (forMen) {
        var _this = this;
        if (forMen === void 0) { forMen = true; }
        // function called after the current StatesWeatherList loaded
        var calcWeatherFunction = function () {
            _this.statesLoaded = false;
            _this.calcApproximationWeather(forMen);
            _this.statesLoaded = true;
        };
        // check if the state weather list is exist and still relevant (the period defined by a config parameter)
        if (this.weatherService.isExistAndRelevant()) {
            calcWeatherFunction();
        }
        else {
            this.weatherService.getStatesWeatherList().subscribe(calcWeatherFunction);
        }
    };
    // takes the first N parameters in a given object
    WeatherComponent.prototype.firstN = function (obj, n) {
        return Object.keys(obj) // get the keys out
            .sort() // this will ensure consistent ordering of what you will get back.
            .slice(0, n) // get the first N
            .reduce(function (memo, current) {
            memo[current] = obj[current];
            return memo;
        }, {});
    };
    // calculation the winner states list by grouping it by the deviation of the required temp and humidity
    WeatherComponent.prototype.calcApproximationWeather = function (forMen) {
        var _this = this;
        if (forMen === void 0) { forMen = true; }
        this.requiredTemp = forMen ? this.weatherService.config.required_temperature : this.weatherService.config.required_temperature + 1;
        this.requiredHumidity = this.weatherService.config.required_humidity;
        // group the list by the difference - minimum difference is the winner
        this.weatherScoreList = __WEBPACK_IMPORTED_MODULE_2_lodash__["groupBy"](this.weatherService.currentWeatherStatesList, function (state) {
            return state.getDifference(_this.requiredTemp, _this.requiredHumidity);
        });
        // takes the first N winners
        this.weatherScoreList = this.firstN(this.weatherScoreList, +this.weatherService.config.approximation_result_count);
    };
    WeatherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-weather',
            template: __webpack_require__("./src/app/weather/weather.component.html"),
            styles: [__webpack_require__("./src/app/weather/weather.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__weather_service__["a" /* WeatherService */]])
    ], WeatherComponent);
    return WeatherComponent;
}());



/***/ }),

/***/ "./src/app/weather/weather.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stateWeater__ = __webpack_require__("./src/app/weather/stateWeater.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WeatherService = /** @class */ (function () {
    function WeatherService(http) {
        this.http = http;
    }
    WeatherService.prototype.getConfig = function () {
        var _this = this;
        return this.http.get('./assets/config.json')
            .map(function (res) {
            _this.config = res.json();
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    WeatherService.prototype.getStatesWeatherList = function () {
        var _this = this;
        return this.http.get(this.config.url + "?bbox=" + this.config.box_coordinates + "&units=" + this.config.units + "&appid=" + this.config.appId)
            .map(function (res) {
            _this.timeStamp = Date.now();
            _this.currentWeatherStatesList = __WEBPACK_IMPORTED_MODULE_6_lodash__["map"](res.json().list, function (city) {
                return new __WEBPACK_IMPORTED_MODULE_3__stateWeater__["a" /* StateWeather */](city.name, city.main.temp, city.main.humidity);
            });
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    WeatherService.prototype.isExistAndRelevant = function () {
        return this.timeStamp && Date.now() - this.timeStamp < (this.config.hours_refreshing_data * 60 * 60 * 1000);
    };
    WeatherService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], WeatherService);
    return WeatherService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map