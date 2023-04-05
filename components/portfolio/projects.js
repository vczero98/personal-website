export default [
  {
    name: "IoT Smart Horse Vest",
    coverImage: "images/portfolio/horse/cover.png",
    title:
      "IoT Smart Horse Vest (University Software Engineering Group Project)",
    images: [
      "images/portfolio/horse/scrn1.png",
      "images/portfolio/horse/scrn2.png",
      "images/portfolio/horse/scrn3.png",
      "images/portfolio/horse/scrn4.png",
      "images/portfolio/horse/scrn5.png",
      "images/portfolio/horse/scrn6.png",
      "images/portfolio/horse/scrn7.png",
      "images/portfolio/horse/scrn8.png",
    ],
    sections: [
      {
        title: "The Project",
        text: "The task for this university group project was to design and build an IoT solution for an existing problem of out choice. This project focused mostly on design process, and began this by researching a product that could benefit from IoT. We came up with the idea of having the smart horse jacket that helps you improve your body posture during horse riding. From our research, we found that the head, back and feet are the areas that most beginners struggle with, so we designed accessories to complement the jacket worn by the user to analyse each of these areas. We developed a phone app that would be an accessory to the jacket, and could be used to monitor the user's progress.",
        video: "https://www.youtube.com/embed/eqBDRam76ZY",
      },
      {
        title: "Development",
        text: "The project in terms of development consisted of two main parts. To record and analyse the movement of the body, we used an Arduino along with two MPU6050 sensors, which include an accelerometer and a gyroscope. We built this into the jacket to monitor the orientation of the body. The other main part was developing an Android application, which we did using Android Studio and Java. The application communicates with the Arduino using a TCP-IP socket, and alertes the user when their body position is incorrect using the device's speakers.",
      },
      {
        title: "Video",
        text: "Part of the design process was to create a video that showcases and advertises the product we created. This is in the style of a video that a startup would use to crowdfund their idea. Although I was not the one using the software to edit the video itself, I have contributed several ideas. This video shows how our product is intended to work.",
        video: "https://www.youtube.com/embed/9gjPEeC-LDY",
      },
    ],
    skills: [
      "Team Management",
      "Software Engineering",
      "Internet of Things",
      "Arduino",
      "Android Studio",
      "Mobile Development",
      "Gyroscope",
      "Accelorometer",
    ],
  },
  {
    name: "Minesweeper Infinity Multiplayer Game",
    coverImage: "images/portfolio/minfinity/logo.png",
    title: "Minesweeper Infinity Multiplayer Game",
    images: [
      "images/portfolio/minfinity/scrn1.jpg",
      "images/portfolio/minfinity/scrn2.jpg",
      "images/portfolio/minfinity/scrn3.png",
      "images/portfolio/minfinity/scrn4.jpg",
    ],
    sections: [
      {
        title: "The Project",
        text: "Minesweeper Infinity is one of my personal projects. The idea behind this game is to take Minesweeper to a whole new level. The minefield used in the game is infinite (the player can navigate around with WASD), and it is played multiplayer with 2-4 players. The game features a login and guest system, creation of battles, an in-game chat system and a hall of fame. The game is currently under development.",
      },
      {
        title: "Development",
        text: "I have developed the backend using Node.js and I use MongoDB as the database. The frontend, including the game is developed in JavaScript. The game uses the HTML Canvas element.",
      },
    ],
    skills: [
      "Node.js",
      "MongoDB",
      "Mongoose",
      "JavaScript",
      "HTML",
      "CSS",
      "Git",
    ],
  },
  {
    name: "SplitTale Game",
    coverImage: "images/portfolio/splittale/logo.jpg",
    title: "SplitTale story writing game",
    images: [
      "images/portfolio/splittale/scrn1.jpg",
      "images/portfolio/splittale/scrn2.jpg",
      "images/portfolio/splittale/scrn3.png",
      "images/portfolio/splittale/scrn4.jpg",
    ],
    sections: [
      {
        title: "The Project",
        text: "SplitTale is another one of my personal projects, solely developed by me. The website is a game, where players can write stories together using, at each turn being able to add up to 5 words to the story. The game uses Facebook for logging in. Users can start their own stories. Check it out at www.splittale.com!",
      },
      {
        title: "Development",
        text: "To further practise my Node.js skill I have taught myself, I decided to work on another web application developed with Node.js using the Express framework. To handle the Facebook login, I have used Passport. The front-end is developed using jQuery.",
      },
    ],
    skills: [
      "Node.js",
      "Facebook Development",
      "HTML",
      "CSS",
      "JavaScript",
      "Mongoose",
      "Git",
    ],
    buttons: [
      {
        icon: "fas fa-globe-americas",
        text: "Try the game",
        href: "https://splittale.com",
      },
      {
        icon: "fab fa-github",
        text: "Check the code on GitHub",
        href: "https://github.com/vczero98/splittale",
      },
    ],
  },
  {
    name: "Origarmy Game<br>(Group Project)",
    coverImage: "images/portfolio/origarmy/logo.jpg",
    title: "OrigArmy Game (University Group Project)",
    images: [
      "images/portfolio/origarmy/scrn2.jpg",
      "images/portfolio/origarmy/scrn3.jpg",
      "images/portfolio/origarmy/scrn4.jpg",
      "images/portfolio/origarmy/scrn5.png",
    ],
    sections: [
      {
        title: "The Project",
        text: "Origarmy is a group project we have developed at university with 5 other students. It is a multiplayer, turn-based tactical game that can be played either on a LAN or a central server online. The game can be played with up to 9 players, each player having different types of units, the the objective of capturing the other players' bases.",
      },
      {
        title: "Development",
        text: "The whole project was developed using Java with LWJGL for the graphics. My main area of work was on Game Logic and Networking, using sockets to communicate between the clients. In each game, one of the players acted as the server, and the rest of the players as the client connecting to the server.",
      },
    ],
    skills: ["Java", "LWJGL", "Networking", "Sockets", "Jenkins", "Git"],
  },
  {
    name: "Lego NXT Virtual Warehouse",
    coverImage: "images/portfolio/lego/lego.jpg",
    title: "Lego NXT Virtual Warehouse",
    images: [
      "images/portfolio/lego/IMG_4797.JPG",
      "images/portfolio/lego/IMG_4802.JPG",
      "images/portfolio/lego/IMG_7089.JPG",
    ],
    sections: [
      {
        title: "The Project",
        text: "This was a first year group project at university I developed with 6 others. The task was a simulate an automated warehouse, where three robots simultaneously picked up virtual objects when a job was received. The robots communicated with the server using bluetooth. The robots used sensors we programmed to navigate themselves. Some of the jobs would be cancelled. Such jobs could be predicted as we had been given a list of previous jobs along with whether they were cancelled.",
      },
      {
        title: "Development",
        text: "We developed the project in Java. My job was to program the interface of the robots, and the job cancellation prediction. For this, I have used the Java library Weka.",
      },
    ],
    skills: ["Java", "Weka", "Machine learning", "Teamwork"],
  },
  {
    name: "Simple JS Minesweeper",
    coverImage: "images/portfolio/minesweeper/minesweeper.jpg",
    title: "Simple Minesweeper JavaScript Game",
    images: [
      "images/portfolio/minesweeper/minesweeper.jpg",
      "images/portfolio/minesweeper/scrn2.jpg",
      "images/portfolio/minesweeper/scrn1.jpg",
      "images/portfolio/minesweeper/scrn3.jpg",
    ],
    sections: [
      {
        title: "The Project",
        text: "A simple minesweeper game I developed to practise my JavaScript.",
      },
      {
        title: "Development",
        text: "The game has no back-end. It is built with HTML, CSS and JavaScript. I have created the design of the game using Photoshop.",
      },
    ],
    skills: ["HTML", "CSS", "JavaScript", "JavaScript canvas", "Photoshop"],
    buttons: [
      {
        icon: "fas fa-globe-americas",
        text: "Try the game",
        href: "https://vczero98.github.io/minesweeper/",
      },
      {
        icon: "fab fa-github",
        text: "Check the code on GitHub",
        href: "https://github.com/vczero98/minesweeper",
      },
    ],
  },
  {
    name: "React Snake Game",
    coverImage: "images/portfolio/snake/cover.png",
    title: "React Snake Game",
    images: [
      "images/portfolio/snake/scrn1.png",
      "images/portfolio/snake/scrn2.png",
      "images/portfolio/snake/scrn3.png",
      "images/portfolio/snake/scrn4.png",
    ],
    sections: [
      {
        title: "The Project",
        text: "To practise my React knowledge, I decided to create a JavaScript Snake game built in React.",
      },
    ],
    skills: ["React", "HTML", "CSS", "JavaScript"],
    buttons: [
      {
        icon: "fas fa-globe-americas",
        text: "Try the game",
        href: "https://vczero98.github.io/react-snake/",
      },
      {
        icon: "fab fa-github",
        text: "Check the code on GitHub",
        href: "https://github.com/vczero98/react-snake",
      },
    ],
  },
  {
    name: "Android Restaurant Finder App (University Project)",
    coverImage: "images/portfolio/clean-restaurant-finder/cover.png",
    title: "Android Restaurant Finder App (University Project)",
    images: [
      "images/portfolio/clean-restaurant-finder/scrn1.png",
      "images/portfolio/clean-restaurant-finder/scrn2.png",
      "images/portfolio/clean-restaurant-finder/scrn3.png",
      "images/portfolio/clean-restaurant-finder/scrn4.png",
      "images/portfolio/clean-restaurant-finder/scrn5.png",
    ],
    sections: [
      {
        title: "The Project",
        text: "Sometimes you're out and about and are looking for somewhere to grab a bite to eat. Perhaps you have a sensitive stomach, so, before you head out, you want to know what the Food Standards Agency's Food Hygiene ratings are for restaurants. The task was to design and build an Android application that allows a user to find eatery hygiene information using the FSA's API.",
      },
      {
        title: "Development",
        text: "I developed this Android application in Java using Android studio. To find an appropriate design for the layout of the application, I have reviewed the designs of several existing applications on the Play Store. One of the tasks was to create an additional feature of our choice, and I decided to use the phone's camera to allow the user to take pictures of the restaurants and add them to their pages.",
      },
    ],
    skills: ["Android Studio", "Java", "RESTful API"],
  },
];
