import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.task.createMany({
    data: [
      {
        color: 'red',
        completed: false,
        title: 'Call Mom',
      },
      {
        color: 'blue',
        completed: true,
        title: 'Feed the cats',
      },
      {
        color: 'white',
        completed: false,
        title: 'Brush your teeth timmy',
      },
    ],
  });
  const tasksCount = await prisma.task.count();
  console.log(`Finished adding tasks - added ${tasksCount}`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
