<h1 align="center">
Dream Jobs <img src="frontend/src/images/logo.png" alt="logo" width=25>
</h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/ca917803-c709-4744-9444-5e1abf0f49ee/deploy-status)](https://app.netlify.com/sites/gallant-leakey-b85924/deploys)

<p align="center">
Looking for a new career? Checkout exciting new career opportunities on <a href="https://gallant-leakey-b85924.netlify.app/login" target="_blank">Dream Jobs!</a>
</p>

<p align="center">
<img src="screenshots/dream-jobs.gif">
</p>

## Project Setup
### Clone directory:
```
cd [workspace folder]
git clone https://github.com/kevinreber/react-jobly
```

---

## Front End
### Download dependencies
```
cd frontend
npm install
```

### Start Server
```
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view project in the browser.

---

## Back End
### Download dependencies
```
cd backend
npm install
```

### Setup database and populate
```
createdb jobly
psql jobly < data.sql
```

### Start Server
```
nodemon server.js
```
Open [http://localhost:3001](http://localhost:3001) to view project in the browser.

---

## Built With
* [React JS](https://github.com/facebook/create-react-app)
* [NodeJS]()
* [PostgresSQL](https://www.postgresql.org/)

---

## Authors
* Kevin Reber - [Github](https://github.com/kevinreber) - [Website](https://www.kevinreber.dev/) - [LinkedIn](https://www.linkedin.com/in/kevin-reber-6a663860/)