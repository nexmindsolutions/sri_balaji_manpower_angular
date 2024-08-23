import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { OurclientsComponent } from './components/ourclients/ourclients.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services-page', component: ServicesComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'ourclients', component: OurclientsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled' // This line enables scroll restoration
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
