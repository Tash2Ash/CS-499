# Tasha Loudermilk ePortfolio
## Table of Contents

* [Self Reflection](#self-reflection)
* [Code Review](#code-review)
* [MongoDB Creation and Data Loading](#mongodb-creation-and-data-loading)
* [MongoDB CRUD Functions](#mongodb-crud-functions)
* [Web Application Using MongoDB Node.js Express and Passport](#web-application-using-mongodb-node.js-express-and-passport)

## Self Reflection

## [Code Review](https://youtu.be/fJVIL6loSF4)
Before beginning any work for the artifacts in CS 499 I created a [video](https://youtu.be/fJVIL6loSF4) reviwing the material being used for the project.  This video discusses the existing code, along with an analysis of what worked and what could be improved upon.  It also includes the plans for the enhancements in mind at the beginning of the project.

## [MongoDB Creation and Data Loading](github.com/Tash2Ash/CS-499/tree/main/Software%20Design%20%26%20Engineering)
### A.  Briefly describe the artifact.  What is it? When was it created?
For the first enhancement of the ePortfolio an application using VS Code and Node.js was written in JavaScript to create a repository in MongoDB and load a data set into this repository.  Using Node.js, mongo was installed within the package in VS Code as a dependency and pulled in using MongoClient and my local URL.  The repository was then named, and a main function was created to house to repository creation and loading processes.  To test the connection to the server and database I employed an admin function and ran the application.  This allowed me to view the server information and a list of the databases that currently existed within Mongo.  I then added the json file containing the data into the package and loaded this data.  For testing purposes, I added a try/catch block to display any errors that could occur during the data loading process.  Running the application again shows that the repository has been created and the data has been loaded.  This artifact was created May 16, 2022, using the original [code](github.com/Tash2Ash/CS-499/blob/main/CS%20340%20Code%20Code%20(old)/AnimalShelter.py) written for CS 340 in January 2022.  

### B.  Justify the inclusion of the artifact in your ePortfolio.  Why did you select this item?  What specific components of the artifact showcase your sills and abilities in software development?  How was the artifact improved?
In the world of software development, you rarely just work with one programming language, so it is best to practice and showcase the ability to work in multiple environments.  This enhancement displays that ability by taking the previous project from CS 340 and translating it into another language (JavaScript) and use Node.js to connect and load data from a repository created in MongoDB from this application.  Instead of creating the repository and loading the data straight from MongoDB I am doing so from an application that will also allow me to include CRUD functions.  This artifact showcases my ability to create, access and manage a MongoDB repository from within an application using server-side JavaScript.  The original artifact was improved upon during this enhancement by combining the database elements and client-side code into one application, as opposed to using multiple applications, as was the case in the original CS 340 project that used the mongo shell for database creation and management and Jupyter Notebook for the source code.

### C.  Did you meet the course objectives you planned to meet with this enhancement in Module One?  Do you have any updtaes to your outcome-coverage plans?
The creation of this artifact for category one was a success and is performing as intended.  The objective for this artifact was to transfer existing code from Python to JavaScript with the creation of a skeleton that could be used in later enhancements to provide increased complexity to the management of the database.  Continuing this process through the creation of artifacts two and three, I have considered possibly using a cloud version of Mongo as opposed to having it locally installed on my Mac.  This change would primarily be to address storage issues on my local computer and to learn more about different ways of accessing and using MongoDB.

### D.  Reflect on the process of enhancing and/or modifying the artifact.  What did you learn as you were creating it and improving it?  What challenges did you face?
My takeaway from this enhancement has been learning more about the creation of a repository outside of MongoDB using Node.js.  From the work done in CS 340 I assumed that any database had to be created from a terminal accessing MongoDB, and the data had to be loaded the same way.  Beginning the process using Node.js I found that I could do all of this through the application and create any repository and load the data within the applications main function.  From a developer standpoint this a cleaner way to code and allow for future fixes and modifications.  There is no flipping between programs or files as everything is accessible and can be tested from a single application.  The biggest challenge I faced during the creation of this artifact was the actual installation of MongoDB on my Mac.  On install the directory is not automatically set up, so I had to research why and how and give myself permissions to create and write to a directory.  This process took more time than the actual creation of the package and code and is one reason I may consider using a cloud version in the fourth milestone. 

## [MongoDB CRUD Functions](github.com/Tash2Ash/CS-499/tree/main/Algorithms%20and%20Data%20Structure)
### A.  Briefly describe the artifact.  What is it? When was it created?
For the first artifact I created a skeleton to create and load data into a mongo database. This artifact will build upon this structure adding CRUD functions that will allow a user to manipulate the data within the created repository. To accomplish this, I added each function to the main within the app.js, and animalRepo.js modules. Within each function in the Repo module, I return the promise followed by establishing the mongo connection then add the calls for each function (create, read, update, and delete). To catch and display any errors that may occur during the execution of any of these functions I added a try/catch block at the end of each, and what this does is return specific details about what broke during execution. With all these functions in place, I now have a fully functioning repository that could be used in conjunction with the creation of a web application that displays data from the repository.  This artifact was created on 5/22/2022 using the same [code](github.com/Tash2Ash/CS-499/blob/main/CS%20340%20Code%20Code%20(old)/AnimalShelter.py) from artifact one created in CS 340 in January 2022.

### B.  Justify the inclusion of the artifact in your ePortfolio.  Why did you select this item?  What specific components of the artifact showcase your sills and abilities in software development?  How was the artifact improved?
I chose to include this artifact in my ePortfolio as a continuation and development of a database repository. Each artifact will build upon the last with the result being a web application to display the data within the repository. This artifact highlights my knowledge of how to use an algorithm, in this case each function (load, create, read, update, delete) to create a data structure that brings organization and use to a database repository. In creating this artifact using a node.js application I was able to develop the entire process within one application using server-side JavaScript as opposed to the previous way of creating and loading the data within the mongo shell followed by the creation of the CRUD structure using Python in a separate application. I can connect, load, and manipulate the repository from one location using one program, with a cleaner data structure that will be easier to troubleshoot.

### C.  Did you meet the course objectives you planned to meet with this enhancement in Module One?  Do you have any updtaes to your outcome-coverage plans?
With the creation of this artifact, I met the objectives that I had planned for the second enhancement. Creating a fully functioning repository using node.js increased the ease of access and efficiency of the process. As mentioned before, using VS Code and node.js allowed me to write all the code, run the application and see its output all from the same window. With this artifact I was also able to employ a technique for assertions and returning details of any errors that occur during the execution of the application.

### D.  Reflect on the process of enhancing and/or modifying the artifact.  What did you learn as you were creating it and improving it?  What challenges did you face?
Throughout the process of creating this artifact there were two aspects that I learned more about. The first was how to accompany an assert to create a way to display more details about the error for better troubleshooting. I learned that creating a try/catch block with console.log() will keep the program from skipping over the assert and just breaking and allow the console to display the error with details. The second was why it was necessary to add a dropDatabase() to clean up the repository with each run. Using a try/catch block and placing the functions within the app.js module in this block then dropping the database after prevents the assertion from failing due to the number of records returning not matching the number of records within the database. This took time to work through as I would get the assertion fail and had to do research on why this was happening and how to restructure my code with the addition of the try catch block in app.js to prevent it. 

## [Web Application Using MongoDB Node.js Express and Passport]()
### A.  Briefly describe the artifact.  What is it? When was it created?
For the enhancement three database artifact I have produced a web application using node.js and express that displays and writes data to a mongo database.  This enhancement was created using VS Code and a HTML/CSS template to save time.  The application consists of two pages, a home page that displays information about the company “Grazioso Salvare” a wilderness rescue training group, and the animals page that displays animals contained within the database.  A third page has also been included for information content to be added regarding the company's mission and purpose.  The application features a sign up/sign in security feature implemented using passport for being able to view the animal details.  This artifact was incrementally written 5/30/2022 through 6/5/2022 replacing the dash [code](github.com/Tash2Ash/CS-499/blob/main/CS%20340%20Code%20Code%20(old)/ProjectTwoDashboard.ipynb) from CS 340 written in February 2022.

### B.  Justify the inclusion of the artifact in your ePortfolio.  Why did you select this item?  What specific components of the artifact showcase your sills and abilities in software development?  How was the artifact improved?
I chose this artifact to produce for my ePortfolio to accompany the repository created in the previous artifacts and display the data in a web application.  I also chose to create an application to showcase my ability to work with multiple languages translating from the original Python script to JavaScript, and my ability to design web pages using HTML/CSS.  The routing pages written within the application showcase by ability to map a function to a URL and execute JavaScript on the server-side outside of the browser.  Pulling in and using Passport I displayed my ability to implement a local strategy to secure and authenticate a user's access to information displayed on a web page.  This artifact improves upon the original by creating an interactive web application as opposed to just a dashboard app, that incorporates better security using user validation and authorization.  Although the sign-up credentials are simplified in this artifact, the ability to add admin and individual user access to certain parts of the application is left open for further development.  

### C.  Did you meet the course objectives you planned to meet with this enhancement in Module One?  Do you have any updtaes to your outcome-coverage plans?
The course objectives for this artifact were primarily to display the data from the former project in a more aesthetically pleasing way while increasing the security of the data.  Originally, I had planned to write the HTML from scratch but found writing and testing the code for the application took up more time than necessary, so I decided for the sake of time management to use a template and modify it to create my pages.  The overall outcome and goals remained the same and have been met, the only thing that was omitted from the original plan was the aggregation feature.  I have not found a good way to work it into the application, so it is something that could be included in future development.

### D.  Reflect on the process of enhancing and/or modifying the artifact.  What did you learn as you were creating it and improving it?  What challenges did you face?
Throughout the process I have gained a better understanding of the features that node.js, express, and passport offer.  This trio has allowed me to create the framework, connect to a database and create a customizable application all within one weeks’ time.  To this point I have built the pages of the application, set up sign-in/log-in and created the database and pulled in data.  The element that provided the most challenge and in turn the most learning was working with routing.  In the code I created an animalRouter, adminRouter, and an authRouter that all presented issues that broke the application.  Researching the source of the errors presented with routing in the original submission I have since corrected the error that involved using the correct syntax for closing the client after execution of the code within each router file within the application.
