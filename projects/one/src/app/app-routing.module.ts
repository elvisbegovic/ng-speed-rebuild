import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'a', loadChildren: () => import('./a/a.module').then(m => m.AModule) },
  { path: 'aa', loadChildren: () => import('./aa/a.module').then(m => m.AModule) },
  { path: 'aaa', loadChildren: () => import('./aaa/a.module').then(m => m.AModule) },
  { path: 'aaaa', loadChildren: () => import('./aaaa/a.module').then(m => m.AModule) },
  { path: 'b', loadChildren: () => import('./b/b.module').then(m => m.BModule) },
  { path: 'bb', loadChildren: () => import('./bb/b.module').then(m => m.BModule) },
  { path: 'bbb', loadChildren: () => import('./bbb/b.module').then(m => m.BModule) },
  { path: 'bbbb', loadChildren: () => import('./bbbb/b.module').then(m => m.BModule) }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
