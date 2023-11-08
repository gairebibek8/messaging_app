const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv")


// instance of express
const app = express();
dotenv.config();

// making request and getting response
app.get('/', (req, res) => {
    res.send("API is running successfully");
});


// fetching data from data.js as export const chats is done
app.get('/api/chat', (req, res) => {
    res.send(chats);
});

// fetching particular chat only with the help of id
app.get('/api/chat/:id', (req, res) => {
    // console.log(req.params.id);
    const singleChat = chats.find((c) => c._id === req.params.id);
    res.send(singleChat);
});


const PORT = process.env.PORT || 5000

// the backend server is running on port 5000
app.listen(PORT, console.log(`Server is running on PORT ${PORT}!`));
