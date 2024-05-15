import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Addproduct } from 'src/app/admin/addProduct.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  url = 'https://localhost:7172/'; 
  constructor(private http:HttpClient,private route:Router,private tost:ToastrService) { }
 getProductData(): Observable<Addproduct[]> 
 {
 return this.http.get<Addproduct[]>(this.url+'AddProduct/getAllProduct');
 } 
 addtocart(id:any): Observable<Addproduct[]>
 {
 return this.http.get<Addproduct[]>(this.url+`AddProduct/addtocart/${id}`);
 } 
 storeDatainLocalStorage(key:any,data:any){
  debugger
    localStorage.setItem(key,JSON.stringify(data))
    this.route.navigate(['/AddTocart'])
 }
 getDatalocalstorage(key:any){
 const data = localStorage.getItem(key);
 return data?JSON.parse(data):[]
 }
}
