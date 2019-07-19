import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { SigninComponent } from './home/signin/signin.component';

import { IfLoggedGuard } from './core/auth/iflogged.guard';

const routes: Routes = [
  { 
    path: '', 
    component: SigninComponent,
    canActivate: [IfLoggedGuard] 
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
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
