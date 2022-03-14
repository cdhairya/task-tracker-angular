import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  localItem: string;
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasks') || '{}');
  }

  ngOnInit(): void {}

  taskDelete(task: Task) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  taskToggleActive(task: Task) {
    this.tasks[this.tasks.indexOf(task)].active =
      !this.tasks[this.tasks.indexOf(task)].active;
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  addTask(task: Task) {
    this.tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
