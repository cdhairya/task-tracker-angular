import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  text: string;
  day: string;
  active: boolean = false;
  showAddTask: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.text) {
      alert('Please add a task!');
      return;
    }
    // const date = new Date();
    // const taskDate = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
    // const taskTime = date.getHours()+':'+date.getMinutes;
    const newTask = {
      id: Date.now(),
      text: this.text,
      day: this.day,
      active: this.active,
    };

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.active = false;
  }
}
