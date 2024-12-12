# Work Nest Task Management App (Backend)

This is the backend for the Work Nest app for creating & managing tasks/to-do lists.

## Setup

You'll need `Node` & `Docker` to run this app.

### Initial Configuration

You'll need to setup you're own `.env` file before running, for simplicity I included a test one to get you up and running quick

```env
MYSQL_ROOT_PASSWORD=rootPass
DATABASE_URL=mysql://root:${MYSQL_ROOT_PASSWORD}@localhost:3306/db
API_PORT=3003
```

```bash
# configure correct Node Version
nvm use lts/iron
# install everything
npm i

## Setup DB
## Ensure Docker is running

# Start mySQL Container
docker compose up -d
# Initial DB migration, only needs run on first setup or new DB setup
npx prisma migrate dev --name init

# Start App
npm run start:dev # or just start for non-watching

# Optional, Fill with test data
npx ts-node test-data-migration.ts

# Optional, Test API
curl --request GET \
  --url http://localhost:3003/tasks
```
