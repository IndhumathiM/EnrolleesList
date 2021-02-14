import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';

const routes: Routes = [
    { path: '', redirectTo:'/users', pathMatch:'full' },
    
    { path: 'users', component: UsersComponent, data: { breadcrumb: 'Users' } },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
