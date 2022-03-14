module.exports = server => {
    const user = require("../controllers/user.controller");
    const auth = require("../middleware/auth.middleware");

    // Create a new user
    server.post("/v1/user", user.create);

    // Get a user using his ID
    server.get("/v1/user/:userId", auth.isAuthorized, user.getById);

    // Update a user using his ID
    server.put("/v1/user/:userId", auth.isAuthorized, user.update);

    // Delete a user using his ID
    server.delete("/v1/user/:userId", auth.isAuthorized, user.delete);

    // Get all files uploaded by user
    server.get("/v1/user/:userId/files", auth.isAuthorized, user.getFiles);

    // Get all keys for a user
    server.get("/v1/user/:userId/keys", auth.isAuthorized, user.getKeys);


}