# Backend API Documentation
## User Routes
### Endpoint

`/users/register`


### HTTP Method
`POST`

#### Description
Registers a new user.

#### Request Body
- `fullname` (object)
  - `firstname` (string, required): First name of the user. Must be at least 3 characters long.
  - `lastname` (string, optional): Last name of the user. Must be at least 3 characters long.
- `email` (string, required): Email of the user. Must be a valid email address.
- `password` (string, required): Password of the user. Must be at least 6 characters long.

#### Responses

- **201 Created**
  - **Description**: User successfully registered.
  - **Body**: 
    ```json
    {
      "token": "JWT token",
      "user": {
        "_id": "User ID",
        "fullname": {
          "firstname": "First name",
          "lastname": "Last name"
        },
        "email": "User email"
      }
    }
    ```
  - **Example**:
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "user": {
        "_id": "60d0fe4f5311236168a109ca",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com"
      }
    }
    ```

- **400 Bad Request**
  - **Description**: Validation error or missing required fields.
  - **Body**: 
    ```json
    {
      "errors": [
        {
          "msg": "Error message",
          "param": "Field name",
          "location": "body"
        }
      ]
    }
    ```

### Endpoint

`/users/login`

#### HTTP Request Method
`POST`

#### Description
Logs in an existing user.

#### Request Body
- `email` (string, required): Email of the user. Must be a valid email address.
- [password](http://_vscodecontentref_/1) (string, required): Password of the user. Must be at least 5 characters long.

#### Responses

- **200 OK**
  - **Description**: User successfully logged in.
  - **Body**: 
    ```json
    {
      "token": "JWT token",
      "user": {
        "_id": "User ID",
        "fullname": {
          "firstname": "First name",
          "lastname": "Last name"
        },
        "email": "User email"
      }
    }
    ```
  - **Example**:
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "user": {
        "_id": "60d0fe4f5311236168a109ca",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com"
      }
    }
    ```

- **401 Unauthorized**
  - **Description**: Invalid email or password.
  - **Body**: 
    ```json
    {
      "message": "Invalid Email or Password"
    }
    ```

