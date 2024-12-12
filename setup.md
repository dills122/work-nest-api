
Setup

Create a test-data file to fill db with test records

```bash
docker compose up -d
npx prisma migrate dev --name init

# Test & add mock data
npx ts-node test-data-migration.ts
```
