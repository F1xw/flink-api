import { PrismaClient } from "@prisma/client";

module.exports.isAuthorized = function(req, res, next) {
    require("dotenv").config();

    const jwt = require("jsonwebtoken");
    const secret = process.env.JWT_SECRET;
    const prisma = new PrismaClient();
    var route = req.route.path;

    if (req.headers.authorization === undefined) {
        console.log(req.connection.remoteAddress+' tried to access '+route+' without token.');
        return res.status(401).send({code: 401, success: false, message: 'Token needed to access resource.'});
    }

    return next();

}