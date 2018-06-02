# Lore
**Description**

A physical fitness RPG application that rewards users with a level up system.

**Key Features**

- User database
- Personalized workout API
- RPG game themed

**Tech Used**

- Node.js
- Sequelize
- MySQL
- Express
- Express-handlebars
- Body-Parser
- .env

**Architecture Diagram**

![screenshot](/app/public/img/ss-1.jpg)

**UI Mockups**

1. <u>Landing page</u>: Lists all track options.
2. <u>Sign Up/Login:</u> Users can only see each track's details once they are logged in. Once a user clicks a track, they will be prompted to either sign up or login.
   1. On sign up, the user's information is posted to the Lore database.
3. <u>Track's Page:</u> Each track page is populated via the Lore API, dynamically, on page load. At the top of each track page, there is a points tab, which shows the user their the points that they have earned.
4. Our project is deployed here: https://radiant-headland-41548.herokuapp.com/

**API Docs**

[To Be Completed]

**DB**

![db_sketch](app/public/img/db_sketch.jpeg)

**Getting Started**

Npm init followed by NPM install for getting all dependicies. 

**Team Members**

  console.log("Assasin Page Loaded.");

  var queryURL = "/api/tracks";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(Track) {

  $("#track-name").html(Track[0].track_name);
  $("#track-desc").html(Track[0].track_description);
  $("#stretch-vid").html(Track[0].stretch_vid);
  $("#cardio-vid").html(Track[0].cardio_vid);
  $("#workout-vid").html(Track[0].workout_vid);

	})

});
```



## **MVC Compliance**

```
	├── config
	|     └── config.json
	├── models
	|     ├── index.js		
	|     ├── loginModel.js
	|     ├── loreModel
	|     └── trackModel.js
	├── public
	|     ├── css
  	|           ├── boostrap
  	|           └── styles.css
  	|     ├── img
  	|           ├── assasin.png
  	|           └── etc.
	|     └── js
	|           ├── libraries
  	|           ├── assasin.js
	|           └── etc.
	├── routes
	|     ├── html-routes.js
  	|     ├── tracks-api-routes.js
	|     └── etc.
	├── package.json
	└── server.js
```

### Installation

#### **Steps:**

- The package.json file includes all environment dependicies that you'd need to run the app locally.
  - Step 1: Fork this repository and clone it to your local environment.
  - Step 2: Navigate to the cloned repo/folder and run `npm init`. Once the repo is initialized, run `npm install`. This will download all of the necessary dependencies.
  - Step 3: run node app/create_database.js, run node server.js, navigate to ***localhost:8080*** on your favorite web browser, and the application should be up and running.
  - Step 4: navigate to `/api/tracks` to view the API!
  - Step 5 (bonus): Open the files in your favorite text editor and customize the application even more!



## **Credits**

This application was built by Dan, Li, Maria, and Taqwa -- Full Stack Web Development Students at George Washington University's Coding Boot Camp.
