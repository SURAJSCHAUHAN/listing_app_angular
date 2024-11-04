import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { ListingService } from '../listing.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listing-page',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './listing-page.component.html',
  styleUrl: './listing-page.component.css'
})
export class ListingPageComponent implements OnInit {
 listing:Listing[]=[];

 constructor(private listingService:ListingService){}

 ngOnInit(): void {
   this.listingService.getListing().subscribe(listing=>this.listing=listing);
 }

}
