# Backend API Documentation

## Endpoints

`POST /users/register`


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

