import cron from 'node-cron';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function performScheduledTask() {
  try {
    console.log('Running scheduled task...');
    const users = await prisma.user.findMany();
    console.log(`Found ${users.length} users`);
  } catch (error) {
    console.error('Error in scheduled task:', error);
  }
}

const cronJob = cron.schedule('0 2 * * *', () => {
  performScheduledTask();
});

process.on('SIGINT', () => {
  console.log('Stopping cron job...');
  if (cronJob) cronJob.stop();
  process.exit();
});

process.on('SIGTERM', () => {
  console.log('Stopping cron job...');
  if (cronJob) cronJob.stop();
  process.exit();
});
console.log('Cron job scheduled.');