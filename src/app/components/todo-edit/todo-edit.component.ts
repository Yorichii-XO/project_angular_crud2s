import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  todo: any = { id: 0, title: '' };

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id && id !== 0) {
      const todos = JSON.parse(localStorage.getItem('todos') || '[]');
      this.todo = todos.find((todo: any) => todo.id === id) || this.todo;
    }
  }

  save(): void {
    const todos = JSON.parse(localStorage.getItem('todos') || '[]');
    if (this.todo.id === 0) {
      this.todo.id = Math.max(...todos.map((t: any) => t.id), 0) + 1;
      todos.push(this.todo);
    } else {
      const index = todos.findIndex((t: any) => t.id === this.todo.id);
      todos[index] = this.todo;
    }
    localStorage.setItem('todos', JSON.stringify(todos));
    this.router.navigate(['/']);
  }
}
