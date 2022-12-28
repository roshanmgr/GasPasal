import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureModuleComponent } from './feature-module.component';

const routes: Routes = [{ path: '', component: FeatureModuleComponent }, { path: 'admin-config', loadChildren: () => import('./admin-config/admin-config.module').then(m => m.AdminConfigModule) }, { path: 'client-site', loadChildren: () => import('./client-site/client-site.module').then(m => m.ClientSiteModule) }, { path: 'user-site', loadChildren: () => import('./user-site/user-site.module').then(m => m.UserSiteModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureModuleRoutingModule { }
