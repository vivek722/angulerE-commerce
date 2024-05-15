import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../userService/user-service.service';

@Component({
  selector: 'app-user-collections',
  templateUrl: './user-collections.component.html',
  styleUrls: ['./user-collections.component.css']
})
export class UserCollectionsComponent implements OnInit {

products: any[]=[];

  constructor(private userservice:UserServiceService){

  }
  ngOnInit(): void {
    debugger
    this.userservice.getProductData().subscribe((res)=>{
      this.products= res
    })
  }
}
