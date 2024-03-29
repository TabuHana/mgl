# [MGL - MyGamesList](https://mgl-mern.herokuapp.com/)

---

### Description

This site is a personal project I worked on during my coding bootcamp with my classmates. Its purpose is to help people find games based on specific genres and favorite them to view later.
I am currently re-designing the site with the goal of making the sites design more modern, integrating state, and changing the sites API.
To view the current live site, click the title above :point_up:

| **Tabel of Contents**                               |
| --------------------------------------------------- |
| [Project Setup](#project-setup)                     |
| [Folder Structure](#folder-structure)               |
| [Database](#database)                               |
| [APIs](#apis)                                       |
| [Client - Saved Games](#client---saved-games)       |
| [Client - Searched Games](#client---searched-games) |
| [Testing](#testing)                                 |
| [Contributions](#contributions)                     |
| [Additional Info](#additional-info)                 |

<a name="project-setup"></a>

### Project Setup

The project is set up using vanilla Javascript on the server and Typescript on the client.
Node.js is needed to run this application (which can be found [here](https://nodejs.org/en/)) and I would also recommend installing git (which can be found [here](https://git-scm.com/downloads)).
You will also need to create your own mongoDB database (which can be found [here](https://www.mongodb.com/)). I would recommend using the free options available there.
Run `git clone <project URL>` in your git bash console where you wish to add the project.

Once you have the project downloaded run `npm install` to install the server dependencies then `cd client && npm install` to install the client dependencies. Once that is complete, create a `.env` file outside of all folders to set up your environment variables. Input your mongoURI into your .env file and create your JWT secret. Your JWT secret can be anything, for example "abc123" or "myjwtsecret123". It should look something like this once done.

`JWT_SECRET = (your JWT secret)`
`MONGODB_URI = (your mongo URI)`

Once that is complete you can run `npm run dev` to run the project. To view the project, you will need to click on the vite link inside the console. Run `npm run build` inside the client to view on localhost.

<a name="Folder Structure"></a>

### Folder Structure

<a name="Database"></a>

### Database

<a name="APIs"></a>

### APIs


<a name="Client - Saved Games"></a>

### Client - Saved Games

<a name="Client - Searched Games"></a>

### Client - Searched Games

<a name="Testing"></a>

### Testing

There are currently no tests written for this application, however I would like to add some in the future if I continue working on it.

<a name="Contributions"></a>

### Contributions

I would love for any and all contrubutions! 
Currently I would like to move the Auth, login, and logout to some kind of state instead of handling them inside their respective components. If anyone would like to do that or fix any other issues please feel free to!

<a name="Additional Info"></a>

### Additional Info

I, Nathan Marcellous, am the only contributor of the project and its updated form. But I want to give credit to everyone who worked on the old project. Below is their info as well as mine. 

| Contact             | GitHub                                   | Linkedin                                                  |
| ------------------- | ---------------------------------------- | --------------------------------------------------------- |
| Nathan Marcellous   | [Link](https://github.com/TabuHana)      | [Link](https://www.linkedin.com/in/nathaniel-marcellous/) |
| Korey Luu           | [Link](https://github.com/Ahrionic)      | [Link](https://www.linkedin.com/in/korey-luu-b21640230/)  |
| Kien                | [Link](https://github.com/NGGKI)         | Not Provided                                              |
| Christopher Vazquez | [Link](https://github.com/ChrisVazquez6) | Not Provided                                              |
