import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../userService/user-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-userproductdetails',
  templateUrl: './userproductdetails.component.html',
  styleUrls: ['./userproductdetails.component.css']
})
export class UserproductdetailsComponent implements OnInit{
  productid:any
  product:any
  allproduct:any[]=[]
  data:any[]=[]
  username = sessionStorage.getItem('username')
  constructor(private route:ActivatedRoute,private user:UserServiceService,private toster:ToastrService){}
  ngOnInit(): void {
    debugger
    this.productid = this.route.snapshot.params['id']
    this.user.addtocart(this.productid).subscribe((res:any)=>{
    this.product = res;
    this.product.orderqty = 1;
    this.product.totalprice = this.product.productOfferPrice;
    })
  }
  getaddtocart(id:any) {
    debugger
  this.allproduct=this.getdata()
  if(this.allproduct.filter(x =>x.id == id).length > 0)
    {
      this.toster.error("item alredy added")
    }
    else
    { 
      this.allproduct.push(this.product)
      this.toster.success("item added successfully")
    }
    this.user.storeDatainLocalStorage(this.username,this.allproduct)
  }
  getdata(){
    this.data = this.user.getDatalocalstorage(this.username) 
    return this.data
  }
}
