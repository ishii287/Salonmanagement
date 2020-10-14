import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { HomeComponent } from './home/home.component';
import {ServicesComponent} from './services/services.component';
import {ContactusComponent} from './contactus/contactus.component';

const routes: Routes = [
  { path: '',
  component: HomeComponent
 },
 { path: 'appointment', 
 component: AppointmentComponent
},
{
 path: "aboutus",
 component: AboutusComponent
},
{
path: "services",
component: ServicesComponent
},
{
path: "contactus",
component: ContactusComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
