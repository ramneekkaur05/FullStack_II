# EXP 10

Spring Boot (WebSocket) backend with a React + Vite frontend using STOMP/SockJS.

## Structure

- backend/: Spring Boot app (Java 21, Web MVC + WebSocket)
- frontend/: React + Vite client

## Prerequisites

- Java 21
- Maven (or use the Maven wrapper in backend/)
- Node.js + npm

## Run backend

From EXP10/backend:

- Windows: mvnw.cmd spring-boot:run
- macOS/Linux: ./mvnw spring-boot:run

## Run frontend

From EXP10/frontend:

- npm install
- npm run dev

## Notes

- WebSocket client uses STOMP over SockJS.
- Default ports depend on your Spring Boot and Vite configuration.
