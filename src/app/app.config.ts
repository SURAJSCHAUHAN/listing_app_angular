import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';


const firebaseConfig = {
  apiKey: "AIzaSyCW5O6lZJZrxu1v_aXVQskij6lHTqfD3U4",
  authDomain: "buy-and-sell-6943d.firebaseapp.com",
  projectId: "buy-and-sell-6943d",
  storageBucket: "buy-and-sell-6943d.firebasestorage.app",
  messagingSenderId: "593310627801",
  appId: "1:593310627801:web:a1d999b10eda7e3a6c4bc8",
  measurementId: "G-RTN1RC431Z"
};



export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), 
    provideClientHydration(),
    provideFirebaseApp(()=>initializeApp(firebaseConfig)),
    provideAuth(()=>getAuth())
  ]
};
