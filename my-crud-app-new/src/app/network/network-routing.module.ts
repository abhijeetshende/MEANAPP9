import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexNetworkComponent } from './index-network/index-network.component';
import { CreateNetworkComponent } from './create-network/create-network.component';
import { EditNetworkComponent } from './edit-network/edit-network.component';

const routes: Routes = [
  {
    path: 'network/index',
    component: IndexNetworkComponent,
  },
  {
    path:'network/create',
    component:CreateNetworkComponent
  },
  {
    path:'network/:id/edit',
    component:EditNetworkComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NetworkRoutingModule {}
