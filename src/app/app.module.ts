import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireAuthModule} from "angularfire2/auth";

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyD8NJOSMWgG2tZsqCs23DLWsQLlJ3R7y-0",
    authDomain: "firetest-55e2b.firebaseapp.com",
    databaseURL: "https://firetest-55e2b.firebaseio.com",
    projectId: "firetest-55e2b",
    storageBucket: "",
    messagingSenderId: "1062571379734"
  }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
