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
        text: "Task 1",
        day: "day 1",
        active: true
      },
      {
        id: 2,
        text: "Task 2",
        day: "day 2",
        active: false
      },
      {
        id: 3,
        text: "Task 3",
        day: "day 3",
        active: true
      },
      {
        id: 4,
        text: "Task 4",
        day: "day 4",
        active: false
      }
    ]
   }

  ngOnInit(): void {
  }

}
