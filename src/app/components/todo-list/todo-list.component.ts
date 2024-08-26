import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  imports: [CommonModule, FormsModule]
})
export class TodoListComponent {
  todos = [
    { id: 1, title: 'Learn Angular' },
    { id: 2, title: 'Build an App' }
  ];

  newTodoTitle: string = '';
  editingTodoId: number | null = null;

  addTodo() {
    if (this.newTodoTitle.trim()) {
      if (this.editingTodoId !== null) {
        // Edit existing todo
        const todo = this.todos.find(todo => todo.id === this.editingTodoId);
        if (todo) {
          todo.title = this.newTodoTitle.trim();
        }
        this.editingTodoId = null; // Clear editing mode
      } else {
        // Add new todo
        const newId = this.todos.length ? Math.max(...this.todos.map(todo => todo.id)) + 1 : 1;
        this.todos.push({ id: newId, title: this.newTodoTitle.trim() });
      }
      this.newTodoTitle = ''; // Clear input field
    }
  }

  edit(id: number) {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      this.newTodoTitle = todo.title; // Set input field to todo title
      this.editingTodoId = id; // Set editing mode
    }
  }

  delete(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    if (this.editingTodoId === id) {
      this.newTodoTitle = ''; // Clear input field if the edited todo is deleted
      this.editingTodoId = null; // Clear editing mode
    }
  }
}
