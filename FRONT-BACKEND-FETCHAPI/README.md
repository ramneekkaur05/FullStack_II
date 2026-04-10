# FRONT-BACKEND-FETCHAPI

This project demonstrates full CRUD integration between a React frontend and a Spring Boot backend using the Fetch API.

## What this project shows
- React frontend sends HTTP requests with `fetch()`
- Spring Boot backend exposes REST APIs for student records
- MySQL is used for persistence through Spring Data JPA
- CORS is configured to allow frontend-backend communication during local development

## Project structure
- `BACKEND/` - Spring Boot API (Java + JPA + MySQL)
- `FRONTEND/` - React app (Vite) consuming backend APIs

## Tech stack
- Frontend: React, Vite, JavaScript
- Backend: Spring Boot, Spring Web MVC, Spring Data JPA
- Database: MySQL

## Screenshots
<img width="1125" height="964" alt="image" src="https://github.com/user-attachments/assets/82a30b9b-25ae-4bb2-bb3b-a3fbce2f98a0" />
<img width="1158" height="1031" alt="image" src="https://github.com/user-attachments/assets/bdc13866-fb03-43fd-b5a2-15a6413aba9f" />
<img width="1128" height="963" alt="image" src="https://github.com/user-attachments/assets/992515a1-40ed-4dd6-945f-d07460df44de" />
<img width="1112" height="957" alt="image" src="https://github.com/user-attachments/assets/94a64d10-e3d4-4fff-b768-22a0316522d5" />
<img width="1102" height="949" alt="image" src="https://github.com/user-attachments/assets/74d636ad-fbe1-4b71-a39b-bc2c12899130" />
<img width="1073" height="944" alt="image" src="https://github.com/user-attachments/assets/6f08b2d6-50b6-433a-b9d6-98f241b834f9" />
<img width="1109" height="968" alt="image" src="https://github.com/user-attachments/assets/46d09cea-df28-446b-8361-a5017f4d32c9" />



## How frontend and backend are connected
The frontend uses this base URL:
- `http://localhost:8081/api/students`

The backend runs on port `8081` and exposes endpoints under `/api/students`.

CORS is enabled for:
- `http://localhost:5173`

This allows the React app (Vite dev server) to call backend APIs from a different origin.

## Implemented APIs
Base path: `/api/students`

- `GET /get-all` - fetch all students
- `GET /{id}` - fetch student by ID
- `POST /add-student` - add student
- `PUT /update/{id}` - update student details
- `DELETE /delete/{id}` - delete student

Student payload format:

```json
{
  "id": 1,
  "name": "Ram",
  "course": "Full Stack"
}
```

## Backend setup (Spring Boot)
1. Open `BACKEND/` in Eclipse or any Java IDE.
2. Ensure Java 21 and Maven are available.
3. Create MySQL database:

```sql
CREATE DATABASE ramjava;
```

4. Verify DB config in `BACKEND/src/main/resources/application.properties`.
5. Run the Spring Boot application.
6. Backend should start at:
   - `http://localhost:8081`

## Frontend setup (React + Vite)
1. Open terminal in `FRONTEND/`.
2. Install dependencies:

```bash
npm install
```

3. Start dev server:

```bash
npm run dev
```

4. Open the Vite URL (usually `http://localhost:5173`).

## Functional flow
1. React loads and requests all students using `GET /get-all`.
2. User submits form:
   - New student -> `POST /add-student`
   - Edit student -> `PUT /update/{id}`
3. Delete action sends `DELETE /delete/{id}`.
4. After each mutation, frontend fetches latest list again.

## Notes for new viewers
- This is a simple learning-focused integration project.
- Validation and detailed error handling can be added as next improvements.
- Credentials in `application.properties` are local-development specific and should be replaced with environment variables for production.

## Author
RAMNEEK KAUR
