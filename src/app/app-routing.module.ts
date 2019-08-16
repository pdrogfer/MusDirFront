import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GigListComponent } from './gig-list/gig-list.component';
import { GigDetailComponent } from './gig-detail/gig-detail.component';
import { BandDetailComponent } from './band-detail/band-detail.component';

const routes: Routes = [
  { path: '', component: GigListComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
