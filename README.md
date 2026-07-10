# Personal Portfolio Website

A modern full-stack personal portfolio website built to showcase my skills, projects, education, certifications, and achievements. The project is developed using **Flask**, **MySQL**, **HTML**, **CSS**, and **JavaScript**, featuring a responsive UI with smooth animations and a contact form.

> **GitHub Repository:** https://github.com/MahimaSinghRathore/Portfolio

---
## Live Demo

**Website:** https://portfolio-frontend-ebon-seven.vercel.app

## Features

- Responsive modern portfolio design
- Interactive animations using AOS
- Dynamic project and skill management
- Professional hero section
- Education timeline
- Certifications section
- Achievements section
- Contact form
- Resume download
- GitHub and LinkedIn integration

---

## Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript
- Font Awesome
- Google Fonts
- AOS (Animate On Scroll)

### Backend
- Python
- Flask

### Database
- MySQL

---

## Project Structure

```
Portfolio/
│
├── app.py
├── config.py
├── requirements.txt
├── Procfile
├── portfolio_db.sql
│
├── templates/
│   ├── base.html
│   └── index.html
│
├── static/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── images/
│
└── README.md
```

---

## Database

The project uses **MySQL** as the backend database.

### Tables

- about
- skills
- projects
- messages

The SQL schema is provided in:

```
portfolio_db.sql
```

Import it into MySQL before running the project.

---

## Backend Functionality

The Flask backend provides:

- Fetch portfolio information
- Load skills dynamically
- Display projects from MySQL
- Store contact form submissions
- Render templates using Jinja2

Main Routes:

```
/
```

Displays portfolio data.

```
/contact
```

Stores contact messages into the MySQL database.

---

## Installation

### Clone Repository

```bash
git clone https://github.com/MahimaSinghRathore/Portfolio.git
```

```bash
cd Portfolio
```

---

### Install Dependencies

```bash
pip install -r requirements.txt
```

---

### Create Database

```sql
CREATE DATABASE portfolio_db;
```

Import

```
portfolio_db.sql
```

using MySQL Workbench.

---

### Configure Database

Update

```
config.py
```

```python
MYSQL_HOST = "localhost"
MYSQL_USER = "root"
MYSQL_PASSWORD = "YOUR_PASSWORD"
MYSQL_DATABASE = "portfolio_db"

SECRET_KEY = "your_secret_key"
```

---

### Run

```bash
python app.py
```

Open

```
http://127.0.0.1:5000
```

---

## Deployment

### Frontend

The portfolio frontend is deployed on **Vercel**.

### Backend

The backend is implemented using **Flask**.

### Database

The application uses **MySQL** for dynamic portfolio content and contact message storage.

> The repository contains the complete Flask backend and MySQL database implementation. The Vercel deployment serves the frontend version for demonstration purposes.

---

## Projects Included

- Hostel Smart Water Management System
- Medical Leave Management System
- CPU Scheduling Simulator
- Down Syndrome Detection Using Deep Learning

---

## Skills

- C
- C++
- Python
- JavaScript
- HTML
- CSS
- Bootstrap
- Flask
- PHP
- MySQL
- TensorFlow
- Keras
- OpenCV
- NumPy
- Chart.js
- Matplotlib
- Git
- GitHub

---

## Contact

**Mahima Singh**

Email:

```
mahima30031997@gmail.com
```

GitHub:

https://github.com/MahimaSinghRathore

LinkedIn:

https://www.linkedin.com/in/mahima-singh-rathore

---

## Future Enhancements

- Admin Dashboard
- Blog Section
- Authentication
- Dark/Light Theme Toggle
- PostgreSQL Support
- Docker Deployment
- CI/CD Integration

---

## License

This project is developed for educational purposes and portfolio demonstration.
