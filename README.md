Simple API for creating Order

## Installation

```bash

$ npm install 
port 8000
NODE_ENV='development'
ACCESS_TOKEN_SECRET='******'
JWT_TOKEN_VALIDITY='7d'
SERVICE_NAME='Tradevu-Service'
PORT=8000
MONGO_URI='your mongodb Url'


AZURE_ACCT_NAME=your azure name
AZURE_ACCT_KEY= azure apikey
AZURE_CONTAINER_NAME=container name
```

## Running the app

```bash
# development
$ npm run start

```

### Using  Database

1. **Mongodb** .
2. **ORM Mongoose** : Initialize Prisma ORM.

### Using Docker

1. Pull the database image and start the container:
2. docker-compose up -d

#### End Points

.http://localhost:8000/v1/auth/signup  

. http://localhost:8000/v1/auth/login

.http://localhost:8000/v1/orders

.http://localhost:8000/v1/orders/upload-document
