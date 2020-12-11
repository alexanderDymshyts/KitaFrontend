import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AktuellesComponent } from './aktuelles/aktuelles.component';
import { UeberUnsComponent } from './ueber_uns/ueber_uns.component';
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




@NgModule({
  declarations: [
    
    AppComponent,
    HomeComponent,
    AktuellesComponent,
    UeberUnsComponent,
    FooterComponent,
    HeaderComponent,
    DatenschutzComponent,
    EinrichtungComponent,
    TeamComponent,
    AussengelandeComponent,
    ErnahrungComponent,
    LoginComponent,
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [  
    HomeComponent,
    AktuellesComponent,
    UeberUnsComponent,
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
