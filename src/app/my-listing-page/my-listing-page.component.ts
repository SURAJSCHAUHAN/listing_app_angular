import { Component, OnInit } from '@angular/core';
import { ListingService } from '../listing.service';
import { Listing } from '../types';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-my-listing-page',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './my-listing-page.component.html',
  styleUrl: './my-listing-page.component.css'
})
export class MyListingPageComponent implements OnInit {

  listing:Listing[]=[];

  constructor(private listingService:ListingService){

  }

  ngOnInit(): void {
    this.listingService.getListingForUser()
        .subscribe(listing=> this.listing = listing)
  }

  onDeleteClicked(listingId: string):void{
    this.listingService.deleteListing(listingId)
        .subscribe(()=>{
          this.listing = this.listing.filter(listing=>listing.id!==listingId);
        })
  }

}
