import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoDetailsComponent } from './photos/photo-details/photo-details.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { IfNotLoggedGuard } from './core/auth/ifnotlogged.guard';
import { GlobalErrorComponent } from './errors/global-error/global-error.component';

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
    resolve: { photos: PhotoListResolver },
    data: {
      title: 'Timeline'
    }
  },
  { 
    path: 'p/add', 
    component: PhotoFormComponent,
    canActivate: [IfNotLoggedGuard],
    data: {
      title: 'Photo upload'
    }
  },
  { 
    path: 'p/:photoId', 
    component: PhotoDetailsComponent,
    data: {
      title: 'Photo detail'
    }
  },
  { 
    path: 'error', 
    component: GlobalErrorComponent,
    data: {
      title: 'Error'
    }
  },
  {  // caso nao tenha nenhuma rota, redirect para not found
    path: '**', 
    redirectTo: '/not-found'
  },
  { 
    path: 'not-found', 
    component: NotFoundComponent,
    data: {
      title: 'Not found'
    }
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
