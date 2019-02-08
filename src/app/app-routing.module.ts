import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PersonnelsComponent} from './personnels/personnels.component';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PersonnelsFormAddComponent} from './personnels-form-add/personnels-form-add.component';
import {PersonnelsFormEditComponent} from './personnels-form-edit/personnels-form-edit.component';
import {LoginComponent} from './login/login.component';
import {PersonnelsDeletedComponent} from './personnels-deleted/personnels-deleted.component';
import { PresenceComponent } from './presence/presence.component';
import { PresenceCalendarComponent } from './presence-calendar/presence-calendar.component';
import { EtatsComponent } from './etats/etats.component';

const routes: Routes = [
  {path: 'personnels', component: PersonnelsComponent},
  {path: 'home', component: DashboardComponent},
  {path: 'personnels/add', component: PersonnelsFormAddComponent},
  {path: 'personnels/edit/:id', component: PersonnelsFormEditComponent},
  {path: 'login', component: LoginComponent},
  {path: 'personnels/deleted', component: PersonnelsDeletedComponent},
  {path: 'presence', component: PresenceComponent},
  {path: "presence/calendar/:id", component: PresenceCalendarComponent},
  {path: "presence/etats", component: EtatsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
