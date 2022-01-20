# Guild Messenger App

## Table of Contents

- [Abstract](#Abstract)
- [Technologies](#Technologies)
- [Code Architecture](#Code-Architecture)
- [Install and Set Up](#Install-and-Set-Up)
- [Illustrations](#Illustrations)
- [Wins](#Wins)
- [Challenges](#Challenges)
- [Contributors](#Contributors)
- [Project Specs](#Project-Specs)

## Abstract

This application allows users to chat with other users over instant message.  

Users are able to "log in" by choosing their name from the drop-down menu.  Once a user is logged in, they will see the conversations that they have going on and will be prompted to choose a conversation.  

To select a conversation, users can click the name of the person they'd like to message under the "Conversations" section of the sidebar.  A chatbox will appear on the right panel, where users are able to enter their message in the input field and press enter/return to send.  Users will be able to see messages appear in the message display along with the name of the sender and the time/date the message was sent.

To switch users, find another user in the drop-down menu and log them in.

This project was created as part of Guild Education's Full Stack Engineering hiring screening.


## Technical Requirements
Click [here](https://docs.google.com/document/d/1ZwIFJUxDwg7etxBgsBYraXdjaQUo_9Z0FGnzGE0EUX4/edit?usp=sharing) to see the Technical Requirements of the app.

## Technologies
- Javascript/React
- HTML
- CSS
- React Hooks
- Express.js
- GitHub Projects

## Install and Set Up

Follow the readme on [this repo](https://github.com/pthan1/guild_messenger_server) to set up the Express.js server.

After setting up the server, to run the application:

1. Clone down the repo
2. Cd into `guild messenger`
3. Run `npm install`
4. Run `npm start`
5. Navigate to `http://localhost:3000/`

## Code Architecture

The React architecture is based on functional components and hooks.  

The backend is set up with Express.js and holds the user and conversation data.

## Wins & Challenges Overcame

- Creating the data model: Had to plan how to structure the data without a fully-fledge backend w/ relational databases in order to pass the least amount of data around as possible.  Had to plan out when to fetch data and the different API endpoints.
- The app supports multiple users, validates a user, and matches users to their conversations.  
  - This took a bit of business logic in order to make the application as dynamic as possible in order to support scaling the application to include multiple users. 
- Had to re-use logic to determine a user's name from their ID, thus having to pass the same props down to different nested child components.  Would like to implement some sort of caching feature in order to make this easier.
- Dealing with JavaScript dates

## Future Features
- Web app routing: Implement a separate login page
  - Allow multiple users to be signed in at a time
- Implement GraphQL/Apollo on the backend to query/mutate data: This would allow me to simplify the network requests by having only one endpoint and make it easier/more flexible to reference data from different tables, and send appropriate responses.
  - Having one endpoint would’ve been easier to manage as opposed to trying to figure out request parameters and different routes for users and conversations.
- Have the ability for users to have Group Conversations with multiple people.

## Walkthrough

![Recording 2022-01-20 at 10 34 55 | width=500](https://user-images.githubusercontent.com/82873669/150391730-dc381f16-9e2c-4281-9f8d-90981997f256.gif)


## Contributors
- [Phil Than](https://github.com/pthan1)

