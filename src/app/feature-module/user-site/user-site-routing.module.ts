import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSiteComponent } from './user-site.component';

const routes: Routes = [{ path: '', component: UserSiteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserSiteRoutingModule { }
