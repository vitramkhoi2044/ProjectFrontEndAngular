import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoutComponent } from './components/logout/logout.component';
import { TableComponent } from './components/table/table.component';

import { AngularFireModule } from '@angular/fire/compat'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { NgxPaginationModule } from 'ngx-pagination';

import { HttpClientModule } from '@angular/common/http';
import { TableNodejsComponent } from './components/table-nodejs/table-nodejs.component';
import {ReactiveFormsModule} from "@angular/forms";
import { FormInsertProductNodejsComponent } from './components/form-insert-product-nodejs/form-insert-product-nodejs.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { FormInsertProductComponent } from './components/form-insert-product/form-insert-product.component';
import { FormUpdateProductNodejsComponent } from './components/form-update-product-nodejs/form-update-product-nodejs.component';
import { FormUpdateProductComponent } from './components/form-update-product/form-update-product.component';
import { DeletemodalComponent } from './components/deletemodal/deletemodal.component';
import { DeletemodalnodejsComponent } from './components/deletemodalnodejs/deletemodalnodejs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    SidebarComponent,
    FooterComponent,
    LogoutComponent,
    TableComponent,
    TableNodejsComponent,
    FormInsertProductNodejsComponent,
    LoginComponent,
    MainComponent,
    RegisterComponent,
    FormInsertProductComponent,
    FormUpdateProductNodejsComponent,
    FormUpdateProductComponent,
    DeletemodalComponent,
    DeletemodalnodejsComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features=> dùng cho chức năng update
    NgxPaginationModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
