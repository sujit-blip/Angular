import { Component } from '@angular/core';
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoComponent],
  template: `
    <div class="container mt-5">
      <app-todo></app-todo>
    </div>
  `,
})
export class AppComponent {}

