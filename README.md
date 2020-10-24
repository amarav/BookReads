# My Reads Project

MyReads project is a project challenge by Udacity that lets you to solidify your knowledge on react fundamentals.
In this project, user lands on a main page with bookshelves with books that are assigned to currently reading, want to read or read. We have the option to switch shelves or search a book and assign it to different shelves.

If the user does not want it to be in any of the shelves , it will set to none. To bring it back to the shelves, user has to navigate to the search page and add it to the shelf or change the shelf

# Pre requisites

* Node.js & NPM installed on your environment

* Any modern web-browser with debugging tools like Chrome, FireFox

# Installation and Deployment

* Begin by grabbing the code repo
git clone https://github.com/Arjith-Natarajan/myreads.git

or just Download as a zip file ⬇️ and extract it

* Navigate to root directory by cd myreads or equivalent method

## Installing necessary packages and dependencies

* npm install

Stretch a little while packages are downloaded

## Deploy the app on local test server

npm start

* Fires up the application server at port 3000

* Visit http://localhost:3000 in your favourite browser to play around with the application 🎊T

## What You're Getting
```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Routes to Home or search page
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
    |__ Home.js # Home page displays the bookshelf and a link to search page
    |__ Bookshelf.js #Displays the bookshelf
    |__ DisplayBooks.js #Displays the books in bookshelf 
    |__ ListBook.js  #List the books with their info and options to switch shelves
    |__ Search.js #Search a book and update in bookshelf

# APPLICATION FUNCTIONALITY

* List Books under 3 diff shelves : Currently Reading, Want to Read and Read
* Ability to change the shelf of the books by clicking on them and selecting
* Search for different books and list search results
* Ability to add new books from search results to one of 3 shelves
* Maintain and display same shelf for a book in shelf as well as search results


## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query, maxResults)
```

* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
