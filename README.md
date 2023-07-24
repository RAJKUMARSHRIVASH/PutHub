# PutHub
This is portfolio management system for the managers to manage their all projects.


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
## ER diagram
![](https://i.imgur.com/vxQed7U.png)


## Features

- Cross-platform
- Responsive
- CRUD
- Roll-Based Access System
- Login / Signup

## Tech Stack

**Frontend:** React, typescript, CSS, HTML

**Backend:** Python, Flask

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
```http
  POST /signup
```
```http
  POST /login
```
```http
  GET /portfolio-managers
```
```http
  GET /portfolio-managers/<string:id>
```
```http
  PATCH /portfolio-managers/<string:id>
```
```http
  DELETE /portfolio-managers/<string:id>
```
```http
  POST /proejcts
```
```http
  GET /proejcts
```
```http
  GET /projects/<string:id>
```
```http
  PATCH /projects/<string:id>
```
```http
  DELETE /projects/<string:id>
```

```http
  POST /resources
```
```http
  GET /resources
```
```http
  GET /resources/<string:id>
```
```http
  PATCH /resources/<string:id>
```
```http
  DELETE /resources/<string:id>
```

```http
  POST /tasks
```
```http
  GET /tasks
```
```http
  GET /tasks/<string:id>
```
```http
  PATCH /tasks/<string:id>
```
```http
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

## Author

- [@Raj Kumar Sen](https://github.com/RAJKUMARSHRIVASH)

