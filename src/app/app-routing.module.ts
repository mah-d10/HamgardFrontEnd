import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { PlacesComponent } from './places/places.component';
import {EventsComponent} from './events/events.component';
import {PlaceItemComponent} from './places/place-item/place-item.component';
import {EventItemComponent} from './events/event-item/event-item.component';
import {GroupsComponent} from './groups/groups.component';
import {GroupsStartComponent} from './groups/groups-start/groups-start.component';
import {GroupsNewComponent} from './groups/groups-new/groups-new.component';
import {GroupsEditComponent} from './groups/groups-edit/groups-edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'places/:id', component: PlaceItemComponent},
  { path: 'places', component:  PlacesComponent},
  { path: 'events/:id', component: EventItemComponent},
  { path: 'events', component: EventsComponent},
  { path: 'groups', component: GroupsComponent, children: [
      { path: '', component: GroupsStartComponent},
      { path: 'new', component: GroupsNewComponent},
      { path: ':index', component: GroupsEditComponent}
    ] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
