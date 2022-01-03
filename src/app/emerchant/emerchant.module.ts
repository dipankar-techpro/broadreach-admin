import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmerchantRoutingModule } from './emerchant-routing.module';
import { CreateEmerchantComponent } from './create-emerchant/create-emerchant.component';
import { CreateEmerchantUserComponent } from './create-emerchant-user/create-emerchant-user.component';
import { EmerchantUserDetailComponent } from './emerchant-user-detail/emerchant-user-detail.component';
import { EmerchantUserEditComponent } from './emerchant-user-edit/emerchant-user-edit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    CreateEmerchantComponent,
    CreateEmerchantUserComponent,
    EmerchantUserDetailComponent,
    EmerchantUserEditComponent,
  ],
  imports: [
    CommonModule,
    EmerchantRoutingModule,
    NgbModule
  ]
})
export class EmerchantModule { }
