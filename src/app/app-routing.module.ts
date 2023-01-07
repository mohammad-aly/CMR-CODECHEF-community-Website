import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JoinComponent } from './join/join.component';
import { PpComponent } from './pp/pp.component';

const routes: Routes = [


  {path: 'joinclub', component: JoinComponent},

  {path: 'home' , component: HomeComponent},
  {path:'privacy-policy',component:PpComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



 }
