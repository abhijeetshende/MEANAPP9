import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MacDefinationRoutingModule } from './mac-defination-routing.module';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
@NgModule({
  declarations: [CreateComponent, ViewComponent, EditComponent, IndexComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    MacDefinationRoutingModule,
    SidebarModule
  ]
})
export class MacDefinationModule { }
