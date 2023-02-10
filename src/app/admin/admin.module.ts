import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LandingComponent } from './landing/landing.component';
import { UsersComponent } from './users/users.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    LandingComponent,
    UsersComponent,
    AdminComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
