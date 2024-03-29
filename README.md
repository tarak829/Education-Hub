# Education-Hub
A MERN stack and Redux based app.
Link to the [site!](https://eduhub-final.herokuapp.com/)

# Quick Start

### Add a default.json file in config folder with the following

```
{
  "mongoURI": "<your_mongoDB_Atlas_uri_with_credentials>",
  "jwtSecret": "secret"
}
```

### Install server dependencies

```bash
npm install
```

### Install client dependencies

```bash
cd client
npm install
```

### Run both Express & React from root

```bash
npm run dev
```
## Frontend-Features
The frontend comprises of React and uses Context Api for state management across the app.  
In `package.json` of react I have added `http://localhost:5000` as proxy so that I can make api calls using fetch.  

The features provided by the app :-  
### User Authentication
> The users need to register with the app to use the services.  
> Users once registered can directly Login to use the services.  

All the actions related to the user authentication are in the `client/src/actions/auth`. It provides the features of :-
* REGISTER 
* LOGIN
* LOGOUT 

If the `localStorage` has an active token user is directly taken to dashboard.Otherwise , he will have to REGISTER or LOGIN to set a token.
In case you aren't logged in you can't see the LOGOUT button in the `navbar` . If you are logged in you can't see the LOGIN , REGISTER AND HOME buttons in the `navbar`.  
## Backend-Features 
The backend used `Express` as Server and `MongoDB-atlas` as Database. 
### The following requests can be made to the backend:-
> #### POST /api/users
* This is public request.  
* This is used for registering the user and returns the token as response.  
* This request validates that `name`,`email` and `password` are not empty.
* It also validates that email needs to be unique.
* It returns the errors in case validation fails.  

> #### POST /api/auth
* This is public request.
* This is used for logging in the user and returns the token as response in case of success.
* This request validates that `email` and `password` are not empty.
* It returns the errors in case validation fails.
* It also returns error in case the details don't match.  

> #### GET /api/auth
* This is protected request.  
* It returns the user information from token.  