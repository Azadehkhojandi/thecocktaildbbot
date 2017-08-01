"use strict";
/* ------------------------------------------------------------------------------------------
*   LUIS Dialog
*   This file contains a dialog for use with Language Understanding Intelligent Service (LUIS)
*   You can find out more information at https://luis.ai
*
*   To use this dialog:
*   1. Create a model in LUIS
*   2. Update the LUIS_MODEL_URL process variable, through .env or directly, with the URL
*       you obtained from step one
*   3. Update the code below to prompt the user for missing entities
------------------------------------------------------------------------------------------ */
Object.defineProperty(exports, "__esModule", { value: true });
const builder = require("botbuilder");
const thecocktaildb_1 = require("../services/thecocktaildb");
const dialog = {
    id: 'How to make a cocktail',
    name: 'How to make a cocktail',
    waterfall: [
        (session, args, next) => {
            console.log(args);
            if (args === undefined) {
                session.endConversation('something went wrong- couldn\'t get intenet');
            }
            const entity = builder.EntityRecognizer.findEntity(args.intent.entities, 'cocktail name');
            if (entity)
                next({ response: entity.entity });
            else
                builder.Prompts.text(session, 'Please provide cocktail name');
        },
        (session, results, next) => {
            session.send(`You said ${results.response}`);
            thecocktaildb_1.thecocktaildb.getcocktails(results.response, 5).then(function (cocktails) {
                console.log(`cocktails.length:${cocktails.length}`);
                if (cocktails.length > 0) {
                    var cards = [];
                    cocktails.forEach(cocktail => {
                        var card = new builder.HeroCard(session)
                            .title(cocktail.title)
                            .subtitle('')
                            .text(cocktail.instructions + '\n\r\n ' + cocktail.ingredients.join(' \r\n '))
                            .images([
                            builder.CardImage.create(session, cocktail.image)
                        ]);
                        cards.push(card);
                    });
                    var reply = new builder.Message(session)
                        .attachmentLayout(builder.AttachmentLayout.carousel)
                        .attachments(cards);
                    session.send(reply);
                    session.endConversation();
                }
                else {
                    session.endConversation("couldn't find any result");
                }
            })
                .catch(function (err) {
                console.log('error', err.message);
            });
        }
    ]
};
exports.default = dialog;
