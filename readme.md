# Tokopedia Play Clone Backend

This is the backend server for the Tokopedia Play Clone project. It provides APIs for managing users, videos, products, and comments.

## Database Structure

This project uses MongoDB as a NoSQL database. The structure consists of collections and documents.

### Users Collection

Field Name   | Type     | Description
-------------|----------|---------------------
id           | ObjectID | Unique identifier for Users
name         | String   | User's name
username     | String   | Unique username for accessing the website/server

### Products Collection

Field Name          | Type     | Description
--------------------|----------|---------------------
id                  | ObjectID | Unique identifier for Products
productName         | String   | Product's name
description         | String   | Decription of the product
price               | Number   | Price of the product
videoId             | ObjectID | Reference to the video

### Videos Collection

Field Name          | Type     | Description
--------------------|----------|---------------------
videoId             | ObjectID | Unique identifier for Videos
title               | String   | Video's title
description         | String   | Decription of the video
urlThumbnail        | String   | URL for the Video's Thumbnail Link


### Comments Collection

Field Name          | Type     | Description
--------------------|----------|---------------------
id                  | ObjectID | Unique identifier for Comments
name                | String   | Name of the user who commented
commentText         | String   | Content of the user's comment
videoId             | ObjectID | Reference to the video


## API Structure 🧠

### Base URL

http://localhost:3000/api/

### Endpoints

### Endpoints

1. **Users**
   - `GET /users`: Get all users.
   - `GET /users/:id`: Get a specific user by ID.
   - `POST /users`: Create a new user.
   - `PUT /users/:id`: Update an existing user.
   - `DELETE /users/:id`: Delete a user.

2. **Products**
   - `GET /products`: Get all products.
   - `GET /products/:id`: Get a specific product by ID.
   - `POST /products`: Create a new product.
   - `PUT /products/:id`: Update an existing product.
   - `DELETE /products/:id`: Delete a product.

3. **Videos**
   - `GET /videos`: Get all videos.
   - `GET /videos/:id`: Get a specific video by ID.
   - `POST /videos`: Create a new video.
   - `PUT /videos/:id`: Update an existing video.
   - `DELETE /videos/:id`: Delete a video.

4. **Comments**
   - `GET /comments`: Get all comments.
   - `GET /comments/:id`: Get a specific comment by ID.
   - `POST /comments`: Create a new comment.
   - `PUT /comments/:id`: Update an existing comment.
   - `DELETE /comments/:id`: Delete a comment.

## Example Endpoint Usage

1. Get all Users

**Endpoint**: `GET /users`

**Response Body**:
```json
{
  "users": [
    {
      "_id": "64be8a55f27b4c39ebf48c36",
      "name": "John Doe",
      "username": "johndoe"
    },
  ]
}