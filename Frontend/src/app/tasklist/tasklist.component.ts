import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  id = sessionStorage.getItem('userId');
  username = sessionStorage.getItem('username');
  constructor(private service: ServiceService, private fb: FormBuilder) { }
  ngOnInit(): void {
    this.getAllTasks(this.id);
  }
  Tasks: any;

  Form = this.fb.group({
    userId: sessionStorage.getItem('userId') || ""
  });


  getAllTasks(id: any) {
    this.service.gettaskbyuserId(this.Form.value).subscribe((res) => {
      this.Tasks = res.tasks;
    });
  }

  deletetask(taskId: any) {
    this.service.deletetaskbyid(taskId).subscribe((res: any) => {
      this.getAllTasks(this.id);
      // console.log(res);
    });
  }

  updatetask(taskId: any) {
    this.service.setTaskStatus(taskId).subscribe();
    this.getAllTasks(this.id);
    

  }

  LogOut() {
    sessionStorage.clear();
  }
}
