
# Intro

This repository is my personal website which hosts a RESTful API using the schema outlined at https://jsonresume.org/schema/ on an express backend
It then displays direct calls to that backend through a react frontend.

It is relatively easily editable to fit your own needs. If you have any questions or need help setting it up please feel free to reach out to me!

If hosting yourself make sure you do not leave your POST/PUT requests open without authorization by commenting out the put/post sections in the backend/api/routes/routes.js file (or else anyone can edit your resume)

This website is currently running at http://www.brennanmbrown.com/

# Installation Instructions

Make sure yarn is installed properly for this project to run (debian tutorial: https://linuxize.com/post/how-to-install-yarn-on-debian-9/)
This application runs an express server from the backend folder which then reads the frontend build folder data.

A separate mongoDB server should be running on the same box as this application. You may need to initialize a database called "resumeDB"

##   Backend
   MAKE SURE YOUR USER ACCOUNT HAS THE ABILITY TO BIND TO PORT 80! (https://stackoverflow.com/questions/7929563/node-js-express-app-wont-start-listening-on-port-80)
    running 'yarn start' in the backend folder starts the express server through a pm2 daemon.

##  Frontend
   Frontend should work out of the box, the build files are there from previous builds.
    Any changes to frontend code need to be rebuilt either with the build.sh file or by running 'yarn build' from the frontend directory

   If you want to add badges but do not want to add them as "profiles" to your resume json you can add them in the userInput.js file (/frontend/src/userInput.js)

##   Insect Sync
   Set up a cronjob to run cron.sh on a semi-regular basis. (debian tutorial: https://linux4one.com/how-to-set-up-cron-job-on-debian-9/)
   This will scrape the most current 100 insect/spider records and insert them into your running mongoDB.

# TODO:
- Build auth into POST requests
- Styling for insect page
- Cap number of records in insect sync db... it's been running every day for more than 2 years now
- Jenkins pipeline
