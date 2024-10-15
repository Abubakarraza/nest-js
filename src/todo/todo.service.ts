import { Injectable } from '@nestjs/common';
import { CreateTodo, UpdateTodo } from './todo.dto';

@Injectable()
export class TodoService {
  todos = [];
  getTodo() {
    return {
      message: 'Successfully get Todo List',
      todos: this.todos,
    };
  }
  createTodo(data: CreateTodo) {
    const new_todo = {
      id: new Date().getTime().toString(),
      ...data,
    };
    this.todos.push(new_todo);
    return {
      message: 'New Todo Created',
      new_todo,
    };
  }
  updateTodo(data: UpdateTodo) {
    const new_todos = this.todos.map((todo) => {
      if (todo.id === data.id) {
        return {
          id: data.id,
          title: data.title,
          description: data.description,
        };
      } else return todo;
    });
    this.todos = new_todos;
    return {
      message: 'Successfully Updated Todo',
    };
  }
  DeleteTodo(id: string) {
    const new_todos = this.todos.filter((todo) => todo?.id !== id);
    this.todos = new_todos;
    return {
      message: 'Successfully Deleted Todo',
    };
  }
}