- **400 Bad Request**
  - **Description**: Validation error or missing required fields.
  - **Body**: 
    ```json
    {
      "errors": [
        {
          "msg": "Error message",
          "param": "Field name",
          "location": "body"
        }
      ]
    }

### Endpoint

`/users/profile`

#### HTTP Request Method
`GET`

#### Description
Fetches the profile of the authenticated user.

#### Responses

- **200 OK**
  - **Description**: User profile fetched successfully.
  - **Body**: 
    ```json
    {
      "_id": "User ID",
      "fullname": {
        "firstname": "First name",
        "lastname": "Last name"
      },
      "email": "User email"
    }
    ```
  - **Example**:
    ```json
    {
      "_id": "60d0fe4f5311236168a109ca",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
    ```

- **401 Unauthorized**
  - **Description**: User is not authenticated.
  - **Body**: 
    ```json
    {
      "message": "Unauthorized"
    }
    ```
### Endpoint

`/users/logout`

#### HTTP Request Method
`GET`

#### Description
Logs out the authenticated user.

#### Responses

- **200 OK**
  - **Description**: User successfully logged out.
  - **Body**: 
    ```json
    {
      "message": "Logged Out"
    }
    ```

- **401 Unauthorized**
  - **Description**: User is not authenticated.
  - **Body**: 
    ```json
    {
      "message": "Unauthorized"
    }
    ```
## Captain Routes
### Endpoint

`/captains/register`

#### HTTP Method
`POST`

#### Description
Registers a new captain.

#### Request Body
- `fullname` (object)
  - `firstname` (string, required): First name of the captain. Must be at least 3 characters long.
  - `lastname` (string, required): Last name of the captain. Must be at least 3 characters long.
- `email` (string, required): Email of the captain. Must be a valid email address.
- `password` (string, required): Password of the captain. Must be at least 5 characters long.
- `vehicle` (object)
  - `color` (string, required): Color of the vehicle. Must be at least 3 characters long.
  - `plate` (string, required): Plate number of the vehicle. Must be at least 3 characters long.
  - `capacity` (integer, required): Capacity of the vehicle. Must be at least 1.
  - `vehicleType` (string, required): Type of the vehicle. Must be one of 'car', 'motorcycle', 'auto'.

#### Responses

- **201 Created**
  - **Description**: Captain successfully registered.
  - **Body**: 
    ```json
    {
      "captain": {
        "_id": "Captain ID",
        "fullname": {
          "firstname": "First name",
          "lastname": "Last name"
        },
        "email": "Captain email",
        "vehicle": {
          "color": "Vehicle color",
          "plate": "Vehicle plate",
          "capacity": "Vehicle capacity",
          "vehicleType": "Vehicle type"
        }
      }
    }
    ```
  - **Example**:
    ```json
    {
      "captain": {
        "_id": "60d0fe4f5311236168a109ca",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "vehicle": {
          "color": "Red",
          "plate": "ABC123",
          "capacity": 4,
          "vehicleType": "car"
        }
      }
    }
    ```

- **400 Bad Request**
  - **Description**: Validation error or missing required fields.
  - **Body**: 
    ```json
    {
      "errors": [
        {
          "msg": "Error message",
          "param": "Field name",
          "location": "body"
        }
      ]
    }
    ```

- **400 Bad Request**
  - **Description**: Captain already exists.
  - **Body**: 
    ```json
    {
      "error": "Captain already exists"
    }
    ```
    ### Endpoint

`/captains/login`

#### HTTP Method
`POST`

#### Description
Logs in an existing captain.

#### Request Body
- `email` (string, required): Email of the captain. Must be a valid email address.
- `password` (string, required): Password of the captain. Must be at least 6 characters long.

#### Responses

- **200 OK**
  - **Description**: Captain successfully logged in.
  - **Body**: 
    ```json
    {
      "token": "JWT token",
      "captain": {
        "_id": "Captain ID",
        "fullname": {
          "firstname": "First name",
          "lastname": "Last name"
        },
        "email": "Captain email"
      }
    }
    ```
  - **Example**:
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "captain": {
        "_id": "60d0fe4f5311236168a109ca",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com"
      }
    }
    ```

- **401 Unauthorized**
  - **Description**: Invalid email or password.
  - **Body**: 
    ```json
    {
      "message": "Invalid email or password"
    }
    ```

- **400 Bad Request**
  - **Description**: Validation error or missing required fields.
  - **Body**: 
    ```json
    {
      "errors": [
        {
          "msg": "Error message",
          "param": "Field name",
          "location": "body"
        }
      ]
    }
    ```

### Endpoint

`/captains/profile`

#### HTTP Method
`GET`

#### Description
Fetches the profile of the authenticated captain.

#### Responses

- **200 OK**
  - **Description**: Captain profile fetched successfully.
  - **Body**: 
    ```json
    {
      "captain": {
        "_id": "Captain ID",
        "fullname": {
          "firstname": "First name",
          "lastname": "Last name"
        },
        "email": "Captain email"
      }
    }
    ```
  - **Example**:
    ```json
    {
      "captain": {
        "_id": "60d0fe4f5311236168a109ca",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com"
      }
    }
    ```

- **401 Unauthorized**
  - **Description**: Captain is not authenticated.
  - **Body**: 
    ```json
    {
      "message": "Unauthorized"
    }
    ```

### Endpoint

`/captains/logout`

#### HTTP Method
`GET`

#### Description
Logs out the authenticated captain.

#### Responses

- **200 OK**
  - **Description**: Captain successfully logged out.
  - **Body**: 
    ```json
    {
      "message": "Logged Out"
    }
    ```

- **401 Unauthorized**
  - **Description**: Captain is not authenticated.
  - **Body**: 
    ```json
    {
      "message": "Unauthorized"
    }
    ```