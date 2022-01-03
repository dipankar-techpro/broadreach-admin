import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmerchantUserComponent } from './create-emerchant-user/create-emerchant-user.component';
import { CreateEmerchantComponent } from './create-emerchant/create-emerchant.component';
import { EmerchantUserDetailComponent } from './emerchant-user-detail/emerchant-user-detail.component';
import { EmerchantUserEditComponent } from './emerchant-user-edit/emerchant-user-edit.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'create-emerchant',
        component: CreateEmerchantComponent,
        data: {
          title: 'List'
        }
      },
      {
        path: 'create-emerchant-user',
        component: CreateEmerchantUserComponent,
        data: {
          title: 'List'
        }
      },
      {
        path: 'emerchant-user-detail',
        component: EmerchantUserDetailComponent,
        data: {
          title: 'List'
        }
      },
      {
        path: 'emerchant-user-edit',
        component: EmerchantUserEditComponent,
        data: {
          title: 'List'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmerchantRoutingModule { }
