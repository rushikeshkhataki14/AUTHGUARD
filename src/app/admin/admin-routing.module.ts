import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminroleGuard } from '../shared/adminrole.guard';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admins/admin.component';
import { LandingComponent } from './landing/landing.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:"",component:LandingComponent, children:[
    {path:"users", component:UsersComponent},
    {path:"admins", canActivate: [AdminroleGuard],component:AdminComponent},
    {path:"about", component:AboutComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
