import { Injectable } from '@angular/core';
import { Listing } from './types';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Auth, onAuthStateChanged, User } from '@angular/fire/auth';


const httpOptions={
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

const httpOptionsWithAuthToken=(token: String)=>({
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'AuthToken':token.toString()
  })
})  

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$: Observable<User | null> = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient, private auth:Auth) { }

  getListing():Observable<Listing[]>{
    return this.http.get<Listing[]>('/api/listing');
  }

  getListingById(id:string):Observable<Listing>{
    return this.http.get<Listing>(`/api/listing/${id}`);  
  }

  addViewsToListing(id:string):Observable<Listing>{
    return this.http.post<Listing>(`/api/listing/${id}/view`,{},httpOptions);
  }

  getListingForUser():Observable<Listing[]>{
    return new Observable<Listing[]>(observer=>{
      this.auth.onAuthStateChanged((user)=>{
        if(user){
          user.getIdToken().then(token=>{
            this.http.get<Listing[]>(`/api/user/${user.uid}/listing`, httpOptionsWithAuthToken(token))
                .subscribe(listing=>{
                  observer.next(listing);
                })
          })
        }else{
          observer.next([]);
        }
      })
    })
  }

  deleteListing(id:string):Observable<any>{
    return new Observable<any>((observer)=>{
      this.auth.onAuthStateChanged((user)=>{
        if(user){
          user.getIdToken().then(token=>{
            this.http.delete(`/api/listing/${id}`, httpOptionsWithAuthToken(token))
               .subscribe(()=>observer.next())
          })
        }
      })
    })
  }

  createListing(name:string, description:string, price:number):Observable<Listing>{
    return new Observable<Listing>(observer=>{
      this.auth.onAuthStateChanged((user)=>{
        if(user){
          user.getIdToken().then(token=>{
            this.http.post<Listing>(
              '/api/listing',
              {name, description,price},
              httpOptionsWithAuthToken(token),
            ).subscribe(()=>observer.next())
          })
        }
      })
    })
  }

  editListing(id:string, name:string, description:string, price:number):Observable<Listing>{
    return new Observable<Listing>(observer=>{
      this.auth.onAuthStateChanged((user)=>{
        if(user){
          user.getIdToken().then(token=>{
            this.http.post<Listing>(
              `/api/listing/${id}`,
              {name, description, price},
              httpOptionsWithAuthToken(token),
            ).subscribe(()=>observer.next())
          })
        }
      })
    }) 
  }

}
