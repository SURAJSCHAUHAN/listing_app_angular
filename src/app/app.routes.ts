import { Routes } from '@angular/router';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { ListingDetailsPageComponent } from './listing-details-page/listing-details-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { MyListingPageComponent } from './my-listing-page/my-listing-page.component';
import { NewListingPageComponent } from './new-listing-page/new-listing-page.component';
import { EditListingPageComponent } from './edit-listing-page/edit-listing-page.component';

export const routes: Routes = [
    { 
        path:'', 
        redirectTo:'/listing', 
        pathMatch:"full"
    },
    { 
        path:'listing', 
        component:ListingPageComponent, 
        pathMatch:"full"
    },
    { 
        path:'listing/:id', 
        component:ListingDetailsPageComponent, 
        pathMatch:"full"
    },
    { 
        path:'contact/:id', 
        component:ContactPageComponent, 
        pathMatch:"full"
    },
    { 
        path:'edit-listing/:id', 
        component:EditListingPageComponent, 
        pathMatch:"full"
    },
    { 
        path:'my-listing', 
        component:MyListingPageComponent, 
        pathMatch:"full"
    },
    { 
        path:'new-listing', 
        component:NewListingPageComponent, 
        pathMatch:"full"
    },
];
