import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { AuthService } from './auth/auth.service';
import { PlacesComponent } from './places/places.component';
import {PlacesService} from './places/places.service';
import { EventsComponent } from './events/events.component';
import {EventsService} from './events/events.service';
import { PlaceItemComponent } from './places/place-item/place-item.component';
import { EventItemComponent } from './event/event-item/event-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    NotFoundComponent,
    PlacesComponent,
    EventsComponent,
    PlaceItemComponent,
    EventItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService, PlacesService, EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
