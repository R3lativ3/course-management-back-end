# course-management-back-end

![Untitled Diagram drawio (7)](https://github.com/user-attachments/assets/75e2db03-ac35-4339-bdf7-f40a4ced218c)

## Description

This project is a backend application for managing course student assignments. It provides a RESTful API built with Express.js and uses Sequelize as an ORM to interact with a MySQL database, used for code interview

## Technologies Used

- Node.js
- TypeScript
- Express.js
- MySQL
- Sequelize
- Swagger for API documentation

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or higher)
- npm (v6 or higher)
- MySQL

## Installation

1. Clone the repository:

```
git clone [your-repo-link]
```

2. Change to the project directory:

```
cd course-student-assignment
```

3. Install the dependencies:

```
npm install
```

4. Create a `.env` file in the root directory and add your database configuration (please request me the access):

```
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_HOST=localhost
```

## Usage

To run the application in development mode:

```
npm run dev
```

This will start the server with nodemon, which will watch for file changes and automatically restart the server.

To build and run the application in production mode:

```
npm run build
npm start
```

## API Documentation

The API documentation is available through Swagger UI. After starting the server, you can access it at:

```
http://localhost:3000/api-docs
```
Or the port that you have set in the .env file

## Scripts

- `npm run build`: Compiles TypeScript to JavaScript
- `npm start`: Starts the compiled application
- `npm run dev`: Starts the application in development mode with auto-reloading

## Dependencies

- dotenv: For managing environment variables
- express: Web framework for Node.js
- express-list-endpoints: Middleware to list all registered endpoints
- mysql2: MySQL client for Node.js
- sequelize: ORM for Node.js
- swagger-jsdoc: Generates Swagger/OpenAPI specification
- swagger-ui-express: Serves Swagger UI for API documentation

## Dev Dependencies

- @types/express: TypeScript definitions for Express
- @types/node: TypeScript definitions for Node.js
- @types/swagger-jsdoc: TypeScript definitions for swagger-jsdoc
- @types/swagger-ui-express: TypeScript definitions for swagger-ui-express
- nodemon: Utility for monitoring changes and automatically restarting the server
- ts-node: TypeScript execution environment for Node.js
- typescript: TypeScript language


## Contact

If you have any questions or feedback, please contact the project maintainers.
