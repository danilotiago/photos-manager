import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { SigninComponent } from './home/signin/signin.component';

const routes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'user/:username', component: PhotoListComponent, resolve: { photos: PhotoListResolver } },
  { path: 'p/add', component: PhotoFormComponent },
  { path: '**', component: NotFoundComponent } // caso nao tenha nenhuma rota, carrega o default
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
