/* ----------------------------------------------------------------
*   Bot created with botbuilder Yeoman Generator
*   https://github.com/microsoftdx/generator-botbuilder
*
*   All default dialogs are located in ./dialogs
*   You can add additional dialogs below as needed
---------------------------------------------------------------- */

import * as builder from 'botbuilder';
import dialog from './dialogs/luis';

const bot = new builder.UniversalBot(
    new builder.ChatConnector({
        appId: process.env.MICROSOFT_APP_ID,
        appPassword: process.env.MICROSOFT_APP_PASSWORD
    }),
   (session, args, next) => {
           session.send("hi - I'm sample bot");
        }
);


bot.recognizer(new builder.LuisRecognizer(process.env.LUIS_MODEL_URL));
bot.dialog(dialog.name.toString(),dialog.waterfall).triggerAction({ matches: dialog.name.toString() });
export default bot;
