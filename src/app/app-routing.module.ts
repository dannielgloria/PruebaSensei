import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PortalGunComponent } from './pages/portal-gun/portal-gun.component';
import { CharacterComponent } from './pages/character/character.component';
import { LocationComponent } from './pages/location/location.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'portals', component: PortalGunComponent},
  {path: 'characters', component: CharacterComponent},
  {path: 'locations', component: LocationComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
