import { Component, OnInit } from '@angular/core';
import { WindowService } from '../../service/window/window.service';


import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { environment } from '../../../environments/environment';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-phone-login',
  templateUrl: './phone-login.component.html',
  styleUrls: ['./phone-login.component.css']
})

export class PhoneLoginComponent implements OnInit {

  // Variables
  windowRef: any;
  verificationCode: string;
  firebase: any;
  disableOTPSendButton = true;
  confirmationResult: any;
  user: any;


  code = this.formBuilder.group({
    codeVerification: ['', [Validators.required, Validators.minLength(6)]],
  });

  registerForm = this.formBuilder.group({
    phone_number: ['+51', [Validators.required, Validators.minLength(12)]],
  });

  constructor(private window: WindowService, private afAuth: AngularFireAuth, private formBuilder: FormBuilder) {
    this.firebase = environment.firebase;
    firebase.initializeApp(this.firebase);
  }

  ngOnInit(): void {

    this.windowRef = this.window.windowRef;
    console.log(this.windowRef);
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      size: 'normal',
      callback: (response) => {
        console.log(response);
        this.disableOTPSendButton = false;
      }
    });
    this.windowRef.recaptchaVerifier.render();
  }

  sendOTP(): any {
    const appVerifier = this.windowRef.recaptchaVerifier;
    const phoneNumber = this.registerForm.get('phone_number').value;

    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then( result => {
      console.log(result);
      console.log(this.windowRef);
      this.windowRef.confirmationResult = result;
    }).catch(error => console.log(error));
  }

  verifyOTP(): any {

    console.log(this.code.get('codeVerification').value);

    this.windowRef.confirmationResult
                  .confirm(this.code.get('codeVerification').value)
                  .then( (result: any) => {
                    this.user = result.user;
                    console.log(result);
                  })
                  .catch((error: any) => console.log(error, 'Codigo incorrecto'));
  }

}
