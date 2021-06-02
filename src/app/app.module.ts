import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AktuellesComponent } from './aktuelles/aktuelles.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';


import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { EinrichtungComponent } from './einrichtung/einrichtung.component';
import { TeamComponent } from './team/team.component';
import { AussengelandeComponent } from './aussengelande/aussengelande.component';
import { ErnahrungComponent } from './ernahrung/ernahrung.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfoCardComponent } from './shared/cards/info-card/info-card.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { ProfileCardComponent } from './shared/cards/profile-card/profile-card.component';
import { ErnahrungService } from './ernahrung/ernahrung.service';
import { TeamService } from './team/team.service';
import { BaseRequestService } from './shared/services/base-requests.service';
import { HttpClientModule } from '@angular/common/http';
import { AktuellesService } from './aktuelles/aktuelles.service';
import { ImageService } from './shared/services/image.service';


const SERVICES = [
  ErnahrungService, 
  TeamService, 
  BaseRequestService, 
  AktuellesService, 
  ImageService
];

const COMPONENTS = [
  AppComponent,
  HomeComponent,
  AktuellesComponent,
  FooterComponent,
  HeaderComponent,
  DatenschutzComponent,
  EinrichtungComponent,
  TeamComponent,
  AussengelandeComponent,
  ErnahrungComponent,
  LoginComponent,
  InfoCardComponent,
  ImpressumComponent,
  ProfileCardComponent,
]
@NgModule({
  declarations: [    
    COMPONENTS
  ],
  imports: [
    HttpClientModule, 
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [ SERVICES ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
