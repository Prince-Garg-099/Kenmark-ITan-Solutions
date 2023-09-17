import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup: FormGroup | any;

  constructor(private _http: HttpClient, private route: Router) { }
  ngOnInit(): void {
    this.signup = new FormGroup({
      'username': new FormControl(),
      'password': new FormControl(),
    })
  }
  signupdata(signup: FormGroup) {
   // console.log(this.signup.value);
    this._http.post<any>('http://localhost:3000/api/signup', this.signup.value).subscribe(res => {
     // console.log(res);
      this.signup.reset();
      this.route.navigate(['login']);
      alert("signup success");
    }, err => {
      alert("something went wrong");
    })
  }
}
