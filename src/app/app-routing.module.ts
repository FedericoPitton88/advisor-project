import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./pages/pages.module').then((pages) => pages.PagesModule)
  },
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then((auth) => auth.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
