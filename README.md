# exercise - MERN App

## Introduction
This is a full stack application that tracks user exercises. It has a front-end built with React to display and manage the data, and a backend built with Express.js, which interacts with a MongoDB database to provide CRUD operations for the exercise data.

## Prerequisites
- Node.js (version 14 or above)
- MongoDB
- React.js
- Express.js

## Installation or Setup
1. Clone this repository.
2. Navigate into the repository in your terminal.
3. Run `npm install` to install the required packages.
4. Create a **'.env'** file in the root directory of your project. Add the following, replacing 'your_connection_string' with your actual MongoDB connection string: **MONGODB_CONNECT_STRING=your_connection_string**

## Running the Application
To start the application, run `npm start` in the project directory. This will start the Express.js server, which will serve the API endpoints. The server listens on **'localhost:3000'**.

## Usage

This application provides both a user interface (UI) for managing exercises, and an API with CRUD operations. Here's how to use each:

### User Interface

The React front-end provides a table view of all the exercises. 

- **Viewing All Exercises**: The main page displays a table with all the existing exercises.

- **Creating an Exercise**: Click the "Add Exercise" button, fill out the form, and click "Submit" to create a new exercise.

- **Updating an Exercise**: Click the "Edit" button next to the exercise you wish to modify. This will bring up a form with the exercise's current data, which you can update and save by clicking "Submit".

- **Deleting an Exercise**: Click the "Delete" button next to the exercise you want to remove.

### API Endpoints

This application allows you to perform CRUD operations on exercises through the following API endpoints:

- **/exercises**: This route is for displaying, adding, editing, and deleting exercises. Depending on the HTTP method used, you can perform the following actions:
  - 'GET': Retrieves all exercises.
  - 'POST': Adds a new exercise. Include the exercise data (name, reps, weight, unit, date) in the request body.
- **/exercises/:_id**: This route is used for operations on a specific exercise, replacing ':_id' with the ID of the exercise. Depending on the HTTP method used, you can perform the following actions:
  - 'PUT': Updates the specified exercise. Include the updated exercise data (name, reps, weight, unit, date) in the request body.
  - 'DELETE': Deletes the specified exercise.



## Project Structure and Implementation Details
The project is divided into three main parts:

1. **React Frontend ('ExerciseList.js')**: This is a simple table that displays a list of exercises. The data is passed in via the **'exercises'** prop.
2. **Express.js Router ('exercises-router.js')**: This router handles requests to the **/exercises** endpoint. It contains routes for creating, retrieving, updating, and deleting exercises. It uses the **exercises-model.js** to interact with the MongoDB database.
3. **Mongoose Model ('exercises-model.js')**: This file defines the schema for the Exercise model and methods for creating, retrieving, updating, and deleting exercises in the MongoDB database. These methods are exported for use in the router.

