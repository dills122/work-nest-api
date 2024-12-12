import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Task } from '@prisma/client';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async getAllTasks(): Promise<Task[]> {
    return await this.prisma.task.findMany();
  }

  async getTaskById(taskId: number): Promise<Task> {
    return await this.prisma.task.findUnique({
      where: {
        id: taskId,
      },
    });
  }

  async deleteTask(taskId: number): Promise<number> {
    const { id } = await this.prisma.task.delete({
      where: {
        id: taskId,
      },
    });
    return id;
  }

  async createTask(task: Task): Promise<number> {
    const { id } = await this.prisma.task.create({
      data: task,
    });
    return id;
  }

  async updateTask(task: Task): Promise<number> {
    const { id } = await this.prisma.task.update({
      data: task,
      where: {
        id: task.id,
      },
    });
    return id;
  }
}
