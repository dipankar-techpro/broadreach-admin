import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmerchantRoutingModule } from './emerchant-routing.module';
import { CreateEmerchantComponent } from './create-emerchant/create-emerchant.component';
import { CreateEmerchantUserComponent } from './create-emerchant-user/create-emerchant-user.component';
import { EmerchantUserDetailComponent } from './emerchant-user-detail/emerchant-user-detail.component';
import { EmerchantUserEditComponent } from './emerchant-user-edit/emerchant-user-edit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { EmerchantListComponent } from './emerchant-list/emerchant-list.component';
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

@NgModule({
  declarations: [
    CreateEmerchantComponent,
    CreateEmerchantUserComponent,
    EmerchantUserDetailComponent,
    EmerchantUserEditComponent,
    EmerchantListComponent,
  ],
  imports: [
    CommonModule,
    EmerchantRoutingModule,
    NgbModule,
    NgSelectModule,
    NgxDatatableModule
  ]
})
export class EmerchantModule { }
