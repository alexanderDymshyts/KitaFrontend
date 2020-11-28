import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AktuellesComponent } from './aktuelles/aktuelles.component';
import { UnserTeamComponent } from './unser_team/unser_team.component';
import { UeberUnsComponent } from './ueber_uns/ueber_uns.component';

import { FooterComponent } from './shared/footer/footer.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'aktuelles', component: AktuellesComponent },
  { path: 'unser-team', component: UnserTeamComponent },
  { path: 'ueber-uns', component: UeberUnsComponent },
  { path: 'footer', component: FooterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
