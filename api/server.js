const express = require('express');
const testRoute = require('./routes/test.route');

const app = express();
app.use(express.json());

app.use("/api", testRoute);

app.listen(8080, () => {

    console.log("Backend server is running.");
})