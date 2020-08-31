import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CustomerComponent } from './customer/customer.component';
import { MainComponent } from './layout/main/main.component';
import { AdminComponent } from './admin/admin.component';
import {AuthGuard} from './guards/auth.guard'
import { CategoryComponent } from './category/category.component';
import { CategoryAddComponent} from './category-add/category-add.component';
import { CategoryEditComponent} from './category-edit/category-edit.component';

const routes: Routes = [
  {path: 'Login', component: LoginComponent},
  {path: 'Welcome', component: WelcomeComponent},
  {path: 'Customer', component: CustomerComponent},
  {
    path: 'home',
    component: MainComponent,
    children:[
      {path: 'customer-manager', component: CustomerComponent}
    ]
  },
  {path: 'Admin', component: AdminComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard]
  },
  {path: 'Category', component: CategoryComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard]
  },
  {
    path: 'Category-add', component: CategoryAddComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard]
  },
  {
    path: 'Category-edit/:id', component: CategoryEditComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
