import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { IfLoggedGuard } from '../core/auth/iflogged.guard';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    canActivate: [IfLoggedGuard],
    // define rotas filhas
    children: [
      { 
        path: '', 
        component: SigninComponent
      },
      { 
        path: 'signup', 
        component: SignupComponent
      },
    ] 
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
