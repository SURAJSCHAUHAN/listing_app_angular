import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Listing } from '../types';

@Component({
  selector: 'app-listing-data-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './listing-data-form.component.html',
  styleUrl: './listing-data-form.component.css'
})
export class ListingDataFormComponent implements OnInit {

  @Input() buttonText!:string;
  @Input() currentName:string='';
  @Input() currentDescription:string='';
  @Input() currentPrice!:number;


  name!:string;
  description!:string;
  price!:number;

  @Output() OnSubmit= new EventEmitter<Listing>();

  constructor(private router: Router,){}

  ngOnInit(): void {
    this.name=this.currentName;
    this.description=this.currentDescription;
    this.price=this.currentPrice;
  }

  OnButtonClick():void{
    this.OnSubmit.emit({
      id:'',
      name:this.name,
      description:this.description,
      price:this.price,
      views:0
    })
  }
}
