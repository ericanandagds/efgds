import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import * as firebase from "firebase";
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar, storage) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.storage = storage;
        this.initializeApp();
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
        // Your web app's Firebase configuration
        var firebaseConfig = {
            apiKey: "AIzaSyCZTTWlevEOfsOsMRVg4c3CmOs23YQ6mh0",
            authDomain: "efgds-751ef.firebaseapp.com",
            databaseURL: "https://efgds-751ef.firebaseio.com",
            projectId: "efgds-751ef",
            storageBucket: "efgds-751ef.appspot.com",
            messagingSenderId: "583502114647",
            appId: "1:583502114647:web:1af28b9b637de8b7"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: 'app.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [Platform,
            SplashScreen,
            StatusBar,
            Storage])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map