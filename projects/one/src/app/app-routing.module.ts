import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'a1', loadChildren: () => import('./a1/a.module').then(m => m.AModule) },
  { path: 'a2', loadChildren: () => import('./a2/a.module').then(m => m.AModule) },
  { path: 'a3', loadChildren: () => import('./a3/a.module').then(m => m.AModule) },
  { path: 'a4', loadChildren: () => import('./a4/a.module').then(m => m.AModule) },
  { path: 'a5', loadChildren: () => import('./a5/a.module').then(m => m.AModule) },
  { path: 'a6', loadChildren: () => import('./a6/a.module').then(m => m.AModule) },
  { path: 'a7', loadChildren: () => import('./a7/a.module').then(m => m.AModule) },
  { path: 'a8', loadChildren: () => import('./a8/a.module').then(m => m.AModule) },
  { path: 'b1', loadChildren: () => import('./b1/b.module').then(m => m.BModule) },
  { path: 'b2', loadChildren: () => import('./b2/b.module').then(m => m.BModule) },
  { path: 'b3', loadChildren: () => import('./b3/b.module').then(m => m.BModule) },
  { path: 'b4', loadChildren: () => import('./b4/b.module').then(m => m.BModule) },
  { path: 'b5', loadChildren: () => import('./b5/b.module').then(m => m.BModule) },
  { path: 'b6', loadChildren: () => import('./b6/b.module').then(m => m.BModule) },
  { path: 'b7', loadChildren: () => import('./b7/b.module').then(m => m.BModule) },
  { path: 'b8', loadChildren: () => import('./b8/b.module').then(m => m.BModule) },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
