Hangman


//--------------------------------------------- RUNNING PROJECT ------------------------------------------------------------------------//
-This app was bootstrapped with 'create-react-app';
-You will need to have Node installed on your computer to run this app - https://nodejs.org/en/download/
-To run this project you will need to open up two terminals
-On the first terminal run 'npm install' -Then run 'node server/index' to get the server running on port 3005
-On the second terminal run 'npm start' to get the app running on port 3000


//--------------------------------------------- THOUGHT PROCESS ------------------------------------------------------------------------//
I decided to build this application as a webpage using React and Node JS.
So before I started coding I came up with an MVP and a list of steps to completing this app.

The list:

-Test API on Postman (Postman is a powerful HTTP client for testing web services.) -https://www.getpostman.com
-Listed the components I think I would need
-Came up with my entire apps initial state that will be set on redux
-Structure for files
-Features/MVP
-Techs I will be using


I gave appropriate components their own container files that communicated with specific pieces of state on my reducer. I wanted to build this application as modular as possible so that maintaining and adding more features wouldnt be so complex.

As I started building this game out, I knew that the keyboard component was going to be the most important component of this game. The first thing I did was get a random word on my screen and tried knocking letters off of that word as I typed. Redux made communicating from my Keyboard component to my Word component super easy. I then hid the letters and began rendering them as I found them. The communication between these two components are a huge part of this application.

 I noticed that even on an easy setting, it was pretty difficult to guess the secret word, so I gave users 2 hints per word. Now that the hints were in place the game felt a little too easy so I added a settings component to the Landing page where users can adjust the games difficulty. 

 I then built a Bomb component that renders a different image based on incorrectGuesses from my reducer. Once a user has made their 6th incorrect attempt, am image will cover your entire screen and user will be asked if they want to try again. The button on this screen routes user back to the Landing page where a new set of words are pulled from the API on "componenetWillMount" (a React life cycle method that is fired when a component is mounted on the dom)

 If a user guesses the word correctly they will be asked if they want to solve the next word. On click a new random word is pulled from the reducer. This method will add 1 to your streak, get a new word, and set your hints and guesses back to their initial values.

 I also implemented a 'streak' feature that keeps track of how many words a user has solved.

 I made the api fetch for words on the landing page to make the user experience quicker. When a user clicks "lets play", we already have our words and the user will not have to wait for the words to be fetched. 

 At this point I had hit my MVP and wanted to implement more features.
I found that a good portion of the words I had to solve for, I had either never heard, or never used.

I decided to give users the option to define the secret word whether they win or lose. I added a button to the PopUp component that when clicked will fetch a definition of the current word and display it in the PopUp. This works well with most words but some words aren’t found. If a word isn’t found I render a message letting the user know the word was unable to be defined.

Once this functionality was in place I came up with this idea to allow users to translate this word to spanish. I thought it would be a fun way to learn and play at the same time. I set up the same logic that was in place for the definitions and used it with a translator API.

These two features really made me happy, since one of my long term goals is to develop learning apps/games for children.

I would like to continue refining these features so that each word can give a user a unique response rather than a message saying we couldnt find anything.
-wikipedia search of word - link
-google search for word - link
-refine pull from words api you get words that are more likely to have definitions and translation
-allowing user to choose which language they want the word translated to.


Another cool feature I would love to implement is a toggle that lets users play the entire game in another language. This can be an amazing tool for people learning a new language.

Having users log in and have a profile where they can save their newly learned words and save their streaks to a leader board would also be a great addition to this application.

I also want to continue working on the UI. I focused more on functionality for times sake but will go back and polish the UI.

This project was a great learning experience for me and I am looking forward to implementing new features and possibly getting this thing hosted on the web!


