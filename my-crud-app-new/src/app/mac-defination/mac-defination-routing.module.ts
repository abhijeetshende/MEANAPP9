import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from "./index/index.component";
import { CreateComponent } from "./create/create.component";
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'mac/index',
    pathMatch: 'full',
  },
  {
    path:"mac/index",
    component:IndexComponent
  },
  {
    path:"mac/create",
    component:CreateComponent
  },
  {
    path:"mac/:id/view",
    component:ViewComponent
  },
  {
    path:"mac/:id/edit",
    component:EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MacDefinationRoutingModule {}
