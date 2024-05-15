import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdmindeshboardService } from '../adminservice/admindeshboard.service';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from 'src/app/user/userService/user-service.service';
import { Addproduct } from '../addProduct.model';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit{
url: any;
userData:any=[]
Product:any[]= [];
  Dataform: FormGroup | null = null;
  constructor(private frombuilder:FormBuilder,private admin:AdmindeshboardService,private toster:ToastrService,private user:UserServiceService) {}
ngOnInit(): void {
  this.Dataform = this.frombuilder.group({
    productName :['',Validators.required],
    productDesc :['',Validators.required],
    productActualPrice :['',Validators.required],
    productOfferPrice :['',Validators.required],
    productSize :['',Validators.required],
    productColour :['',Validators.required],
    productImage :[''],
  })
  this.user.getProductData().subscribe((res)=>{
    debugger
    this.Product = res;
  })
}



addProduct() {
  if (this.Dataform?.valid) {
    debugger
    this.userData = this.Dataform.getRawValue() as Addproduct;
    this.userData.totalprice = parseInt(this.userData.productOfferPrice) *1;
    console.log("total price ",this.userData.totalprice)
   this.admin.addProduct(this.userData).subscribe((res)=>{
   })
    this.toster.success("Product Insert Successfully")
  }
}
  previewImage(event: any) {
    var input = event.target;
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = (e: any) => {
        this.url = e.target.result;
        this.Dataform?.patchValue({ productImage  : this.url });
      };
      reader.readAsDataURL(input.files[0]);
    }
  }  
}
