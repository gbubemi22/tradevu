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

#### Docker Image


docker pull slimbewo/tradevuapp:latest

#### End Points

.https://tradevuapp-latest.onrender.com/v1/auth/signup

post request


{

"firstName":"John",

"lastName":"Zoom",

"email":"test@test.com",

"password":"Webnet22@",

"phoneNumber":"07030762738",

"role":"SUPPLIER" OR "BUYER"

}

. https://tradevuapp-latest.onrender.com/v1/auth/login


post request 


{

"email":"test@test.com",

"password":"Webnet22@"

}


this end point can be accessed with login user

.https://tradevuapp-latest.onrender.com/v1/orders



{

"supplierId":"66db4605fe72426ca3c90d56",

"dueDate":"2024-09-07",

"paymentMethod":"AUTOMATIC_DEBIT",

"paymentTerms":"FULL_PAYMENT",

"items":[

{

"name":"Item 1",

"quantity":10,

"price":15.99

},

{

"name":"Item 2",

"quantity":5,

"price":20.00

},

{

"name":"Item 3",

"quantity":2,

"price":30.00

},

{

"name":"Item 4",

"quantity":1,

"price":50.00

}

]

}



.https://tradevuapp-latest.onrender.com/v1/orders/upload-document


patch request to upload document
