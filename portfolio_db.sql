DROP DATABASE IF EXISTS portfolio_db;
CREATE DATABASE portfolio_db;
USE portfolio_db;

-- ===========================
-- ADMIN TABLE
-- ===========================

CREATE TABLE admin (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL
);

INSERT INTO admin(username, password)
VALUES ('admin', 'admin123');


-- ===========================
-- ABOUT TABLE
-- ===========================

CREATE TABLE about (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    profession VARCHAR(150),
    college VARCHAR(255),
    branch VARCHAR(150),
    cgpa DECIMAL(3,2),
    email VARCHAR(150),
    phone VARCHAR(20),
    location VARCHAR(150),
    github VARCHAR(255),
    linkedin VARCHAR(255),
    portfolio VARCHAR(255),
    bio TEXT,
    profile_image VARCHAR(255),
    resume VARCHAR(255)
);

INSERT INTO about(
name,
profession,
college,
branch,
cgpa,
email,
phone,
location,
github,
linkedin,
portfolio,
bio,
profile_image,
resume
)

VALUES(

'Mahima Singh',

'Computer Science Engineering Student',

'Jaypee University of Information Technology',

'Computer Science Engineering',

8.78,

'mahima30031997@gmail.com',

'',

'Bareilly, Uttar Pradesh',

'https://github.com/MahimaSinghRathore',

'',

'',

'Passionate Computer Science Engineering student interested in Software Development, Artificial Intelligence, Machine Learning, Full Stack Web Development and Problem Solving.',

'profile.jpg',

'resume.pdf'

);


-- ===========================
-- SKILLS TABLE
-- ===========================

CREATE TABLE skills (

id INT AUTO_INCREMENT PRIMARY KEY,

skill_name VARCHAR(100)

);

INSERT INTO skills(skill_name)
VALUES

('C'),
('C++'),
('Python'),
('Java'),
('JavaScript'),
('HTML'),
('CSS'),
('Bootstrap'),
('Flask'),
('MySQL'),
('Git'),
('GitHub'),
('TensorFlow'),
('OpenCV'),
('NumPy'),
('Pandas'),
('Machine Learning'),
('Data Structures'),
('Algorithms'),
('DBMS'),
('Operating System'),
('Computer Networks');


-- ===========================
-- PROJECTS TABLE
-- ===========================

CREATE TABLE projects (

id INT AUTO_INCREMENT PRIMARY KEY,

title VARCHAR(255),

description TEXT,

technologies VARCHAR(255),

github_link VARCHAR(255),

demo_link VARCHAR(255),

image_url VARCHAR(255)

);

INSERT INTO projects
(
title,
description,
technologies,
github_link,
demo_link,
image_url
)

VALUES

(
'Hostel Smart Water Management System',
'Simulation-based hostel water management dashboard with analytics.',
'Flask, SimPy, Chart.js',
'https://github.com/MahimaSinghRathore',
'',
'water.png'
),

(
'Medical Leave Management System',
'Web application for managing student leave requests.',
'PHP, MySQL',
'https://github.com/MahimaSinghRathore',
'',
'leave.png'
),

(
'Down Syndrome Detection',
'Deep learning based facial image classification system using transfer learning.',
'Python, TensorFlow, OpenCV',
'https://github.com/MahimaSinghRathore',
'',
'down.png'
),

(
'CPU Scheduling Simulator',
'Interactive simulator implementing FCFS, SJF, Priority and Round Robin scheduling.',
'HTML, CSS, JavaScript',
'https://github.com/MahimaSinghRathore',
'',
'cpu.png'
);


-- ===========================
-- EDUCATION TABLE
-- ===========================

CREATE TABLE education (

id INT AUTO_INCREMENT PRIMARY KEY,

degree VARCHAR(255),

institute VARCHAR(255),

year VARCHAR(50),

score VARCHAR(50)

);

INSERT INTO education
(degree,institute,year,score)

VALUES

(
'B.Tech Computer Science Engineering',
'Jaypee University of Information Technology',
'2023 - 2027',
'CGPA 8.78
),

(
'Class XII',
'BBL Public School',
'2023',
'82.4%'
),

(
'Class X',
'Padmavati Academy',
'2021',
'86%'
);


-- ===========================
-- CERTIFICATIONS
-- ===========================

CREATE TABLE certifications (

id INT AUTO_INCREMENT PRIMARY KEY,

certificate_name VARCHAR(255),

organization VARCHAR(255),

certificate_link VARCHAR(255)

);


-- ===========================
-- ACHIEVEMENTS
-- ===========================

CREATE TABLE achievements (

id INT AUTO_INCREMENT PRIMARY KEY,

achievement TEXT

);


-- ===========================
-- EXPERIENCE
-- ===========================

CREATE TABLE experience (

id INT AUTO_INCREMENT PRIMARY KEY,

company VARCHAR(255),

role VARCHAR(255),

duration VARCHAR(100),

description TEXT

);


-- ===========================
-- CONTACT MESSAGES
-- ===========================

CREATE TABLE messages (

id INT AUTO_INCREMENT PRIMARY KEY,

name VARCHAR(100),

email VARCHAR(150),

message TEXT,

created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);