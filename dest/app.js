"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const restify = require("restify");
const bot_1 = require("./bot");
class App {
    run() {
        const server = restify.createServer();
        server.post('/api/messages', bot_1.default.connector('*').listen());
        server.listen(process.env.PORT, () => console.log(`${server.name} listening to ${server.url}`));
        // Serve a static web page
        server.get(/.*/, restify.serveStatic({
            'directory': '.',
            'default': '/index2.html'
        }));
    }
}
if (process.env.Is_Azure_FUNCTION) {
    let listener = bot_1.default.connector('*').listen();
    module.exports =
        function (context, req) {
            // When request comes in, pass it to bot's listener function
            // while using the Express-style response object found from
            // context.res.
            listener(req, context.res);
        };
}
else {
    const app = new App();
    app.run();
}
