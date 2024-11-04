import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Listing } from '../types';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListingService } from '../listing.service';

@Component({
  selector: 'app-listing-details-page',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './listing-details-page.component.html',
  styleUrl: './listing-details-page.component.css'
})
export class ListingDetailsPageComponent implements OnInit {
  isLoading:boolean = true;

  listing!:Listing;

  constructor( private route: ActivatedRoute, private listingService: ListingService,){
  }

  ngOnInit(): void {
    const id= this.route.snapshot.paramMap.get('id');
    if(id){
      this.listingService.getListingById(id)
        .subscribe(listing=>{
          this.listing=listing;
          this.isLoading=false;
        });
      this.listingService.addViewsToListing(id)
          .subscribe(()=>console.log("Views Updated!"))
    }
  }
}
