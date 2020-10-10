// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyBGT3VH-pGoTEtY9xVAyS0z76Dm08o_EIk",
    authDomain: "randomstore-28366.firebaseapp.com",
    databaseURL: "https://randomstore-28366.firebaseio.com",
    projectId: "randomstore-28366",
    storageBucket: "randomstore-28366.appspot.com",
    messagingSenderId: "212371467067",
    appId: "1:212371467067:web:87b541a03828c8f697251e",
    measurementId: "G-G9M2QZJVZH",
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
import * as firebase from 'firebase';
