import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../userService/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  Dataform: FormGroup | null = null;
  token:any;
  constructor(private auth: AuthenticationService, private formBuilder: FormBuilder,private toster:ToastrService,private route:Router){}
ngOnInit(): void {
  this.Dataform = this.formBuilder.group({
    Username: ['', Validators.required],
    Password: ['', Validators.required],
  });
}
userLogindata() {

  debugger
  if (this.Dataform?.valid) {
    sessionStorage.setItem('username',this.Dataform.get('Username')?.value)
    debugger
    const userData = this.Dataform.getRawValue();
    this.auth.UsLogindata(userData).subscribe((res)=>{
      console.log(res)
      this.token=res;
      localStorage.setItem('token',this.token.token) 
      this.route.navigate(['/Home'])
    })
  }
}

}
