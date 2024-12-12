import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from '@prisma/client';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getAllTasks(): Promise<Task[]> {
    return await this.taskService.getAllTasks();
  }

  @Get(':id')
  async getTaskById(@Param('id') id: string): Promise<Task> {
    return await this.taskService.getTaskById(parseInt(id));
  }

  @Post()
  create(@Body() task: Task): Promise<number> {
    return this.taskService.createTask(task);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatedTask: Task): Promise<number> {
    return this.taskService.updateTask({
      ...updatedTask,
      id: parseInt(id),
    });
  }

  @Put(':id')
  replace(@Param('id') id: string, @Body() updatedTask: Task): Promise<number> {
    return this.taskService.updateTask({
      ...updatedTask,
      id: parseInt(id),
    });
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string): Promise<number> {
    return await this.taskService.deleteTask(parseInt(id));
  }
}
