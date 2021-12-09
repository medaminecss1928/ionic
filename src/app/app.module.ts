import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
const firebaseConfig = {
  apiKey: "AIzaSyCR4gIs9-Y39Cj1z8rpdc8dFuHegkvAK3Q",
  authDomain: "todo-57835.firebaseapp.com",
  projectId: "todo-57835",
  storageBucket: "todo-57835.appspot.com",
  messagingSenderId: "318042067079",
  appId: "1:318042067079:web:11995752086f98a2dd6822",
  measurementId: "${config.measurementId}"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
