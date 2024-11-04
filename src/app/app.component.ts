import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { User } from '@angular/fire/auth';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,NavbarComponent,FormsModule],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{
  title = 'buy-n-sell';

  email: string = '';
  password: string = '';

  currentUser: User | null = null;

  constructor(public authService: AuthService){}

  ngOnInit(): void{
    this.authService.currentUser$.subscribe(user => {
    this.currentUser = user;
    });
  }  


  signInClicked():void{
    this.authService.login()
    .then(response => console.log('Login successful:', response))
      .catch(error => console.error('Error logging in:', error));
  }

  signOutClicked():void{
    this.authService.logout()
     .then(() => console.log('Logout successful'))
       .catch(error => console.error('Error logging out:', error));
  }
}
