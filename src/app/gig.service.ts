import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Gig } from './models/gig.model';

@Injectable({
  providedIn: 'root'
})
export class GigService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:3000/api/gigs";
  }

  getAllGigs(): Promise<Gig[]> {
    return this.http.get<Gig[]>(this.baseUrl + "/").toPromise();
  }
}
