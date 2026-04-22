# EXP 10

## Spring Boot (WebSocket) backend with a React + Vite frontend using STOMP/SockJS.

## Screenshots
<img width="1243" height="418" alt="Screenshot 2026-04-22 183534" src="https://github.com/user-attachments/assets/369ce1a1-6f44-43e7-95d5-297fef97fb25" />
<img width="1919" height="1078" alt="Screenshot 2026-04-22 183502" src="https://github.com/user-attachments/assets/56e43f84-f925-49da-aa58-fec59364a09e" />


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

## Author 
Ramneek Kaur (23BAI70043) 6th Sem
