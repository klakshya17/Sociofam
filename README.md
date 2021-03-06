# [Sociofam](https://sociofam-app.herokuapp.com/) 
A full stack social media web application in which you can actually post pictures, like posts, comment upon it, follow people and maintain a healthy social network!<br>
![image](https://user-images.githubusercontent.com/56078582/178120416-cd037eb2-3c65-485c-98b7-cfde75bcec33.png)

### 🔗 Live Demo
The hosted website can be found [here](https://sociofam-app.herokuapp.com/) 
***
### Tech Stack and Concepts used:

<p align="left"> <a href="https://expressjs.com" target="_blank"> <img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg" alt="express" height="40"/> </a> <a href="https://git-scm.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://heroku.com" target="_blank"> <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank"> <img src="https://img.icons8.com/color/48/000000/html-5.png"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://img.icons8.com/color/48/000000/javascript.png"/> </a> <a href="https://www.mongodb.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" alt="mongodb" width="50" height="50"/> </a> <a href="https://nodejs.org" target="_blank"> <img src="https://img.icons8.com/color/48/000000/nodejs.png"/> </a>  <a href="https://reactjs.org/" target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="React" width="60" height="40"/> </a><a href="https://materializecss.com" target="_blank"> <img src="https://colinstodd.com/images/posts/matcss-min.png" alt="Material UI" width="50" height="60"/> </a><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"> <img src="https://juststickers.in/wp-content/uploads/2014/05/CSS3-Mark-Shape-Cut.png" alt="Css" width="40" height="40"/></a><a href="https://cloudinary.com" target="_blank"><img src="https://cloudinary-res.cloudinary.com/image/upload/dpr_2.0,c_scale,f_auto,q_auto,w_156/cloudinary_logo_for_white_bg.svg" alt="Cloudinary" width="180" height="40" /></a> </p>
<br>

* __Frontend:__ Reactjs, Javascript, HTML, CSS, Materialize-Css
* __Backend:__ Nodejs, Expressjs, Jwt
* __Database:__ MongoDB, Cloudinary
* __Deployment:__ Heroku
* __Tools:__ Git

## Database Design
We have used a NoSQL database(MongoDB) in which we are having two schemas **Post** and **User**. We have connected these two schemas at the relevant fields using (ObjectID).

## APIs
### Authentication
The authentication part of our app is done using JSON web tokens(JWT). Bcrypt package is used for hashing passwords. Every time during signup we store the hashed password in our User schema and everytime during login we generate a jwt token and store it in the localStorage. Then for accessing any protected API we send authorization header that includes the jwt token. We have implemented a middleware that checks whether the user is logged in or not by checking the authorization header, while accessing any protected API.

###  User APIs
These includes APIs ensuring following functionalities:
* __/user/:id__ To find a user with a particular ID
* __/follow__ To follow a particular user
* __/unfollow__ To unfollow a particular user
* __/updateprofilepic__ To update the profile picture of a user
* __/searchusers__ To search a user using a unique email

###  Post APIs
* __/allpost__ To retrieve all the posts from the Post schema
* __/allfollowpost__ To retrieve all the posts from those users which are followed by the logged in user.
* __/createpost__ To create a post with a title, body and a picture
* __/mypost__ To retrieve all the posts posted by logged in user
* __/like__ To like a paricular post
* __/dislike__ To dislike a post
* __/comment__ To comment upon a post
* __/deletepost/:postId__ To delete a post posted by logged in user
* __/deletecomment/:postId/:commentId__ To delete the comments posted by a logged in user

### Cloudinary API
Cloudinary is a cloud based media storage and optimisation service. I have used it to store all kind of image media used in my application and this API returns the image url for any image media which I use in the frontend.

## Features
### SignIn and SignUp pages 
There is a basic landing page that is my Login page , you can always navigate to the signup screen from here. <br>
![image](https://user-images.githubusercontent.com/56078582/178120078-25bb6595-458c-4a84-8044-ed5bc85704e8.png)
![image](https://user-images.githubusercontent.com/56078582/178119977-c8f38369-5f84-4d7c-b2ce-03cdf4c32572.png)
### Home page 
After logging in you will see a home screen and you can view all the posts there .<br>
![image](https://user-images.githubusercontent.com/56078582/178119954-8889236f-197c-48b0-8340-c643c79a77e7.png)
### Navbar
The navbar at the top contains a home icon and other options like create post , my following posts , my profile , all of these are pretty much self explanatory.<br>
![image](https://user-images.githubusercontent.com/56078582/178119966-3860eaa1-efbe-4f90-a6bb-0d01fb1b8f0f.png)
![image](https://user-images.githubusercontent.com/56078582/178120435-29279800-8c90-4b97-9396-bc3fa838c6c9.png)
### Post
Each Post contains a header which includes name of the person who posted that, caption, text body, picture, like button and the comment section. The posts posted by a logged-in user also includes a delete button to delete that. All the comments posted by a logged in user also possess the delete button. The image URL for the posts are returned from the cloudinary API.<br>
![image](https://user-images.githubusercontent.com/56078582/178120247-c7e2188b-1278-4c82-be79-f6352ebdecf1.png)
### Profile Page
The profile contains information about the user's username, Email, followers, following, update profile picture button and a thumbnail of the posts posted by a user.<br>
![image](https://user-images.githubusercontent.com/56078582/178119999-95237a5c-34d4-4133-ba3b-8382a5756d88.png)
### Other user's Profile
Contains all the information as on the Profile page and the button to follow or unfollow.<br>
![image](https://user-images.githubusercontent.com/56078582/178120198-63b576ea-9568-49c0-b72d-3941593590e5.png)
### Search Feature
You can search the users using their email IDs.<br>
![image](https://user-images.githubusercontent.com/56078582/178120227-70214225-1c7a-49a6-91d8-66faf8aec480.png)
### Create Post
The interface to create a Post!<br>
![image](https://user-images.githubusercontent.com/56078582/178120150-16e7a32d-14a3-4208-9092-f30ab6964cd8.png)
### My following Tab
Shows all the posts posted by those users which are followed by logged in user.
***
### Setting Up the Project 🔧

* __Frontend__

1. Clone the repo

   ```sh
   git clone https://github.com/klakshya170/Sociofam
   ```
2. Install NPM packages in server 

   ```sh
   npm install
   ```
3. Install NPM packages in client

    ```sh
    cd Client_side
    npm install
    ```
4. Create a .env file using the template .env.template and add values accordingly.

### Backend

1. Clone the repo

   ```sh
   git clone https://github.com/klakshya170/Sociofam
   ```
2. Install NPM packages

   ```sh
   npm install
   ```
3. Create a .env file using the template .env.template and add values accordingly.

### Usage

1.  Switch to the Root directory and run the backend server

    ```sh 
    npm start 
    ```
    
2.  Switch to the Frontend folder and run the frontend server

    ```sh 
    cd Client_side
    npm start 
    ```
    
