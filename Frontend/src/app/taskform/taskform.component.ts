import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-taskform',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})
export class TaskformComponent implements OnInit {
  task: FormGroup | any;
  id = sessionStorage.getItem('userId');
  constructor(private _http: HttpClient, private route: Router) { }

  ngOnInit(): void {
    this.task = new FormGroup({
      'description': new FormControl(),
      'dueDate': new FormControl(),
      'userId': new FormControl(this.id),
    })
  }
  taskdata() {
    // console.log(this.task.value)
    this._http.post<any>('http://localhost:3000/api/task', this.task.value).subscribe(res => {
      // console.log(res);
      this.task.reset();
      this.route.navigate(['tasklist']);
      alert(" task add success");
    }, err => {
      alert("something went wrong");
    })
  }
}
