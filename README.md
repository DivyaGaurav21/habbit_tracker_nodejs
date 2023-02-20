# Habit-Tracker
## Description 
  A habit tracker project is a web application that allows users to sign in and sign out. It allows users to perform CRUD operations (Create, Read, Update, Delete) on their habits, such as adding new habits, viewing their existing habits, updating or editing habits, and deleting habits. The project is built using a tech stack consisting of Node.js for the server-side scripting, Express for handling HTTP requests and routing, MongoDB for storing and managing the data, and EJS for rendering the views and templates.
  
## Tech stack
  Node , Express, Mongodb , EJS , javaScript , html, css
  
## How to setup the project on local system
  1. Clone this project
  2. Start by installing npm if you don't have it already.
  3. Navigate to Project Directory by : Using
  ```
  cd habit-tracker
  
  ```
  
  After reaching to the this preoject directory yo have to run this following command :
  ```
  $ npm install
  $ nodemon server.js or npm start
  ```

 
  ## Features
  * User View
  Add/ remove/ update/ delete Habits
  ![Alt text](https://github.com/DivyaGaurav21/habbit_tracker_nodejs/blob/master/assets/images/Screenshot%20(45).png?raw=true)
  * Daily view
  ![Test Image 4](https://github.com/DivyaGaurav21/habbit_tracker_nodejs/blob/master/assets/images/Screenshot%20(46).png?raw=true)
  * Sign In
  ![test5](https://github.com/DivyaGaurav21/habbit_tracker_nodejs/blob/master/assets/images/Screenshot%20(48).png?raw=true)
  * Sign Up
  ![test6](https://github.com/DivyaGaurav21/habbit_tracker_nodejs/blob/master/assets/images/Screenshot%20(47).png?raw=true)
 

  ## Folder Structure
```bash

Habit Tracker
    |
    |               |--->css
    |--->assets---->|--->images
    |               |---> js
    |
    |               |--->mongoose.js
    |--->config---->|
    |               |--->passport-local-Stradegy.js
    |
    |                  |-->habbit_controller.js
    |--->controllers-->|-->home_controller.js
    |                  |-->user_controller.js
    |
    |               |-->habit.js
    |--->models---->|
    |               |-->user.js
    |
    |              
    |               |-->user.js
    |--->routes---->|-->habit.js
    |               |--index.js
    |
    |              |--->user_sign_up.ejs
    |--->views---->|--->user_sign_in.ejs
    |              |--->home.ejs
    |              
    |
    |-->node_modules
    |-->.gitignore
    |-->package.json
    |
```  
