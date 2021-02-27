### Lease Portfolio Management System

Manage your lease portfolio in an easy and user-friendly way!\
Here you'll be able to:

- see an overview of apartments.
- search for apartments.
- add apartments to your lease portfolio.
- see and manage your portfolio.
- add details to leases in your portfolio.

### How to run the project

1. Go to root in the project directory.
2. Run `yarn` or `npm install` to install packages.
3. Run `yarn start` or `npm start`.

### `yarn start` & `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

### The solution

This web application is built with React and TypeScript and is using an API for the data.\
The API being used is DAWA's [Danmarks Addresser Web API](https://dawa.aws.dk/).

###  Thoughts & decisions

Since this is only a simple web application to use DAWA's API and create features around it
the data is stored in the browser's local storage.

Reading the requirements I had a pretty good idea of the features I wanted to built.\
First off I tried to figure out how the API worked to see if it supported what I wanted
to do. So I checked to see:

- which endpoints would I be using.
- did it have built in pagination and search queries.
- any other nice features I could use.

Even though the API has pagination it's not complete since it doesn't return the total number
of pages for requests so you easily can tell if you're on the last page of search requests or
not.\
That being said it seems like a good API overall.

When I had a good understanding about the API I could start developing the application. 

I would have used a library for the table if it was supposed to have extra features. But since
the requirements were limited and because I prioritised working on other features within the
limited time I had I chose to use Material-UI's table components.
