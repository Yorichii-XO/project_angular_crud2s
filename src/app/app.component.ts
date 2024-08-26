import { Component } from '@angular/core';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoListComponent], // Import standalone component here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo List';
}
