import { Component, OnInit } from '@angular/core';
import { ListingDataFormComponent } from "../listing-data-form/listing-data-form.component";
import { Router, ActivatedRoute } from '@angular/router';
import { Listing } from '../types';
import { ListingService } from '../listing.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-listing-page',
  standalone: true,
  imports: [ListingDataFormComponent,CommonModule],
  templateUrl: './edit-listing-page.component.html',
  styleUrl: './edit-listing-page.component.css'
})
export class EditListingPageComponent implements OnInit{

  listing!:Listing;

  constructor(private router: Router, private route: ActivatedRoute, private listingService:ListingService){}

  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id');
    if(id){
      this.listingService.getListingById(id)
          .subscribe(listing=>this.listing=listing);
    }
  }

  onSubmit({name,description,price}:Listing):void{
    this.listingService.editListing(this.listing.id,name,description,price)
        .subscribe(()=>this.router.navigateByUrl('/my-listing'));
    
  }
}
