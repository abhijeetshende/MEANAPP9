import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NetworkRoutingModule } from './network-routing.module';
import { CreateNetworkComponent } from './create-network/create-network.component';
import { EditNetworkComponent } from './edit-network/edit-network.component';
import { ViewNetworkComponent } from './view-network/view-network.component';
import { IndexNetworkComponent } from './index-network/index-network.component';
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";

@NgModule({
  declarations: [CreateNetworkComponent, EditNetworkComponent, ViewNetworkComponent, IndexNetworkComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NetworkRoutingModule,

  ]
})
export class NetworkModule { }
