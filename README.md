# Mern Blog Application

Hello! I'm Ahriri, this project was maded with the purpose of practicing and learning more about *Full-Stack* development.

### Technologies:
- Back-end
  - NodeJS
  - Express.js
  - MongoDB
- Front-end
  - React

## Running the project
### Prerequisite
You must create a `.env` file on the server side with these informations:

```
MONGO_URI=mongodb://127.0.0.1:27017/<db_name>
PORT=<your_port>
JWT_SECRET=<your_secret_key>
JWT_EXPIRE=24h
```

---

Now you must install the dependencies:
Back-end:

```sh
cd server
npm install # Install the dependencies
npm run start # Run the server
```

---

Front-end:

```sh
cd client
npm install
npm run dev # Run the web server
```
