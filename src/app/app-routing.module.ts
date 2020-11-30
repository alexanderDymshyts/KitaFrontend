import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AktuellesComponent } from './aktuelles/aktuelles.component';
import { UeberUnsComponent } from './ueber_uns/ueber_uns.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'aktuelles', component: AktuellesComponent },
  { path: 'ueber-uns', component: UeberUnsComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
