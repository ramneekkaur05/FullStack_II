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

## SCREENSHOTS
### POSTMAN

a. READ DATA (GET)
<img width="1123" height="914" alt="Screenshot 2026-03-25 135933" src="https://github.com/user-attachments/assets/ababbdf3-c122-4500-89af-961001ed1e9c" />

b. ADD DATA (POST)
<img width="1101" height="746" alt="Screenshot 2026-03-25 140419" src="https://github.com/user-attachments/assets/b4c6155d-7779-42a4-be04-58e443a573ce" />

c. UPDATE 
<img width="1102" height="742" alt="Screenshot 2026-03-25 140629" src="https://github.com/user-attachments/assets/10886205-440b-400c-a8b3-acda6f5a95b9" />

d. DELETE
BEFORE DELETEING -:
<img width="1105" height="849" alt="Screenshot 2026-03-25 140715" src="https://github.com/user-attachments/assets/00d2949f-4d92-4f03-8841-1d2691fd23b1" />

AFTER DELETING ID:103 -:
<img width="1101" height="742" alt="Screenshot 2026-03-25 142640" src="https://github.com/user-attachments/assets/ac77da5f-e4ae-48cc-9888-f157faa9fdad" />


### CODE IN ECLLIPSE
<img width="564" height="237" alt="Screenshot 2026-03-25 143259" src="https://github.com/user-attachments/assets/e1869ddb-ba14-4ced-b04f-ce54e8c42a7d" />
<img width="514" height="551" alt="Screenshot 2026-03-25 143357" src="https://github.com/user-attachments/assets/bf1b665a-9596-48c8-a827-33cecf3c6f46" />
<img width="368" height="520" alt="Screenshot 2026-03-25 143432" src="https://github.com/user-attachments/assets/b6933d68-65cf-41e3-8f2f-32535a041d6b" />
<img width="633" height="240" alt="Screenshot 2026-03-25 143444" src="https://github.com/user-attachments/assets/ffac5546-a035-41ff-89b2-0dd4a95839fc" />
<img width="620" height="528" alt="Screenshot 2026-03-25 143452" src="https://github.com/user-attachments/assets/42b4da5f-3c03-49a4-a4f5-316d42e33419" />
<img width="622" height="213" alt="Screenshot 2026-03-25 143501" src="https://github.com/user-attachments/assets/82ed00f1-983a-4f4d-a462-fb958feceb78" />

### RUNNING PROJECT
<img width="1569" height="869" alt="Screenshot 2026-03-25 143655" src="https://github.com/user-attachments/assets/8c72a85a-e426-4e7a-aa05-d184631375b0" />


## 🗂️ Project Structure

A typical Spring Boot REST API project looks like this:

    src/main/java/...  
    ├── controller/      # API endpoints
    ├── model/           # Data models/entities
    ├── repository/      # Database access
    ├── service/         # Business logic
    └── Application.java # Main application

Screenshot (Ecllipse) -:

<img width="295" height="300" alt="Screenshot 2026-03-25 142914" src="https://github.com/user-attachments/assets/46ca21a9-01b0-4b56-be89-f2c525b41a6c" />


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

Developed by **RAMNEEK KAUR**
