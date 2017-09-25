import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/index'
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapOptions,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';

import { HomePage } from '../pages/index';
import { HelloIonicPage } from '../pages/index';
import { ProfilePage } from '../pages/index';
import { ProfesionalsPage } from '../pages/index';

import { ProfileService } from '../app/app.services';
import { ProfesionalsService } from '../app/app.services';
import { ApiService } from '../api/api.services';



@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    HelloIonicPage,
    ProfilePage,
    ProfesionalsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    FormsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    HelloIonicPage,
    ProfilePage,
    ProfesionalsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ProfileService,
    ProfesionalsService,
    ApiService,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
