import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ServicesComponent } from './components/services/services.component';

const routes: Routes = [
  {path:'',redirectTo:'/home-page',pathMatch:'full'},
  {path:'home-page',component:HomePageComponent},
  {path:'services-page',component:ServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
