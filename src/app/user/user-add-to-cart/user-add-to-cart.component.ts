import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../userService/user-service.service';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

declare var Razorpay: any;
@Component({
  selector: 'app-user-add-to-cart',
  templateUrl: './user-add-to-cart.component.html',
  styleUrls: ['./user-add-to-cart.component.css'],
})
export class UserAddToCartComponent implements OnInit {
  username = sessionStorage.getItem('username')
  token: any  = sessionStorage.getItem('username');
  key: string = this.token;
  addData: any[] = [];
  data: any;
  Total:any
  descount:any
  grandtotal:any
  constructor(private userservice: UserServiceService) {}

  ngOnInit(): void {
    debugger
    this.addData =this.getData(this.key);
    this.gdtotal()
  }
  getData(key: string) {
    return this.userservice.getDatalocalstorage(this.key) 
  }
  removeItem(id: any) {
    debugger;
    let data = this.getData(this.key);
    let index = data.findIndex((item: any) => item.id == id);
    if (index !== -1) {
      data.splice(index, 1);
      localStorage.setItem(this.key, JSON.stringify(data));
      this.addData = this.getData(this.key);
      this.userservice.storeDatainLocalStorage(this.username,this.addData)
      this.gdtotal()
      return true; 
    } else {
      return false;
    }
  }
  subqty(id: any) {
    debugger;
    console.log(this.addData);
    let index = this.addData.findIndex((item: any) => item.id == id);
    if (index !== -1 && this.addData[index].productqty > 1) {
      this.addData[index].productqty--;
      this.userservice.storeDatainLocalStorage(this.username,this.addData)
      this.updateTotalPrice(id);
    }
  }

  Addqty(id: any) {
    debugger;
    console.log(this.addData);
    let index = this.addData.findIndex((item: any) => item.id == id);
    if (index !== -1) {
      this.addData[index].productqty++;
      this.addData[index].totalprice = parseInt(this.addData[index].productOfferPrice)
      this.addData[index].totalprice =
        this.addData[index].productqty * parseInt(this.addData[index].productOfferPrice);
        this.userservice.storeDatainLocalStorage(this.username,this.addData)
       this.updateTotalPrice(id);
    }
  }

  updateTotalPrice(id: number) {
    debugger;
    let index = this.addData.findIndex((item: any) => item.id == id);
    this.addData[index].totalprice =
      this.addData[index].productqty * this.addData[index].productOfferPrice;
      this.gdtotal();
  }

  gdtotal(){
    debugger;
    this.Total=0;
    this.descount=0;
    this.grandtotal=0;
    for(let i=0;i<this.addData.length;i++){
      this.Total=this.Total+this.addData[i].totalprice;
      this.descount=this.descount+this.addData[i].totalprice/10;
      this.grandtotal=this.Total-this.descount;
    }
    return this.grandtotal;
  }
  Openinvoice() {
    let docDefinition = {
      content: [
          "your products price" + this.Total,
          "you Save money" + this.descount,
          "your final payable amount" + this.grandtotal,
      ]
    };
   pdfMake.createPdf(docDefinition).open();
    }
Dowloadinvoice(){
  let docDefinition = {
    content: [
        "your products price" + this.Total,
        "you Save money" + this.descount,
        "your final payable amount" + this.grandtotal,
    ]
  };
 pdfMake.createPdf(docDefinition).download();
}
Printinvoice(){
  debugger;
  let docDefinition = {
    content: [
        "your products price" + this.Total,
        "you Save money" + this.descount,
        "your final payable amount" + this.grandtotal,
    ]
  };
 pdfMake.createPdf(docDefinition).print();
}
payNow() {
  const RozarpayOptions = {
    description: 'Sample Razorpay demo',
    currency: 'INR',
    amount: parseInt(this.grandtotal+"00"),
    name: this.token,
    key: 'rzp_test_fFmQyIkstX7FDr',
    image: 'https://i.imgur.com/FApqk3D.jpeg',
    prefill: {
      name: this.token,
      email: 'jugal@gmail.com',
      phone: '9898989898'
    },
    theme: {
      color: '#6466e3'
    },
    modal: {
      ondismiss:  () => {
        console.log('dismissed')
      }
    }
  }
  const successCallback = (paymentid: any) => {
    console.log(paymentid);
  }

  const failureCallback = (e: any) => {
    console.log(e);
  }
  Razorpay.open(RozarpayOptions,successCallback, failureCallback)
}
}
