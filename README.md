# PutHub
This is the portfolio management system for the managers to manage their all projects.
## Features

- Cross-platform
- Responsive
- CRUD
- Roll-Based Access System
- Login / Signup

## Tech Stack

**Framework:** Vite

**Frontend:** React, typescript, CSS, HTML

**Backend:** Python, Flask

## Folder Structure

```
PutHub/
├── my_env/
├── client/
│   ├── dist/
│   │   └── index.html
│   │
│   ├── public/
│   │
│   ├── src/
│   │   ├── api
│   │   ├── components
│   │   ├── pages
│   │   ├── Routes
│   │   ├── store
│   │   ├── styles
│   │   ├── utils
│   │   ├── App.tsx
│   │   └── index.tsx
│   │
│   ├── public
│   ├── .env
│   └── vite.config.js 
│
└── server
    ├── models
    │   ├── PortfolioManagerModel.py
    │   ├── ProjectModel.py
    │   ├── ResourceModel.py
    │   └── TaskModel.py
    │
    ├── routes
    │   ├── routes.porfolio_manager.py
    │   ├── routes.project.py
    │   ├── routes.resource.py
    │   └── routes.task.py
    │
    ├── migrations/
    ├── config.py
    ├── requirements.txt
    ├── app.py
    └── README.md
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/RAJKUMARSHRIVASH/PutHub.git
```

Go to the project directory

```bash
  cd PutHub
```

Install dependencies

```bash
  pip freeze > requirements.txt
```
```
pip install --upgrade pip
```
```
pip install -r requirements.txt
```
## **How to Set Up a Virtual Environment in Python**

Here are the steps to create a virtual environment in Python:
1. Install the `virtualenv` package:
```
pip install virtualenv
```
2. Navigate to your project directory and create a virtual environment. Here,`my_env` is the name of the virtual environment.
```
cd my_project/ virtualenv my_env
```
3. Now, you have to activate the virtual environment. On `macOS` and `Linux`, you can do this:
```
source my_env/bin/activate
```
On `Windows`:
```
my_env\Scripts\activate
```
4. After the activation, your terminal prompt will change to show the name of the activated environment.

Now, you can install packages into this isolated environment. For example:
```
pip install flask
```
This will install Flask in the **`my_env`** environment, not in your global Python environment. All Python commands like **`python`**, **`pip`**, etc., used in this environment will only apply to **`my_env`**.

1. When you're done with your work, you can deactivate the environment to return to your global Python environment:
```
deactivate
```
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGOURL`

`JWTSECRETKEY`

`PORT`

Start the server

```bash
  python app.py
```

Open the app on a browser locally
```
http://localhost:8080/
```

## API Reference

### Welcome 

#### POST | GET | PATCH | DELETE
```HTTP
  POST /signup
```
```HTTP
  POST /login
```
```HTTP
  GET /portfolio-managers
```
```HTTP
  GET /portfolio-managers/<string:id>
```
```HTTP
  PATCH /portfolio-managers/<string:id>
```
```HTTP
  DELETE /portfolio-managers/<string:id>
```
```HTTP
  POST /projects
```
```HTTP
  GET /projects
```
```HTTP
  GET /projects/<string:id>
```
```HTTP
  PATCH /projects/<string:id>
```
```HTTP
  DELETE /projects/<string:id>
```

```HTTP
  POST /resources
```
```HTTP
  GET /resources
```
```HTTP
  GET /resources/<string:id>
```
```HTTP
  PATCH /resources/<string:id>
```
```HTTP
  DELETE /resources/<string:id>
```

```HTTP
  POST /tasks
```
```HTTP
  GET /tasks
```
```HTTP
  GET /tasks/<string:id>
```
```HTTP
  PATCH /tasks/<string:id>
```
```HTTP
  DELETE /tasks/<string:id>
```

## Demo

### Static / Frontend
```
https://puthub.onrender.com/
```
### Backend
```
https://puthub-backend-api-flask.onrender.com
```
## Screenshots

![App Screenshot]()

## System Architecture
![SD image](https://i.imgur.com/oJW6QQe.jpeg)

## ER diagram
![ER](https://i.imgur.com/vxQed7U.png)

## Author

- [@Raj Kumar Sen](https://github.com/RAJKUMARSHRIVASH)

## Attribution :-

Special Thanks to -
 -  flaticon.com
 -  freepik.com
 -  imagur.com
 -  MongoDB Atlas

Thanks for visiting 👍
