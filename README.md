# Use My Tech Stuff - Lambda School Build Week Project

Lambda School has a build week every 5 weeks where students from differnt parts of the cirriculum form a team and work on a project together. We had 4 days to work together and build the application.

- The students in the first 5 weeks of Lambda will work on building out a landing page. 
- The students who are 10 weeks into Lambda will build the Front End of the application using React. 
- The students who are 15 weeks in, which is me for this project, will work on building out the Back End using Node.js and Express.

## The Project

Use My Tech stuff is an application that allows users to post their tech items in the application and rent it out to other users. It is similar to AirBnB but for tech items instead.

## Server is live on:

https://use-my-tech-stuff.herokuapp.com

## Dependencies

- [Node.js](https://nodejs.org/) - Back end JavaScript runtime
- [BCryptJS](https://www.npmjs.com/package/bcryptjs) - Module to hash passwords
- [cors](https://www.npmjs.com/package/cors) - package for providing a Express middleware that can be used to enable CORS
- [expressjs](https://expressjs.com/) - Node.js framework
- [json web token](https://www.npmjs.com/package/jsonwebtoken) - Implements JSON web tokens
- [knex.js](https://knexjs.org/) - SQL query builder
- [sqlite3](https://www.sqlite.org/index.html) - Library that implements SQL database engine
- [Cloudinary](https://www.npmjs.com/package/cloudinary) - Library to upload and store images in the cloud
- [Multer](https://www.npmjs.com/package/multer) - Middleware for handling multipart/form-data, which is primarily used for uploading files


# AUTH ROUTES

## **REGISTER**

_Method Url:_ `/api/auth/register`

_HTTP method:_ **[POST]**

#### Body

| name        | type    | required | description    |
| ----------- | ------- | -------- | -------------- |
| `username`  | String  | Yes      | Must be unique |
| `email`     | String  | Yes      | Must be unique |
| `password`  | String  | Yes      |                |
| `firstname` | String  | Yes      |                |
| `lastname`  | String  | Yes      |                |
| `phone`     | Integer | No       |                |

_example:_

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

##### 201 (Created)

> If you successfully register a user the endpoint will return an HTTP response with a status code `200` and a body as below.

```
{
    "message": "Registration successful",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Implbm55IiwicGFzc3dvcmQiOiIkMmEkMTEkME5UTXFlcGF1YmQ0eXU2Lk9obFZsLlU3NGNXUVdWMVBwd0d2WnVGNldBYXB3cDlCTkNMd0MiLCJmaXJzdE5hbWUiOiJKZW5ueSIsImxhc3ROYW1lIjoiTGkiLCJlbWFpbCI6Implbm55QGdtYWlsLmNvbSIsInBob25lIjo0MTU2MjY3Njg4LCJpYXQiOjE1NDkxNzA1MjMsImV4cCI6MTU0OTE3NDEyM30.jOxH0YlAABmP_W3BaF3TowhCKHP9hFkLcyw-P-dQE_M",
    "userId": 7
}
```

---

## **LOGIN**

_Method Url:_ `/api/auth/login`

_HTTP method:_ **[POST]**

#### Body

| name       | type   | required | description                                                        |
| ---------- | ------ | -------- | ------------------------------------------------------------------ |
| `email`    | String | Yes      | Must match an email in the database                                |
| `password` | String | Yes      | Must match a password in the database corresponding to above email |

_example:_

```
{
  username: "matt@gmail.com",
  password: "password"
}
```

#### Response

##### 200 (OK)

> If you successfully login, the endpoint will return an HTTP response with a status code `200` and a body as below.

```
{
    "message": "Welcome back Matt Jones",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRvbW15IiwicGFzc3dvcmQiOiIkMmEkMTEkaDBMb3hsU0pTTWxzcXNVUVQ3ZHBRZUVXbGxrNXk2M2xKVC9BQy9kU0kvWERPdnFxaHNiUjYiLCJlbWFpbCI6InRvbW15QGdtYWlsLmNvbSIsInBob25lIjo1MTA0MDgyNTg3LCJpYXQiOjE1NDkzMDEyNDMsImV4cCI6MTU0OTMwNDg0M30.TXnqIh3moCBZX-FDK5kuUURkLZtWfxmIZO3IqQhlT50"
    "userId": 7
}
```

---

# USERS ROUTES

## **GET USERS**

_Method Url:_ `/api/users`

_HTTP method:_ **[GET]**

#### Response

##### 200 (OK)

```
[
    {
        "userId": 1,
        "username": "tommy",
        "password": "$2a$11$LQImXlHE7dt0RSD9gjuvBecaZMMKYuW.vGcWsi3YumGU25PwLiFM2",
        "firstname": "Tommy",
        "lastname": "Carr",
        "email": "tommy@gmail.com",
        "phone": 5104082587
    },
    {
        "userId": 2,
        "username": "linda",
        "password": "$2a$11$d6mtGCQJBekPkqHvyog7GuaE82AfjcXzytL3ELtR8Dc.ENBNu7i/a",
        "firstname": "Linda",
        "lastname": "La",
        "email": "linda@gmail.com",
        "phone": 5102382227
    },
    {
        "userId": 3,
        "username": "jimmy",
        "password": "$2a$11$zXVFMlzrFfu9aYoJFOJCs.94KBfBvt3/BODdYaMWCj4ozs1EHj/Vy",
        "firstname": "Jimmy",
        "lastname": "Butler",
        "email": "jimmy@gmail.com",
        "phone": 7072272555
    }
]
```

---

## **GET USER BY ID**

_Method Url:_ `/api/users/:id`

_HTTP method:_ **[GET]**

#### Response

##### 200 (OK)

```
    {
        "userId": 2,
        "username": "linda",
        "password": "$2a$11$d6mtGCQJBekPkqHvyog7GuaE82AfjcXzytL3ELtR8Dc.ENBNu7i/a",
        "firstname": "Linda",
        "lastname": "La",
        "email": "linda@gmail.com",
        "phone": 5102382227
    }
```

---

## **GET ITEMS BY USERID**

_Method Url:_ `/api/users/:id/items`

_HTTP method:_ **[GET]**

#### Response

##### 200 (OK)

```
[
    {
        "itemId": 1,
        "owner": 1,
        "title": "Portable Speaker",
        "description": "Great speaker for a gathering or party",
        "brand": "Bose",
        "model": "5000XL",
        "label": "Speaker",
        "dailyPrice": 100,
        "weeklyPrice": 450,
        "available": 1,
        "renter": null
    },
    {
        "itemId": 6,
        "owner": 1,
        "title": "32 inch Curve Monitor",
        "description": "Dominate your enemies with this awesome monitor",
        "brand": "Samsung",
        "model": "32xl",
        "label": "Monitor",
        "dailyPrice": 60,
        "weeklyPrice": 250,
        "available": 0,
        "renter": 3
    }
]
```

---

## **UPDATE USER**

_Method Url:_ `/api/users/:id`

_HTTP method:_ **[PATCH]**

#### Response

##### 202 (Accepted)

```
{
    "message": "User: matt04 has been updated"
}
```

---

## **DELETE USER**

_Method Url:_ `/api/users/:id`

_HTTP method:_ **[DELETE]**

#### Response

##### 202 (Accepted)

```
{
    "message": "The user has been deleted."
}
```

---

# ITEMS ROUTES

## **GET ITEMS**

_Method Url:_ `/api/items`

_HTTP method:_ **[GET]**

#### Response

##### 200 (OK)

```
[
    {
        "itemId": 1,
        "owner": 1,
        "title": "Portable Speaker",
        "description": "Great speaker for a gathering or party",
        "brand": "Bose",
        "model": "5000XL",
        "label": "Speaker",
        "dailyPrice": 100,
        "weeklyPrice": 450,
        "available": 1,
        "renter": null
    },
    {
        "itemId": 2,
        "owner": 2,
        "title": "Projector",
        "description": "Awesome display for sports, movies and video games",
        "brand": "Samsung",
        "model": "H3000",
        "label": "Display",
        "dailyPrice": 50,
        "weeklyPrice": 180,
        "available": 1,
        "renter": null
    }
]
```

---

## **GET ITEM BY ID**

_Method Url:_ `/api/items/:id`

_HTTP method:_ **[GET]**

#### Response

##### 200 (OK)

```
    {
        "itemId": 2,
        "owner": 2,
        "title": "Projector",
        "description": "Awesome display for sports, movies and video games",
        "brand": "Samsung",
        "model": "H3000",
        "label": "Display",
        "dailyPrice": 50,
        "weeklyPrice": 180,
        "available": 1,
        "renter": null
    }
```

---

## **ADD AN ITEM**

_Method Url:_ `/api/items`

_HTTP method:_ **[POST]**

#### Body

| name          | type    | required |
| ------------- | ------- | -------- |
| `itemId`      | Integer | Yes      |
| `owner`       | Integer | Yes      |
| `title`       | String  | Yes      |
| `description` | String  | Yes      |
| `model`       | String  | Yes      |
| `label`       | String  | No       |
| `dailyPrice`  | String  | Yes      |
| `weeklyPrice` | String  | Yes      |
| `available`   | Boolean | Yes      |
| `renter`      | Integer | Yes      |

_example:_

```
{
    "itemId": 1,
    "owner": 1,
    "title": "Portable Speaker",
    "description": "Great speaker for a gathering or party",
    "brand": "Bose",
    "model": "5000XL",
    "label": "Speaker",
    "dailyPrice": 80,
    "weeklyPrice": 300,
    "available": 1,
    "renter": null
}
```

#### Response

##### 201 (Created)

```
{
    "message": "A new item has been added",
    "items": [
        {
            "itemId": 1,
            "owner": 1,
            "title": "Portable Speaker",
            "description": "Great speaker for a gathering or party",
            "brand": "Bose",
            "model": "5000XL",
            "label": "Speaker",
            "dailyPrice": 100,
            "weeklyPrice": 450,
            "available": true,
            "renter": null
        },
        {
            "itemId": 2,
            "owner": 2,
            "title": "Projector",
            "description": "Awesome display for sports, movies and video games",
            "brand": "Samsung",
            "model": "H3000",
            "label": "Display",
            "dailyPrice": 50,
            "weeklyPrice": 180,
            "available": true,
            "renter": null
        },
        {
            "itemId": 3,
            "owner": 3,
            "title": "HD Professional Grade Camera",
            "description": "Great camera for your professional shots",
            "brand": "Nikon",
            "model": "Extreme HD",
            "label": "Camera",
            "dailyPrice": 80,
            "weeklyPrice": 400,
            "available": true,
            "renter": null
        }
    ]
}
```

---

## **UPDATE ITEM**

_Method Url:_ `/api/items/:id`

_HTTP method:_ **[PATCH]**

#### Response

##### 202 (Accepted)

```
{
    "message": "item: 'Gaming computer 3' has been updated",
    "changes": {
        "owner": 1,
        "title": "Gaming computer",
        "description": "Super fast computer with the top of the line graphics card",
        "brand": "Nvidia",
        "model": null,
        "label": "Computer",
        "dailyPrice": 100,
        "weeklyPrice": 400,
        "available": 1
    }
}
```

---

## **DELETE ITEM**

_Method Url:_ `/api/items/:id`

_HTTP method:_ **[DELETE]**

#### Response

##### 202 (Accepted)

```
{
    "message": "The item has been deleted."
}
```

---

## **UPLOAD ITEM IMAGE**

_Method Url:_ `/api/items/upload`

_HTTP method:_ **[POST]**

#### Response

##### 200 (Accepted)

```
{
    "message": "Your image has been uploaded successfully to cloudinary",
    "image": "http://res.cloudinary.com/tommaay/image/upload/v1549493382/lthab7knnbzjgcdpfvx9.jpg"
}
```

---
