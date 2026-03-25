# 🛠️ Rest API Example

This project is a **simple Java Spring Boot REST API example** designed
for students and beginners to understand how REST APIs work.

A REST API allows clients (like web or mobile apps) to communicate with
the server using **HTTP requests** such as GET, POST, PUT, DELETE. This
project shows how to build and structure a RESTful backend easily.

------------------------------------------------------------------------

## 🚀 What You'll Learn

By exploring this project, you will learn:

-   🔹 How to build a REST API using **Spring Boot**
-   🔹 How to implement **CRUD operations**
-   🔹 How HTTP methods (GET, POST, PUT, DELETE) work
-   🔹 How to structure a backend application
-   🔹 How to interact with the API using tools like **Postman**

------------------------------------------------------------------------

## 🧠 What is REST API?

**REST (Representational State Transfer)** is an architectural style for
building web APIs.

  HTTP Method   Action
  ------------- ----------------------
  GET           Retrieve data
  POST          Create new data
  PUT           Update existing data
  DELETE        Remove data

This example project helps you understand these basics in practice.

------------------------------------------------------------------------

## 🗂️ Project Structure

A typical Spring Boot REST API project looks like this:

    src/main/java/...  
    ├── controller/      # API endpoints
    ├── model/           # Data models/entities
    ├── repository/      # Database access
    ├── service/         # Business logic
    └── Application.java # Main application

------------------------------------------------------------------------

## 🛠️ How to Run the Project

### 1️⃣ Clone the repository

``` bash
git clone https://github.com/agxmm01/Rest-API-example.git
cd Rest-API-example
```

### 2️⃣ Build & Run

Just go to RestExampleApplication.java and click on run

The backend server will start on:

👉 http://localhost:8080

------------------------------------------------------------------------

## 📍 How to Test the API

You can test the REST API using tools like:

-   Postman
-   cURL
-   VSCode REST Client

Try sending these requests:

  Request                             Description
  ---------------------------         -------------
  GET /students/yourEndpoint           Read data
  POST /students/yourEndpoint          Create data
  PUT /students/yourEndpoint/{id}      Update data
  DELETE /students/yourEndpoint/{id}   Delete data

Replace `/yourEndpoint` with the actual api defined in the code(in controller class). 

------------------------------------------------------------------------

## 🎯 Why This is Useful

This project is perfect for beginners to understand backend development
with Java and Spring Boot. It is simple, hands‑on, and practical for
real‑world learning.

------------------------------------------------------------------------

## 👨‍💻 Author

Developed by **Agampal Singh**\
GitHub: https://github.com/agxmm01
