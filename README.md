# WebRTC Signaling Server with Node.js and Socket.IO
## Overview
This project implements a real-time signaling server for WebRTC peer-to-peer connections using Node.js, Express, and Socket.IO.
It manages room creation, user connection signaling, and real-time communication necessary for setting up direct video/audio chats between clients.

Designed for group video calls with a maximum of 6 users per room.

## Features
- Real-time communication using WebSockets.
- Room management for users joining or leaving video calls.
- Handles WebRTC signaling (offer/answer exchange).
- Automatically notifies when a room is full.
- Cleans up disconnected users to maintain room health.

### Technologies Used
- Node.js
- Express.js
- Socket.IO
- WebRTC Signaling Concepts
- Environment Variables (via dotenv)
- Project Structure

### File	Purpose
server.js	Main server logic for handling connections, signaling, and room management.
.env	For storing sensitive environment variables like PORT.

### How It Works
- Clients connect to the server using Socket.IO.
- When a client joins a room, the server:
  Checks if the room exists and if it has fewer than 6 users.
- Sends the list of already connected users to the new user.
- New user initiates signaling (sending signal) to existing users.
- Existing users respond (returning signal) to the new user.
- When a user disconnects, the server removes them from the room.

This flow enables direct WebRTC peer connections between users.

### How to Run Locally
Clone the repository:

Use: 
git clone https://github.com/your-username/webrtc-signaling-server.git
cd webrtc-signaling-server

Install dependencies:

npm install

Create a .env file: touch .env

Inside .env, add:
PORT=8000

Start the server: npm start

The server will be running at:
http://localhost:8000

### Example Flow Diagram

graph TD
-------------------------
A[User A joins Room] --> B[Server registers User A]
B --> C[User B joins Room]
C --> D[Server sends User A info to User B]
D --> E[User B sends offer (signal) to User A]
E --> F[User A sends answer back]
F --> G[Peer-to-peer connection established!]

### Future Improvements
- Add support for dynamic room size limits.
- Implement TURN/STUN server integration for better WebRTC reliability.
- Add authentication for secure rooms.
- Create a frontend UI for video chat using React or Vanilla JS.

Quick Recap
This is a lightweight and efficient server to handle WebRTC signaling and enable direct P2P video/audio connections — perfect for video call apps, online classrooms, and team collaboration tools!
