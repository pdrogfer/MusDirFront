import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GigListComponent } from './gig-list/gig-list.component';
import { GigDetailComponent } from './gig-detail/gig-detail.component';
import { BandDetailComponent } from './band-detail/band-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    GigListComponent,
    GigDetailComponent,
    BandDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
