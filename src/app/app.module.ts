import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhoneLoginComponent } from './components/phone-login/phone-login.component';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import {AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    PhoneLoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
