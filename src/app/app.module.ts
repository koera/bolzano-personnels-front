import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PersonnelsComponent} from './personnels/personnels.component';
import {HttpClientModule} from '@angular/common/http';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PersonnelsFormAddComponent} from './personnels-form-add/personnels-form-add.component';
import {MaterialModule} from './material.module';
import {FormsModule} from '@angular/forms';
import {PersonnelsFormEditComponent} from './personnels-form-edit/personnels-form-edit.component';
import {LoginComponent} from './login/login.component';
import {SidebarTopComponent} from './sidebar-top/sidebar-top.component';
import {SidebarBottomComponent} from './sidebar-bottom/sidebar-bottom.component';
import {PersonnelsDeletedComponent} from './personnels-deleted/personnels-deleted.component';
import {
  NgxUiLoaderConfig,
  NgxUiLoaderHttpModule,
  NgxUiLoaderModule,
  NgxUiLoaderRouterModule,
  PB_DIRECTION,
  POSITION,
  SPINNER
} from 'ngx-ui-loader';

import { PresenceComponent } from './presence/presence.component';

import {FullCalendarModule} from 'ng-fullcalendar';

import {DragAndDropModule} from 'angular-draggable-droppable';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: 'red',
  bgsPosition: POSITION.bottomCenter,
  bgsSize: 40,
  bgsType: SPINNER.threeBounce,
  pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: 5, // progress bar thickness
};

@NgModule({
  declarations: [
    AppComponent,
    PersonnelsComponent,
    DashboardComponent,
    PersonnelsFormAddComponent,
    PersonnelsFormEditComponent,
    LoginComponent,
    SidebarTopComponent,
    SidebarBottomComponent,
    PersonnelsDeletedComponent,
    PresenceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule,
    NgxUiLoaderHttpModule.forRoot({showForeground: true}),
    FullCalendarModule,
    DragAndDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
