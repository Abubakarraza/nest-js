import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodo, UpdateTodo } from './todo.dto';
import { TodoPipe } from './todo.pipe';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Get('/user/:id/:slug')
  @UsePipes(TodoPipe)
  getUser(@Param() data) {
    return {
      user: 'Abubakar Raza',
      id: data.id,
    };
  }
  @Get('/')
  getTodo() {
    return this.todoService.getTodo();
  }
  @Post('/create')
  createTodo(@Body() data: CreateTodo) {
    return this.todoService.createTodo(data);
  }
  @Put('/update')
  updateTodo(@Body() data: UpdateTodo) {
    return this.todoService.updateTodo(data);
  }
  @Delete('/:id')
  deleteTodo(@Param('id') id: string) {
    return this.todoService.DeleteTodo(id);
  }
}
