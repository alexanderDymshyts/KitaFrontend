import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AktuellesComponent } from './aktuelles/aktuelles.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import {EinrichtungComponent} from './einrichtung/einrichtung.component';
import {TeamComponent} from './team/team.component';
import {AussengelandeComponent} from './aussengelande/aussengelande.component';
import {ErnahrungComponent} from './ernahrung/ernahrung.component';
import {LoginComponent} from '../app/login/login.component';
import { AuthGuard } from './shared/security/auth.guard';
import { ChildActivitiesOverviewComponent } from './child-activities-overview/child-activities-overview.component';
import { Role } from './shared/enums/eRole';
import { CreateParentComponent } from './create-parent/create-parent.component';
import { CreateChildComponent } from './create-child/create-child.component';
import { ImpressumComponent } from './impressum/impressum.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'aktuelles', component: AktuellesComponent},   
  { path: 'datenschutz', component: DatenschutzComponent },
  { path: 'einrichtung', component: EinrichtungComponent },
  { path: 'team', component: TeamComponent },
  { path: 'aussengelande', component: AussengelandeComponent },
  { path: 'ernahrung', component: ErnahrungComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'login', component: LoginComponent },   
  { path: 'activities', component: ChildActivitiesOverviewComponent, canActivate: [AuthGuard], data: { roles: [Role.User] }},
  { path: 'create-parent', component: CreateParentComponent, canActivate: [AuthGuard], data: { roles: [Role.Moderator, Role.Admin] }},
  { path: 'create-child', component: CreateChildComponent, canActivate: [AuthGuard], data: { roles: [Role.Moderator, Role.Admin] }},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),    
  ],
  exports: [RouterModule],  
})
export class AppRoutingModule { }
