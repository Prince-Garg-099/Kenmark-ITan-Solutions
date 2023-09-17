# Kenmark-ITan-Solutions

# To-Do List API

This is a simple To-Do List API created using Node.js, Express.js, and Sequelize. It allows users to sign up, log in, and perform CRUD (Create, Read, Update, Delete) operations on their tasks. Each task has a unique ID, a description, a status (completed or not), and a due date. The API is designed to help users keep track of their tasks and manage them efficiently.

## Features

- User Authentication:
  - Users can sign up and create an account.
  - Users can log in with their credentials.

- Task Management:
  - Users can create new tasks with a description, status, and due date.
  - Users can view a list of all their tasks.
  - Users can view details of a specific task.
  - Users can update task information including description, status, and due date.
  - Users can mark a task as completed or incomplete.
  - Users can delete a task.

  
## Technology Stack

- Node.js: A JavaScript runtime for building server-side applications.
- Express.js: A web application framework for Node.js that simplifies routing and middleware setup.
- Sequelize: A promise-based ORM (Object-Relational Mapping) for Node.js that simplifies database interactions.

## Setup Instructions

To run this API on your local machine, follow these steps:

1. Clone the repository:

   ```
   git clone <repository_url>
   ```

2. Navigate to the project directory:

   ```
   cd todo-app
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Configure the database connection by editing the `.env` file with your database credentials.

   ```
   DB_HOST=localhost
   DB_NAME=your_database_name
   DB_USER=your_database_user
   DB_PASS=your_database_password
   ```

5. Run database migrations to create the necessary tables:

   ```
   npx sequelize-cli db:migrate
   ```

6. Start the server:

   ```
   npm start
   ```

7. The API will be available at `http://localhost:3000`.

## API Endpoints

The following endpoints are available:

- `POST /api/signup`: Create a new user account.
- `POST /api/login`: Log in with an existing user account.
- `GET /api/tasks`: Get a list of all tasks for the authenticated user.
- `GET /api/tasks/:taskId`: Get details of a specific task.
- `POST /api/tasks`: Create a new task.
- `PUT /api/tasks/:taskId`: Update an existing task.
- `DELETE /api/tasks/:taskId`: Delete a task.
- `PUT /api/tasks/:taskId/complete`: Mark a task as completed.
- `PUT /api/tasks/:taskId/incomplete`: Mark a task as incomplete.

![tasklist](https://github.com/princegarg2808/Kenmark-ITan-Solutions/assets/94054562/aa1e47ca-0407-4855-a8d9-59935f729b87)

![taskform](https://github.com/princegarg2808/Kenmark-ITan-Solutions/assets/94054562/29524b93-9a2d-4248-8b59-feea97a59d65)

![signup](https://github.com/princegarg2808/Kenmark-ITan-Solutions/assets/94054562/bde2c7f1-9ff1-48fd-9381-d7a565867f2f)

![login](https://github.com/princegarg2808/Kenmark-ITan-Solutions/assets/94054562/f5b84830-6dfe-4f2e-ba9c-142a7c93b842)



## Author
_____________________________________________
Prince Garg
National Institute Of Technology, Srinagar
_____________________________________________
