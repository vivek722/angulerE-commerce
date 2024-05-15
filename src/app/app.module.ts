import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserregisterComponent } from './user/userregister/userregister.component';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserloginComponent } from './user/userregister/userlogin/userlogin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { UserHeaderComponent } from './user/user-header/user-header.component';
import { UserCollectionsComponent } from './user/user-collections/user-collections.component';
import { UserAboutComponent } from './user/user-about/user-about.component';
import { UserContactComponent } from './user/user-contact/user-contact.component';
import { UserFooterComponent } from './user/user-footer/user-footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { AdminheaderComponent } from './admin/adminheader/adminheader.component';
import { UserDetailsComponent } from './admin/user-details/user-details.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { UserLoginInterceptor } from './user-login.interceptor';
import { UserAddToCartComponent } from './user/user-add-to-cart/user-add-to-cart.component';
import { UserproductdetailsComponent } from './user/userproductdetails/userproductdetails.component';

// import { UserpaymentComponent } from './user/userpayment/userpayment.component';



@NgModule({
  declarations: [
    AppComponent,
    UserregisterComponent,
    UserloginComponent,
    UserHomeComponent,
    UserHeaderComponent,
    UserCollectionsComponent,
    UserAboutComponent,
    UserContactComponent,
    UserFooterComponent,
    NotfoundComponent,
    AddproductComponent,
    AdminheaderComponent,
    UserDetailsComponent,
    AdminHomeComponent,
    UserAddToCartComponent,
    UserproductdetailsComponent,
    // UserpaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:UserLoginInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
