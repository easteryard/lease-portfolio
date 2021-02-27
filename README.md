## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### The program

The API being used is DAWA's [Danmarks Addresser Web API](https://dawa.aws.dk/).

###  Thoughts & decisions

In this program you're able to:

- see an overview of apartments.
- search for apartments.
- add apartments to your lease portfolio.
- see and manage your portfolio.
- add details to leases in your portfolio.

Since this is only a simple web application to use DAWA's API and create features around it
the data is stored in the browser's local storage.

First off I tried to figure out how the API worked:

- which endpoints would I be using.
- did it have built in pagination and search queries.
- any other nice features I could use.

Even though the API has pagination it's not complete since it doesn't return the total number
of pages for requests so you easily can tell if you're on the last page of search requests or
not.\
That being said it seems like a good API overall.

I would have used a library for the table if it was supposed to have extra features. But since
the requirements were limited and because I prioritised working on other features within the
limited time I had I chose to use Material-UI's table components.
