import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CustomerComponent } from './customer/customer.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainComponent } from './layout/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import {AccountService} from './services/account.service';
import {CategoryService} from './services/category.service';

//service
import { API } from './services/api';
import { AdminComponent } from './admin/admin.component';
import { CategoryComponent } from './category/category.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryEditComponent } from './category-edit/category-edit.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    CustomerComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AdminComponent,
    CategoryComponent,
    CategoryAddComponent,
    CategoryEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    API,
    AccountService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
