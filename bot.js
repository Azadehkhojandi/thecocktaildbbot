"use strict";
/* ----------------------------------------------------------------
*   Bot created with botbuilder Yeoman Generator
*   https://github.com/microsoftdx/generator-botbuilder
*
*   All default dialogs are located in ./dialogs
*   You can add additional dialogs below as needed
---------------------------------------------------------------- */
Object.defineProperty(exports, "__esModule", { value: true });
const builder = require("botbuilder");
const luis_1 = require("./dialogs/luis");
const bot = new builder.UniversalBot(new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
}), (session, args, next) => {
    session.send("hi - I'm sample bot");
});
bot.recognizer(new builder.LuisRecognizer(process.env.LUIS_MODEL_URL));
bot.dialog(luis_1.default.name.toString(), luis_1.default.waterfall).triggerAction({ matches: luis_1.default.name.toString() });
exports.default = bot;
