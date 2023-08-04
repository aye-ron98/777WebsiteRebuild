# 777WebsiteRebuild

New test website for squadron

# Table of contents

[About the project](#about-the-project)

- [Tech Stack](#tech-stack)

[Getting Started](#getting-started)

[Known Problems](#known-problems)

## About the project

This project is a mock website of the squadron site. May be used as fallback if current site has any issues. Final product may be seen [here](https://neptune-394919.web.app/)

Please note local project will not run as I have excluded the firestore API keys. Calendar dates and any other info pulled from MS graph API will also not run as keys are excluded from repo for security reasons.

If you would like to make a version of your own [start a firestore project](https://cloud.google.com/firestore/docs/create-database-server-client-library) and add firestore authentication json to the firebase folder.

Inline comments will guide you what variable names to change under the server.js and uploads.js files within the server folder.

### Tech Stack

- React
- Google Firestore
- Microsoft Graph API
- Node.js

## Getting started

### Run Locally

clone the project

```
https://github.com/aye-ron98/777WebsiteRebuild.git
```

Go to project directory

```
cd 777WebsiteRebuild
```

Install Dependencies

```
npm install
```

Start the server

```
npm start
```

## Known problems

To be determined as project continues running
