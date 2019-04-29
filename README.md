# REST API

## Authentication Routes

### Sign Up

- **URL**

  > `http://localhost:3000/api/signup`

- **Method**

  POST

- **Body**

  - Email: String (**Required**)
  - Password: String (**Required**)

- **Response**

  - Success (status code: 201)

  ```JSON
  {
    "id": <Integer>,
    "email": <String>,
    "password": <Hashed Password>,
    "updatedAt": <Date>,
    "createdAt": <Date>
  }
  ```

### Sign In

- **URL**

  > `http://localhost:3000/api/signin`

- **Method**

  POST

- **Body**

  - Email: String (**Required**)
  - Password: String (**Required**)

- **Response**

  - Success (status code: 200)

  ```JSON
  {
    "accesstoken": <Generated JSON Web Token>
  }
  ```

## Todo Routes

### Get User's Todo(s)

- **URL**

  > `http://localhost:3000/api/todos`

- **Method**

  GET

- **Header(s)**

  - accesstoken: String (**Required**)

- **Response**

  - Success (status code: 200)

  ```JSON
  [
    {
        "id": <Integer>,
        "title": "...",
        "description": "...",
        "UserId": <Integer>,
        "createdAt": <Date>,
        "updatedAt": <Date>,
        "User": {
            "id": <Integer>,
            "email": "...",
            "password": "...",
            "createdAt": "...",
            "updatedAt": "..."
        }
    },
    { ... }
  ]
  ```

### Create Todo

- **URL**

  > `http://localhost:3000/api/todos`

- **Method**

  POST

- **Header(s)**

  - accesstoken: String (**Required**)

- **Body**

  - title: String (**Required**)
  - description: String

- **Response**

  - Success (status code: 201)

  ```JSON
  {
    "id": <Integer>,
    "title": "...",
    "description": "...",
    "UserId": <Integer>,
    "updatedAt": <Date>,
    "createdAt": <Date>
  }
  ```

### Get a Single Todo

- **URL**

  > `http://localhost:3000/api/todos/:id`

- **Method**

  GET

- **Header(s)**

  - accesstoken: String (**Required**)

- **Response**

  - Success (status code: 200)

  ```JSON
  {
    "id": <Integer>,
    "title": "...",
    "description": "...",
    "UserId": <Integer>,
    "updatedAt": <Date>,
    "createdAt": <Date>
  }
  ```

### Update Todo

- **URL**

  > `http://localhost:3000/api/todos/:id`

- **Method**

  PATCH

- **Header(s)**

  - accesstoken: String (**Required**)

- **Body**

  - title: String
  - description: String

- **Response**

  - Success (status code: 200)

  ```JSON
  {
    "id": <Integer>,
    "title": <String new value>,
    "description": <String new value>,
    "UserId": <Integer>,
    "updatedAt": <Date new value>,
    "createdAt": <Date>
  }
  ```

### Delete Todo

- **URL**

  > `http://localhost:3000/api/todos/:id`

- **Method**

  DELETE

- **Header(s)**

  - accesstoken: String (**Required**)

- **Response**

  - Success (status code: 200)

  ```JSON
  {
    "message": "Todo deleted"
  }
  ```
