const express = require("express");

// instance of express
const app = express();

// making request and getting response
app.get('/', (req, res) => {
    res.send("API is running")
});





// the backend server is running on port 5000
app.listen(5000, console.log("Server is running on PORT 5000!"));
