## Welcome to my interview assignment

### Exam 1 - PDF Comparison

For this test, I chose to use `pdf-parse` [npm library](https://www.npmjs.com/package/pdf-parse) which is widely used, highly supported and well documented.

I've read the PDF files inside a Cypress task, and performed the actual comparison outside, in the tests file to keep separation of concerns.

### Exam 2 - Demoblaze automation QA

For this test I created a JS Class called `DemoblazePage` who makes the login and the order flows much more convinientand easy to fill, and can be shared to reduce code duplications.

I've also extracted the configurations out of the test and stored them in a separated JSON file under `fixtrues` folder, and extracted the selectors to a different file called `selectors.json` so they could be reused and easily updated in case of changes.
