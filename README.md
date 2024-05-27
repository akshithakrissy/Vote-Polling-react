# Vote Polling Application

This is a Vote Polling Application built using Node.js, Express, and React. The application allows users to cast votes for different candidates, view vote counts, and manage voter information.

## Features

- **Vote Casting:** Users can cast votes for candidates.
- **View Vote Counts:** View the number of votes each candidate has received.
- **Manage Voter Information:** Add, update, and delete voter information.
- **Real-time Updates:** The application updates in real-time as votes are cast or voter information is modified.

## Technologies Used

- **Backend:** Node.js, Express
- **Frontend:** React, React Router, axios, Bootstrap
- **Database:** In-memory storage (can be replaced with any persistent storage)

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. **Install dependencies:**


# For the backend
cd backend
npm install

# For the frontend
cd ../frontend
npm install


### Running the Application

1. **Start the backend server:**

cd backend
node server.js


The backend server will run on `http://localhost:5000`.

2. **Start the frontend server:**

cd frontend
npm start

The frontend server will run on `http://localhost:3000`.

API Endpoints

- **GET `/Voter`**: Retrieve all voters.
- **POST `/Voter`**: Add a new vote.
- **DELETE `/delete/:i`**: Delete a voter by ID.
- **PUT `/update/:i`**: Update voter information by ID.
- **GET `/sonika`**: Get the number of votes for Sonika.
- **GET `/Dharaniya`**: Get the number of votes for Dharaniya.
- **GET `/Akshitha`**: Get the number of votes for Akshitha.
- **GET `/Pavithra`**: Get the number of votes for Pavithra.
- **GET `/sonika/view`**: View details of votes for Sonika.
- **GET `/Dharaniya/view`**: View details of votes for Dharaniya.
- **GET `/Akshitha/view`**: View details of votes for Akshitha.
- **GET `/Pavithra/view`**: View details of votes for Pavithra.

Project Structure

vote-polling-app/
├── backend/
│   ├── server.js
│   └── ...
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── style/
│   │   ├── App.js
│   │   └── ...
│   ├── public/
│   ├── package.json
│   └── ...
├── README.md
└── ...
