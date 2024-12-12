import { Module } from '@nestjs/common';
import { TasksController } from './app.controller';
import { TaskService } from './task.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [TasksController],
  providers: [TaskService, PrismaService],
})
export class AppModule {}
