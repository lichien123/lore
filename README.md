# Lore
### **Description**

Lore is a a physical fitness RPG application that rewards users with a level up system. It streamlines workout, cardio and stretching routines for users and makes it easier for them to train towards specific traits such as speed, strength and stamina. 

### Motivation

Recognizing the negative perceptions often associated with workout culture, Lore aims to be a more inclusive approach to staying fit. By creating an RPG themed fitness quest, we make working out more approachable for everyday individuals, by making it as fun as playing a video game. Accessibility is important to us, we included track options for those who face mobility constraints, but still want to grow and maintain areas like strength and stamin. 

### Code Style

Object Oriented Coding.

### Screenshot

![s-](/Users/taqwarushdan/Sites/lore/app/public/img/ss-1.jpg)

### How to Use

1. <u>Landing page</u>: Lists all track options.
2. <u>Sign Up/Login:</u> Users can only see each track's details once they are logged in. Once a user clicks a track, they will be prompted to either sign up or login. 
   1. On sign up, the user's information is posted to the Lore database.
3. <u>Track's Page:</u> Each track page is populated via the Lore API, dynamically, on page load. At the top of each track page, there is a points tab, which shows the user their the points that they have earned.

### Key Technologies Used

- Node.js — application's main server.
- Express.js — pages routes (GET and POST).
- Sequelize — Dynamically created Tracks table and User Info table.
- MySQL — Passport.js data.
- Uranium.js — Tabs feature on track page (UI).
- Bootstrap — bare bones page skeleton.
- jQuery — All events and dynamic HTML elements.
- Passport.js — Registration and Login.

### **Key Features**

- Database that tracks registration and a user's selected track
- Personalized workout API for each archetype track (Titan, Hunter, Assasin)
- Level Up feature that allows user's to graduate to a new track once they meet their fitness goals.

### Code Example

Here is how we accessed data in our homemade API, and parsed it out to our client-side code.

```javascript
  $(document).ready(function() {

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
  - Step 3: run node server.js, navigate to ***localhost:8080*** on your favorite web browser, and the application should be up and running.
  - Step 4: navigate to `/api/tracks` to view the API!
  - Step 5 (bonus): Open the files in your favorite text editor and customize the application even more!



## **Credits**

This application was built by Dan, Li, Maria, and Taqwa -- Full Stack Web Development Students at George Washington University's Coding Boot Camp.