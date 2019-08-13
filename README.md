# Petful Server

How to set up Petful server.

## Description of App
This is the server for the Petful application, and goes with Petful Client. https://github.com/cfiander/Petful-Client
Petful is a web app for an animal shelter that only allows visitors to adopt animals that have been in the
the shelter the longest. 
This express api relies on four endpoints. 
 
### Users
The first is the user endpoint.
Which doesn't rely on a database but rather uses a Queue datastructure to store names entered by users on the client side. They are stored as basic js objects with a key of name and value of the users given name. As users enter their information on the client end, they enter the Queue. 
Users are queued and dequeued in the exepcted order for a Queue structure, each which corresponds to a given post and delete endpoint connected to the client. 
### Dogs and Cats
The dogs and cats endpoints are virtually identical except for the fact that one handles dog related requests and the other handles cat related requests. Like users, these are handled within individualized Queue data structures with corresponding post and delete (queue and dequeue) endpoints. 

### Adopted
The adopted endpoint takes dequeue dog and cat objects and stores them in an array for presentation on a single list page on the client side. 

## TechStack

Overall:
    Node
    Express

Dependencies: 
    "chai": "^4.2.0",
    "cors": "^2.8.5",
    "dotenv": "^8.0.0",
    "express": "^4.17.1",
    "faker": "^4.1.0",
    "helmet": "^3.20.0",
    "mocha": "^6.2.0",
    "morgan": "^1.9.1",
    "nodemon": "^1.19.1",
    "supertest": "^4.0.2"

## How do set up?

Complete the following steps to start a new project (NEW-PROJECT-NAME):

1. Clone this repository to your local machine `git clone petful`
2. `cd` into the cloned repository
3. Make a fresh start of the git history for this project with `rm -rf .git && git init`
4. Install the node dependencies `npm install`
5. Move the example Environment file to `.env` that will be ignored by git and read by the express server `mv example.env .env`
6. Edit the contents of the `package.json` to use your desired name

## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests in watch mode `npm test`

## Deploying

When your new project is ready for deployment, add a new heroku application with `heroku create`. This will make a new git remote called "heroku" and you can then `npm run deploy` which will push to this remote's master branch.
