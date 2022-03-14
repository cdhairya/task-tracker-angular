import { Component, OnInit } from '@angular/core';
import {Task} from '../../Task'
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[];

  constructor() {
    this.tasks = [
      {
        id: 1,
        title: "Task 1",
        desc: "Desc 1",
        active: true
      },
      {
        id: 2,
        title: "Task 2",
        desc: "Desc 2",
        active: false
      },
      {
        id: 3,
        title: "Task 3",
        desc: "Desc 3",
        active: true
      },
      {
        id: 4,
        title: "Task 4",
        desc: "Desc 4",
        active: false
      }
    ]
   }

  ngOnInit(): void {
  }

}
