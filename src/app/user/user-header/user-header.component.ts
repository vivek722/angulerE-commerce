import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {

token = JSON.stringify(localStorage.getItem('token'))
username:any = sessionStorage.getItem('username');
data:any = localStorage.getItem(this.username)
addtocart =JSON.parse(this.data);
count: any;
constructor(private route:Router,private toster:ToastrService){
}
ngOnInit(): void {
  debugger
  if(this.addtocart != null)
    {
     this.count = this.addtocart.length;
    }
}
logout() {
  debugger
  localStorage.removeItem('token');
  this.route.navigate(['/Login']);
  this.toster.success('Logout Successfully');
  }
}
