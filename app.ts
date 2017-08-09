require('dotenv').config();

import * as restify from 'restify';
import * as builder from 'botbuilder';
import bot from './bot';

class App {
    run() {
        const server = restify.createServer();
        server.post('/api/messages', (bot.connector('*') as builder.ChatConnector).listen());
        server.listen(process.env.PORT, () => console.log(`${server.name} listening to ${server.url}`));
    }
}





if (process.env.FUNCTIONS_EXTENSION_VERSION) {

    let listener = (bot.connector('*') as builder.ChatConnector).listen();
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