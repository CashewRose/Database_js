# DOM Component Creation Challenge
Now it's time to create a brand new project for displaying your home database in the DOM.
```js
cd
cd workspace
mkdir database-dom && cd $_
touch index.html
touch database.js
code .
```
1. Create the HTML boilerplate with the ! shortcut in Visual Studio Code.
1. Create one, base HTML ```<article>``` component inside the body tag. Give it an ```id``` value of ```myStuff```.
1. In your JavaScript file, load your home inventory from local storage.
1. Iterate over every data set in the database and create a ```<section>``` component.
1. That component itself should contain three ```<p>``` components. One for the name, location, and description.
1. Attach the p components as children of the section.
1. Attach the section as a child of the article.