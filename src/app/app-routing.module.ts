import { DeletemodalComponent } from './components/deletemodal/deletemodal.component';
import { FormUpdateProductComponent } from './components/form-update-product/form-update-product.component';
import { FormUpdateProductNodejsComponent } from './components/form-update-product-nodejs/form-update-product-nodejs.component';
import { FormInsertProductComponent } from './components/form-insert-product/form-insert-product.component';
import { RegisterComponent } from './components/register/register.component';
import { MainComponent } from './components/main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TableComponent } from './components/table/table.component';
import { TableNodejsComponent } from './components/table-nodejs/table-nodejs.component';
import { FormInsertProductNodejsComponent } from './components/form-insert-product-nodejs/form-insert-product-nodejs.component';
import { LoginComponent } from './components/login/login.component';
import {  AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: 'home', component: MainComponent,
    canActivate: [AuthGuard],//khai báo guard dùng để ràng buộc phải đăng nhập mới được vào
    children: [
      { path: 'dashboard', component: HomeComponent },
      { path: 'tablefirebase', component: TableComponent },
      { path: 'tablenodejs', component: TableNodejsComponent },
      { path: 'insertproductnodejs', component: FormInsertProductNodejsComponent },
      { path: 'updateproductnodejs', component: FormUpdateProductNodejsComponent },
      { path: 'insertproduct', component: FormInsertProductComponent },
      { path: 'updateproduct', component: FormUpdateProductComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
