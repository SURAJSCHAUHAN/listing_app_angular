import { Component, OnInit } from '@angular/core';
import { ListingDataFormComponent } from '../listing-data-form/listing-data-form.component';
import { Router } from '@angular/router';
import { ListingService } from '../listing.service';
import { Listing } from '../types';

@Component({
  selector: 'app-new-listing-page',
  standalone: true,
  imports: [ListingDataFormComponent],
  templateUrl: './new-listing-page.component.html',
  styleUrl: './new-listing-page.component.css'
})
export class NewListingPageComponent{

  constructor(private router: Router, private listingService:ListingService){}

  onSubmit({name,description,price}:Listing ):void{
    alert('Creating New List...');
    this.listingService.createListing(name, description, price)
      .subscribe(()=>this.router.navigateByUrl('/my-listing'));
  }

}
