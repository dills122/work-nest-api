import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
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
  async getTaskById(@Param('id') id: number): Promise<Task> {
    return await this.taskService.getTaskById(id);
  }

  @Post()
  create(@Body() task: Task): Promise<number> {
    return this.taskService.createTask(task);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updatedTask: Task): Promise<number> {
    return this.taskService.updateTask({
      ...updatedTask,
      id,
    });
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: number): Promise<number> {
    return await this.taskService.deleteTask(id);
  }
}
