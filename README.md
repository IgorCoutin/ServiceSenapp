- OBS: "reboque" and "remocao" is the same thing

## Install

If you have never started this api, follow these steps

1. **"npm i"** will install all the dependencies
2. **"npx prisma generate"** will allows you to use the database
3. **"npm run swagger-autogen"** will show you the documentation

## Database

In this service, I used an ORM called Prisma ORM

The **"models"** directory has been replaced by **"prisma"** directory
In this directory, the "schema.prisma" contains all the models

If you want alter the DB through the prisma, change it in schema.prisma and then run the command
**"npx prisma db push"**

After run this command, you need to run other command to generate a new prisma client
**"npx prisma generate"**

If you have changed something through the database and want to reflect this change here, run the command
**"npx prisma db pull"**

You can also view all tables and registers running the command
**"npx prisma studio"**

## Auth

For authentication, I used **JWT**
If you want verify the token, the password is the variable named **"SECRET"** in **.env** file

Some routes need the user to be authenticated, so if you want test this routes, you need access the **Login** endpoint and copy the generated **jwt token**

If you want test the needed auth endpoint routes with swagger, you need to copy the jwt and paste in "authorization field"

## Documentation

For documentation, I used **Swagger**. To view how the api works, you can access in
**http://localhost:3000/doc/**

If you want add or throw an route, after doing this, run the command
**"npm run swagger-autogen"**

If you want test the API, you can do this using the tests that the swagger provides

## Api structure

- **controllers folder** -> contains controllers that are solely responsible for taking information coming from the front and sending it to the layer below (services)

- **services folder** -> contains services that are responsible for clear data and do DB queries

- **db folder** -> solely responsible for call PrismaClient, responsible for portrays the DB

- **helpers folder** -> contains functions who are mostly repeated

- **middlewares folder** -> contains middlewares

- **prisma folder** -> contains the models of application

- **routes folder** -> contains all the routes who calls controllers and middlewares

## Error handling

- The error handling is doing by class ApiErrorController (contains all standard errors) and apiErrorHandler middleware
