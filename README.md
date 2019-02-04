# back-end

## Server is live on:
https://use-my-tech-stuff.herokuapp.com


# AUTH ROUTES

## **REGISTER**
### **Registers a user**

*Method Url:* `/api/auth/register`


*HTTP method:* **[POST]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `Content-Type` | String | Yes      | Must be application/json |

#### Body

| name           | type    | required | description              |
| -------------- | ------  | -------- | ------------------------ |
| `username`     | String  | Yes      | Must be unique           |
| `email`        | String  | Yes      | Must be unique           |
| `password`     | String  | Yes      |                          |
| `firstname`    | String  | Yes      |                          |
| `lastname`     | String  | Yes      |                          |
| `phone`        | Integer | No       |                          |

*example:*

```
{
      "username": "matt04",
      "password": "password",
      "firstName": "Matt",   
      "lastName": "Jones", 
      "email": "matt@gmail.com",  
      "phone": 4156267688
}
```

#### Response

##### 200 (OK)
>If you successfully register a user the endpoint will return an HTTP response with a status code `200` and a body as below.
```
{
    "message": "Registration successful",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Implbm55IiwicGFzc3dvcmQiOiIkMmEkMTEkME5UTXFlcGF1YmQ0eXU2Lk9obFZsLlU3NGNXUVdWMVBwd0d2WnVGNldBYXB3cDlCTkNMd0MiLCJmaXJzdE5hbWUiOiJKZW5ueSIsImxhc3ROYW1lIjoiTGkiLCJlbWFpbCI6Implbm55QGdtYWlsLmNvbSIsInBob25lIjo0MTU2MjY3Njg4LCJpYXQiOjE1NDkxNzA1MjMsImV4cCI6MTU0OTE3NDEyM30.jOxH0YlAABmP_W3BaF3TowhCKHP9hFkLcyw-P-dQE_M"
}
```
##### 400 (Bad Request)
>If you send in invalid fields, the endpoint will return an HTTP response with a status code `400` and a body as below.
```
{
  "message": "There was a problem with your request."
}
```

____

## **LOGIN**
### **Logs a user in**

*Method Url:* `/api/auth/login`

*HTTP method:* **[POST]**

#### Body

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `email`        | String | Yes      | Must match an email in the database |
| `password`     | String | Yes      | Must match a password in the database corresponding to above email |

*example:*

```
{
  username: "matt04",
  password: "password"
}
```

#### Response

##### 200 (OK)
>If you successfully login, the endpoint will return an HTTP response with a status code `200` and a body as below.
```
{
    "message": "Welcome back Matt Jones",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRvbW15IiwicGFzc3dvcmQiOiIkMmEkMTEkaDBMb3hsU0pTTWxzcXNVUVQ3ZHBRZUVXbGxrNXk2M2xKVC9BQy9kU0kvWERPdnFxaHNiUjYiLCJlbWFpbCI6InRvbW15QGdtYWlsLmNvbSIsInBob25lIjo1MTA0MDgyNTg3LCJpYXQiOjE1NDkzMDEyNDMsImV4cCI6MTU0OTMwNDg0M30.TXnqIh3moCBZX-FDK5kuUURkLZtWfxmIZO3IqQhlT50"
}
```
___

