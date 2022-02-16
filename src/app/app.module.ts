import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarLogComponent } from './components/navbar-log/navbar-log.component';
import { HomeComponent } from './pages/home/home.component';
import { PortalGunComponent } from './pages/portal-gun/portal-gun.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarLogComponent,
    HomeComponent,
    PortalGunComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
