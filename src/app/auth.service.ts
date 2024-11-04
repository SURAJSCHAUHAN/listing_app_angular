import { Injectable } from '@angular/core';
import { Auth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, User } from '@angular/fire/auth';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$: Observable<User | null> = this.currentUserSubject.asObservable();

  constructor(private auth:Auth) {
    onAuthStateChanged(this.auth, user => {
      this.currentUserSubject.next(user); // Update currentUser with the logged-in user or null if logged out
    });
   }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  login(){
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  logout(){
    return signOut(this.auth);
  }

}
