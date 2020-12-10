import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AktuellesComponent } from './aktuelles/aktuelles.component';
import { UeberUnsComponent } from './ueber_uns/ueber_uns.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import {EinrichtungComponent} from './einrichtung/einrichtung.component';
import {TeamComponent} from './team/team.component';
import {AussengelandeComponent} from './aussengelande/aussengelande.component';
import {ErnahrungComponent} from './ernahrung/ernahrung.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'aktuelles', component: AktuellesComponent },
  { path: 'ueber-uns', component: UeberUnsComponent }, 
  { path: 'datenschutz', component: DatenschutzComponent },
  { path: 'einrichtung', component: EinrichtungComponent },
  { path: 'team', component: TeamComponent },
  { path: 'aussengelande', component: AussengelandeComponent },
  { path: 'ernahrung', component: ErnahrungComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
