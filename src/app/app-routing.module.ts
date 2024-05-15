import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserregisterComponent } from './user/userregister/userregister.component';
import { UserloginComponent } from './user/userregister/userlogin/userlogin.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { UserCollectionsComponent } from './user/user-collections/user-collections.component';
import { UserAboutComponent } from './user/user-about/user-about.component';
import { UserContactComponent } from './user/user-contact/user-contact.component';
import { CanActivate, CanDeActivate } from './user/userService/userguard.guard';
import { NotfoundComponent } from './notfound/notfound.component';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { UserDetailsComponent } from './admin/user-details/user-details.component';
import { AdminheaderComponent } from './admin/adminheader/adminheader.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { UserAddToCartComponent } from './user/user-add-to-cart/user-add-to-cart.component';
import { UserproductdetailsComponent } from './user/userproductdetails/userproductdetails.component';
import { UserpaymentComponent } from './user/userpayment/userpayment.component';

const routes: Routes = [
  {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'Login',component:UserloginComponent,canActivate:[CanDeActivate]},
  {path:'usregister',component:UserregisterComponent},
  {path:'Home',component:UserHomeComponent},
  {path:'Collection',component:UserCollectionsComponent},
  {path:'About',component:UserAboutComponent},
  {path:'Contact',component:UserContactComponent},
  {path:'AddTocart',component:UserAddToCartComponent},
  {path:'payment',component:UserpaymentComponent},
  {path:'productdetails/:id',component:UserproductdetailsComponent},
  {path:'Dashboard',component:AdminheaderComponent,children:[
  {path:'AddProduct',component:AddproductComponent},
  {path:'AdminHome',component:AdminHomeComponent},
  {path:'UserDetails',component:UserDetailsComponent}]
  },
  {path:'**',component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
