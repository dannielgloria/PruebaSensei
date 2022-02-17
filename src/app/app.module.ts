import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarLogComponent } from './components/navbar-log/navbar-log.component';
import { HomeComponent } from './pages/home/home.component';
import { PortalGunComponent } from './pages/portal-gun/portal-gun.component';
import { CharacterComponent } from './pages/character/character.component';
import { LocationComponent } from './pages/location/location.component';
import { CharacterGridComponent } from './components/character-grid/character-grid.component';
import { LocationGridComponent } from './components/location-grid/location-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarLogComponent,
    HomeComponent,
    PortalGunComponent,
    CharacterComponent,
    LocationComponent,
    CharacterGridComponent,
    LocationGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
