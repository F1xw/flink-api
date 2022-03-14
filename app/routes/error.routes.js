module.exports = server => {

    const error = {
        code: 404,
        success: false,
        message: "Route not found."
    }

    server.get("*", (req, res) => {
        res.status(404).send(error);
    });

    server.post("*", (req, res) => {
        res.status(404).send(error);
    });

    server.put("*", (req, res) => {
        res.status(404).send(error);
    });

    server.delete("*", (req, res) => {
        res.status(404).send(error);
    });

}