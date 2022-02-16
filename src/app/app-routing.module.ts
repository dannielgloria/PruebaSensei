import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PortalGunComponent } from './pages/portal-gun/portal-gun.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'portals', component: PortalGunComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
