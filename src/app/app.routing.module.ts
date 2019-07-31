import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoDetailsComponent } from './photos/photo-details/photo-details.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { IfNotLoggedGuard } from './core/auth/ifnotlogged.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  { 
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  { 
    path: 'user/:username', 
    component: PhotoListComponent, 
    resolve: { photos: PhotoListResolver } 
  },
  { 
    path: 'p/add', 
    component: PhotoFormComponent,
    canActivate: [IfNotLoggedGuard]
  },
  { 
    path: 'p/:photoId', 
    component: PhotoDetailsComponent
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
