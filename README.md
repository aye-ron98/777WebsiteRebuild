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

This project contains a server and client files that must be initialized. 

- [For Client](#client)
- [For Server](#server)

### Client
1. Navigate to client file

```
cd client
```

2. Install Dependencies

```
npm install
```

3. Start the client

```
npm start
```

### Server

1. Navigate to Server file

```
cd server
```

2. Install Dependencies

```
npm install
```

3. Start the server

```
nodemon start
```

## Known problems

Firestore access key expires every 30 days.
MS Graph API will expire in one year.

Depending on which key expires, website may loose functionality to either the calendar and announcements feature, or email subscription feature.