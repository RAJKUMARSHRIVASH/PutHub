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