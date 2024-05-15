import { Component, OnInit } from '@angular/core';
import { AdmindeshboardService } from '../adminservice/admindeshboard.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit{
totalUsers: any;
totalproducts: any;
  constructor(private adminservice:AdmindeshboardService){

  }
ngOnInit(): void {
  this.adminservice.getTotalUser().subscribe((res)=>{
    console.log(res);
    this.totalUsers=res;
   this.adminservice.getTotalProducts().subscribe((res)=>{
    console.log(res);
    this.totalproducts = res;
   }) 
  })
}
}
