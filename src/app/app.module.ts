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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AktuellesComponent,
    UeberUnsComponent,
    FooterComponent,
    HeaderComponent,
    DatenschutzComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
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
