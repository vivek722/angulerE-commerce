import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../userService/authentication.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {
  Dataform: FormGroup | null = null;

  constructor(private auth: AuthenticationService, private formBuilder: FormBuilder,private route:Router,private toster:ToastrService) { }

  ngOnInit(): void {
    this.Dataform = this.formBuilder.group({
      Username: ['', Validators.required],
      Password: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
    });
  }

  userragisterdata() {
    debugger
    if (this.Dataform?.valid) {
      debugger
      const userData = this.Dataform.getRawValue();
      this.auth.UsRegisterdata(userData).subscribe((res)=>{
        console.log(res)
      })
      this.toster.success("Register Successfully")
      this.route.navigate(['/Login']);
    }
  }
}

