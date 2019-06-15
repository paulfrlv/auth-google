import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { initializeApp } from 'firebase';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyD-rBgWX3obmek8wvFJ77l6z_DwL09806s",
        authDomain: "user-auth-4524.firebaseapp.com",
        databaseURL: "https://user-auth-4524.firebaseio.com",
        projectId: "user-auth-4524",
        storageBucket: "user-auth-4524.appspot.com",
        messagingSenderId: "775649407337"
      }),
      AngularFireAuthModule,
      AngularFireDatabaseModule,
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
