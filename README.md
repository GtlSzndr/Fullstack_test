# Clone repository
````
git clone https://github.com/GtlSzndr/Fullstack_test.git
````
---
# Angular Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## Development instructions

### How to login with admin (sample user)

username: 
````
admin
````
password: 
````
f1test2018
````

### Connect to mysql db

host/port:
````
localhost:3306
````
username: 
````
root
````
password: 
````
123456
````

# Getting started

## Installation on Windows
- Install MySQL
- Install Node.js: You can download Node.js from its' official page:
https://nodejs.org/en/download/

- Inside angular-frontend directory:
````
npm install
````

# Start application
Inside `angular-frontend` directory:
````
npm start
````
You can reach the application in any browser at `http://localhost:4200/`
<br/><br/>
---
# SpringBoot Backend

## What you need
- `JDK 1.17` or later

- `Maven 3.8.6+`

- You can also import the code straight into your IDE, e.g:
  - `Spring Tool Suite (STS)`

# Run the Application
## From Spring Tool Suite (STS)

After you opened the `springboot-backend` directory with IDE:
(File -> Open Projects from File system)
````
In Package Explorer: ( if not shown: Window -> Show View -> Package Explorer)

1. sboot-backend
2. src/main/java
3. com.java.backend
4. (right click) SbootBackendApplication.java
5. Run As
6. Spring Boot App
````
<br/><br/>

---
# How to use the Webapplication

Go in any browser to: `http://localhost:4200/`
The first page you see is the home page. There you can find:

- `Menubar with Show teams and Login options,`
- `Login form,`
- `and a Show teams button`

## Show teams

The page will route you to the `http://localhost:4200/f1-list` url.
There you can see all the F1 teams with their data from the Database. For example:
- Team name: `Scuderia Ferrari`
- Year of Establishment: `1950`
- Number of World Championships won: `16`
- Is entry fee paid?: `Paid(yes) / Unpaid(no)`

## Login

- username: `admin`
- password: `f1test2018`

  Submit with `Login` button.

## After Login

  If you go to the Show teams page, you can see a `Create` button and next to all of the exist team: `Modify` and `Delete` button.
  

- ### Create team

  If you click ont the `Create` button, a MatDialog will show. There you can add all of the details of a team and submit with the `Create` button

- ### Modify team data

  If you click ont he `Modify` button, a MatDialog will show. There you can modify all of the details of a team and submit with the `Submit` button

- ### Delete team

  If you click ont the `Delete` button, the row with the details of the team will be deleted immediately!

In the menu the `Login` button will change to `Logout`. After click you will be routed to the home page
<br/><br/>

---
# Links:
## Download
- Spring Tool Suite 4: https://spring.io/tools
- Node.js: https://nodejs.org/en/download/
- MySQL Workbench: https://dev.mysql.com/downloads/windows/installer/8.0.html

## Help for STS4 setup
- https://www.geeksforgeeks.org/how-to-download-and-install-spring-tool-suite-spring-tools-4-for-eclipse-ide/
