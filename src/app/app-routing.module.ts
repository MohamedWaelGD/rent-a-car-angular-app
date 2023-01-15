import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/pages/notFound/notFound.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./components/pages/client/client.module').then(m => m.ClientModule) },
  { path: 'auth', loadChildren: () => import('./components/pages/auth/auth.module').then(m => m.AuthModule) },
  { path: 'admin', loadChildren: () => import('./components/pages/admin/admin.module').then(m => m.AdminModule) },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
