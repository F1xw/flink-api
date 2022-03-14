const express = require("express");

const config = require("./app/config/config");

const server = express();
const port = config.SERVER_PORT;

server.get("/", (req, res) => {
    res.status(200).send({code: 200, success: true, message: 'This is a Flink Server.'});
});

// require("./app/routes/user.routes.js")(server);
// require("./app/routes/file.routes.js")(server);
// require("./app/routes/key.routes.js")(server);

require("./app/routes/error.routes.js")(server);


server.listen(port, () => {
    console.log("Starting server on port %s", port);
});

