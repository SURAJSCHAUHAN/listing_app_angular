import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListingService } from '../listing.service';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent implements OnInit{

  email:string='';
  message: string='';
  listing:Listing | undefined;

  constructor(private route:ActivatedRoute, private router:Router, private listingService:ListingService){}

  ngOnInit(): void {
    const id= this.route.snapshot.paramMap.get('id');
    if(id){
      this.listingService.getListingById(id)
          .subscribe(listing=>{
            this.listing=listing;
            this.message=`Hi, I'm interested in your ${this.listing?.name.toLowerCase()}!`;
          })
    }
  }

  sendMessage():void{
    alert('Your message has been sent!');
    this.router.navigateByUrl('/listing');
  }

}
