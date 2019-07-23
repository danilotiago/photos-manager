import { SignupComponent } from './home/signup/signup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { SigninComponent } from './home/signin/signin.component';

import { IfLoggedGuard } from './core/auth/iflogged.guard';
import { HomeComponent } from './home/home.component';

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
  },
  { 
    path: 'user/:username', 
    component: PhotoListComponent, 
    resolve: { photos: PhotoListResolver } 
  },
  { 
    path: 'p/add', 
    component: PhotoFormComponent 
  },
  {  // caso nao tenha nenhuma rota, carrega o default
    path: '**', 
    component: NotFoundComponent 
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
