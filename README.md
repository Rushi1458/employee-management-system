# Employee Management System

A full-stack **Employee Management System** built using **Spring Boot**, **React**, and **MySQL**. This application enables users to efficiently manage employee records through a modern web interface and a RESTful backend.

---

## 📌 Features

- Add a new employee
- View all employees
- Update employee information
- Delete employees
- Search employee records
- Responsive and user-friendly interface
- RESTful API architecture
- Backend validation and exception handling

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Bootstrap 5
- Axios
- React Router DOM
- React Toastify

### Backend
- Java 17
- Spring Boot
- Spring Web
- Spring Data JPA
- Hibernate
- Maven

### Database
- MySQL

---

## 📂 Project Structure

```
EmployeeManagementSystem-Coupled/
│
├── EmployeeManagementSystem/          # Spring Boot Backend
│   ├── src/
│   ├── pom.xml
│   └── ...
│
├── employee-management-frontend/      # React Frontend
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
└── README.md
```

---

## ⚙️ Prerequisites

Before running this project, ensure you have installed:

- Java 17 or later
- Maven
- Node.js (18+ recommended)
- npm
- MySQL Server
- Git
- IntelliJ IDEA / Eclipse (Backend)
- VS Code (Frontend)

---

# 🚀 Backend Setup

### Clone the repository

```bash
git clone https://github.com/your-username/employee-management-system.git
```

Go to the backend folder

```bash
cd EmployeeManagementSystem
```

### Configure MySQL

Create a database.

```sql
CREATE DATABASE employee_management;
```

Update your `application.properties`.

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/employee_management
spring.datasource.username=your_username
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
```

### Run the backend

Using Maven

```bash
mvn spring-boot:run
```

or

Run the `EmployeeManagementSystemApplication` class from your IDE.

The backend will start on

```
http://localhost:8080
```

---

# 💻 Frontend Setup

Go to the frontend folder

```bash
cd employee-management-frontend
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

The frontend will be available at

```
http://localhost:5173
```

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/employees | Get all employees |
| GET | /api/employees/{id} | Get employee by ID |
| POST | /api/employees | Create employee |
| PUT | /api/employees/{id} | Update employee |
| DELETE | /api/employees/{id} | Delete employee |

---

## 📸 Screenshots

Add screenshots here.

Example:

```
screenshots/
├── home.png
├── add-employee.png
├── update-employee.png
```

Then include them like:

```markdown
![Home](screenshots/home.png)
```

---

## 📖 How It Works

1. User opens the React application.
2. React sends HTTP requests using Axios.
3. Spring Boot REST APIs process requests.
4. Spring Data JPA communicates with MySQL.
5. JSON responses are returned to the frontend.
6. UI updates dynamically.

---

## 🏗️ Architecture

```
React (Frontend)
        │
        │ REST API
        ▼
Spring Boot (Backend)
        │
Spring Data JPA
        │
Hibernate
        │
MySQL Database
```

---

## 📦 Dependencies

### Backend

- Spring Boot
- Spring Web
- Spring Data JPA
- MySQL Connector
- Hibernate

### Frontend

- React
- React Router
- Axios
- Bootstrap
- React Toastify
- Vite

---

## 🚀 Future Improvements

- Authentication & Authorization
- JWT Security
- Employee Profile Photos
- Pagination
- Sorting
- Advanced Search
- Dashboard Analytics
- Role-Based Access Control
- Docker Deployment
- Cloud Deployment


## 👨‍💻 Author

**Rushikesh Sunil Kalgunde**

- GitHub: https://github.com/rushi1458
- LinkedIn: [https://www.linkedin.com/](https://www.linkedin.com/in/rushikesh-kalgunde-9a0401222/)

---

## ⭐ Show Your Support

If you found this project useful, please consider giving it a ⭐ on GitHub.

---

