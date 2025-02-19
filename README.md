# Online Instant Messaging Platform
This project is a real-time chat application built with Java Swing for the GUI and Spring Boot WebSockets for the backend. It allows multiple users to connect and chat in real time over the internet. The WebSocket server is hosted on Render using Docker, making it accessible from anywhere.

## How it Works 

![system-design](https://github.com/user-attachments/assets/ee062684-5767-44d9-8dfc-271238693ae7)

*high-level component interaction diagram*

The Messaging App consists of a ClientGUI, which sends messages through MyStompClient to the WebSocket Server for broadcasting. The server relays messages back to MyStompClient, which updates the ClientGUI. The MessageListener processes incoming messages and updates the UI accordingly.

## Features
### Real-Time Bidirectional Messaging 
Uses WebSockets with STOMP for instant, two-way communication between clients.
### Java Swing GUI with Dynamic Resizing 
Messages automatically adjust to window size for better readability.
### Spring Boot WebSocket Server 
Manages message routing and client connections for efficient broadcasting.
### Multi-Client Support 
Allows multiple users to connect and chat simultaneously over the internet.
### Cross-Network Accessibility 
Hosted on Render using Docker, making the WebSocket server accessible from any device.
### Efficient WebSocket Message Handling
Processes incoming and outgoing messages through an event-driven architecture.
### Automatic Redeployment from GitHub 
The WebSocket server is deployed on Render and updates automatically when changes are pushed to the GitHub repository.

## Future Improvements
- Replace Swing GUI with a React frontend for web-based access.
- Implement user authentication & chat history storage.
