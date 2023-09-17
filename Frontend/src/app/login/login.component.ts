import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup | any;

  constructor(private _http: HttpClient, private route: Router, private service: ServiceService) { }

  ngOnInit(): void {
    this.login = new FormGroup({
      'username': new FormControl(),
      'password': new FormControl(),

    })
  }

  logindata(login: FormGroup) {
    //console.log(this.login.value);
    this.service.finduser(this.login.value).subscribe((res: any) => {
      //console.log(res);
      if (res.message) {
        alert("user not found");
      } else {
        // console.log(" Login Successfully ")
        sessionStorage.setItem("userId", res.id)
        sessionStorage.setItem("username", res.username)
        this.route.navigate(['/tasklist'])
      }
    },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
