export default [
	{
		name: 'Minesweeper Infinity Multiplayer Game',
		coverImage: 'images/portfolio/minfinity/logo.png',
		title: 'Minesweeper Infinity Multiplayer Game',
		images: [
			'images/portfolio/minfinity/scrn1.jpg',
			'images/portfolio/minfinity/scrn2.jpg',
			'images/portfolio/minfinity/scrn3.png',
			'images/portfolio/minfinity/scrn4.jpg'
		],
		sections: [
			{
				title: 'The Project',
				text: 'Minesweeper Infinity is one of my personal projects. The idea behind this game is to take Minesweeper to a whole new level. The minefield used in the game is infinite (the player can navigate around with WASD), and it is played multiplayer with 2-4 players. The game features a login and guest system, creation of battles, an in-game chat system and a hall of fame. The game is currently under development.',
			},
			{
				title: 'Development',
				text: 'I have developed the backend using Node.js and I use MongoDB as the database. The frontend, including the game is developed in JavaScript. The game uses the HTML Canvas element.',
			}
		],
		skills: [
			'Node.js',
			'MongoDB',
			'Mongoose',
			'JavaScript',
			'HTML',
			'CSS',
			'Git'
		]
	},
	{
		name: 'SplitTale Game',
		coverImage: 'images/portfolio/splittale/logo.jpg',
		title: 'SplitTale story writing game',
		images: [
			'images/portfolio/splittale/scrn1.jpg',
			'images/portfolio/splittale/scrn2.jpg',
			'images/portfolio/splittale/scrn3.png',
			'images/portfolio/splittale/scrn4.jpg'
		],
		sections: [
			{
				title: 'The Project',
				text: 'SplitTale is another one of my personal projects, solely developed by me. The website is a game, where players can write stories together using, at each turn being able to add up to 5 words to the story. The game uses Facebook for logging in. Users can start their own stories. Check it out at www.splittale.com!',
			},
			{
				title: 'Development',
				text: 'To further practise my Node.js skill I have taught myself, I decided to work on another web application developed with Node.js using the Express framework. To handle the Facebook login, I have used Passport. The front-end is developed using jQuery.',
			}
		],
		skills: [
			'Node.js',
			'Facebook Development',
			'HTML',
			'CSS',
			'JavaScript',
			'Mongoose',
			'Git'
		],
		buttons: [
			{
				icon: 'fas fa-globe-americas',
				text: 'Try the game',
				href: 'https://splittale.com'
			},
			{
				icon: 'fab fa-github',
				text: 'Check the code on GitHub',
				href: 'https://github.com/vczero98/splittale'
			},
		]
	},
	{
		name: 'Origarmy Game<br>(Group Project)',
		coverImage: 'images/portfolio/origarmy/logo.jpg',
		title: 'OrigArmy Game (university group project)',
		images: [
			'images/portfolio/origarmy/scrn2.jpg',
			'images/portfolio/origarmy/scrn3.jpg',
			'images/portfolio/origarmy/scrn4.jpg',
			'images/portfolio/origarmy/scrn5.png'
		],
		sections: [
			{
				title: 'The Project',
				text: 'Origarmy is a group project we have developed at university with 5 other students. It is a multiplayer, turn-based tactical game that can be played either on a LAN or a central server online. The game can be played with up to 9 players, each player having different types of units, the the objective of capturing the other players\' bases.',
			},
			{
				title: 'Development',
				text: 'The whole project was developed using Java with LWJGL for the graphics. My main area of work was on Game Logic and Networking, using sockets to communicate between the clients. In each game, one of the players acted as the server, and the rest of the players as the client connecting to the server.',
			}
		],
		skills: [
			'Java',
			'LWJGL',
			'Networking',
			'Sockets',
			'Jenkins',
			'Git'
		]
	},
	{
		name: 'Lego NXT Virtual Warehouse',
		coverImage: 'images/portfolio/lego/lego.jpg',
		title: 'Lego NXT Virtual Warehouse',
		images: [
			'images/portfolio/lego/IMG_4797.JPG',
			'images/portfolio/lego/IMG_4802.JPG',
			'images/portfolio/lego/IMG_7089.JPG'
		],
		sections: [
			{
				title: 'The Project',
				text: 'This was a first year group project at university I developed with 6 others. The task was a simulate an automated warehouse, where three robots simultaneously picked up virtual objects when a job was received. The robots communicated with the server using bluetooth. The robots used sensors we programmed to navigate themselves. Some of the jobs would be cancelled. Such jobs could be predicted as we had been given a list of previous jobs along with whether they were cancelled.',
			},
			{
				title: 'Development',
				text: 'We developed the project in Java. My job was to program the interface of the robots, and the job cancellation prediction. For this, I have used the Java library Weka.',
			}
		],
		skills: [
			'Java',
			'Weka',
			'Machine learning',
			'Teamwork'
		]
	},
	{
		name: 'Simple JS Minesweeper',
		coverImage: 'images/portfolio/minesweeper/minesweeper.jpg',
		title: 'Simple Minesweeper JavaScript Game',
		images: [
			'images/portfolio/minesweeper/minesweeper.jpg',
			'images/portfolio/minesweeper/scrn2.jpg',
			'images/portfolio/minesweeper/scrn1.jpg',
			'images/portfolio/minesweeper/scrn3.jpg'
		],
		sections: [
			{
				title: 'The Project',
				text: 'A simple minesweeper game I developed to practise my JavaScript.',
			},
			{
				title: 'Development',
				text: 'The game has no back-end. It is built with HTML, CSS and JavaScript. I have created the design of the game using Photoshop.',
			}
		],
		skills: [
			'HTML',
			'CSS',
			'JavaScript',
			'JavaScript canvas',
			'Photoshop'
		],
		buttons: [
			{
				icon: 'fas fa-globe-americas',
				text: 'Try the game',
				href: 'https://vczero98.github.io/minesweeper/'
			},
			{
				icon: 'fab fa-github',
				text: 'Check the code on GitHub',
				href: 'https://github.com/vczero98/minesweeper'
			}
		]
	}
];