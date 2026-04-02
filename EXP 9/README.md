# 🔐 Spring Security + JWT Authentication 

This project demonstrates how to implement authentication and authorization using Spring Security and JSON Web Tokens (JWT) in a RESTful API.

It showcases how users can securely log in and access protected resources by passing a Bearer Token in the Authorization header.

## 🚀 Features

- User Authentication using Email & Password
- JWT Token Generation on Login
- Stateless Session Management
- Secure REST APIs using Spring Security
- Role-based Authorization (optional extension)
- MySQL / PostgreSQL Database Integration
- Password Encryption using BCrypt

## 🛠️ Tech Stack

- Java 17+
- Spring Boot
- Spring Security
- JWT (JSON Web Token)
- Hibernate / JPA
- MySQL / PostgreSQL
- Maven

## 📁 Project Structure

```text
com.agam.rest_example
│
├── Controller
├── Service
├── Repository
├── Entity
├── Security
└── Config
```

## 🔑 Authentication Flow

1. User sends login request with credentials
2. Server validates user using Spring Security
3. JWT token is generated
4. Token is returned to client
5. Client sends token in Authorization header for protected APIs
6. Server validates token before granting access

## 📌 API Endpoints

### 🔓 Public Endpoints

- `POST /register`
- `POST /login`

### 🔒 Protected Endpoints

- `GET /api/students/{id}`

Headers: `Authorization: Bearer <your_jwt_token>`

## 🧪 Testing with Postman

1. Login using `/api/auth/login`
2. Copy token
3. Use it in Authorization header for protected APIs

## 🔐 Security Configuration

- CSRF disabled
- Stateless session
- JWT filter added before `UsernamePasswordAuthenticationFilter`
- BCrypt password encoding

## Screenshots
<img width="1242" height="818" alt="Screenshot 2026-04-02 191842" src="https://github.com/user-attachments/assets/64a59d3f-8eed-4df0-a0bb-7411c1c308e7" />
<img width="1578" height="685" alt="Screenshot 2026-04-02 191645" src="https://github.com/user-attachments/assets/dcb36de3-a1e2-4199-bb21-a7d71764e055" />
<img width="1590" height="619" alt="Screenshot 2026-04-02 191740" src="https://github.com/user-attachments/assets/f470d002-8c5b-4665-a424-a57fb8c799ca" />
<img width="1573" height="719" alt="Screenshot 2026-04-02 191824" src="https://github.com/user-attachments/assets/d1bafbb7-967b-4e86-bb04-a5a71d89be82" />













