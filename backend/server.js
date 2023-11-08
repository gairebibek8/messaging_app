const express = require("express");
const { chats } = require("./data/data");

// instance of express
const app = express();

// making request and getting response
app.get('/', (req, res) => {
    res.send("API is running");
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



// the backend server is running on port 5000
app.listen(5000, console.log("Server is running on PORT 5000!"));
