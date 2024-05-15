import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { register } from 'src/app/user/register.model';
import { Addproduct } from '../addProduct.model';

@Injectable({
  providedIn: 'root'
})
export class AdmindeshboardService {
  url = 'https://localhost:7172/'; 
  constructor(private http:HttpClient) { }

getTotalUser(): Observable<register[]>
{
  debugger
  return this.http.get<register[]>(this.url+'UserAuthentication/TotalUser');
}
getTotalProducts(): Observable<Addproduct[]>
{
  debugger
  return this.http.get<Addproduct[]>(this.url+'AddProduct/getTotalProduct');
}
addProduct(product:Addproduct) : Observable<Addproduct[]>
{
  return this.http.post<Addproduct[]>(this.url+'AddProduct/addproduct',product)
}
}
