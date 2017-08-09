# the cocktail master
This bot has been created using [Microsoft Bot Framework](https://dev.botframework.com), and scaffolded using the [Bot Builder Yeoman generator](https://github.com/GeekTrainer/generator-botbuilder).

This bot is designed to do the following:

It's a bot that you can ask how to make cocktail and it will return back the cocktail recipe.

question : how to make margarita
answer : It will return top 5 margarita recipes

## .env file

create a file named .env in your root folder and copy and paste the following keys and set values accordingly 

PORT=3978
MICROSOFT_APP_ID=
MICROSOFT_APP_PASSWORD=
KBID=
SUBSCRIPTION_KEY=
LUIS_MODEL_URL=


## How to set up LUIS
the luis model is under luis model folder and you easily import it to yours 
1- go to https://www.luis.ai/home
2- click on Import App select the TheCocktailDB.json from /luis model/TheCocktailDB.json
3- update 

## About the generator

The goal of the BotBuilder Yeoman generator is to both scaffold out a bot according to general best practices, and to provide some templates you can use when implementing commonly requested features and dialogs in your bot. As a result, you will notice that all dialogs are located in a folder called `dialogs`, and the one you chose when running the wizard becomes the default (or root) dialog. You are free to use the additional dialogs provided (or delete them) as you see fit.

One thing to note is it's not possible to completely generate a bot or dialog, as the questions you need to ask of your user will vary wildly depending on your scenario. As such, we hope we've given you a good starting point for building your bots with Bot Framework.

### Dialogs

This generator provides the following dialogs:
- LUIS Dialog, for use with [LUIS](https://luis.ai)
- QnA Maker Dialog, for use with [QnA Maker](https://qnamaker.ai)
- Echo Dialog, for simple bots

Each class has three properties to help simplify addition to an existing bot:
- id: Used for the id
- waterfall: The logic (or waterfall) for the dialog
- name: The intent name for the dialog for triggering

You can add a dialog to a bot with the following code:

``` javascript
// declare your dialog

bot.dialog(dialog.id, dialog.waterfall).triggerAction({ matches: dialog.name });
```

By using this structure, it would be possible to dynamically load all of the dialogs in the `dialogs` folder, and then add them to the bot.

## Getting Started

### Dependencies

- **[Restify](http://restify.com)** Used to host the web service for the bot, and for making REST calls
- **[dotenv](https://github.com/motdotla/dotenv)** Used to manage environmental variables

### Structure

`app.ts` references the bot and starts a Restify server. `bot.ts` loads the dialog type you selected when running the generator and adds it as the default dialog. `dialogs.ts` contains the list of sample dialogs.

### Configuring the bot

Update `.env` with the appropriate keys:

- KBID and SUBSCRIPTION_KEY for QnA Maker
- LUIS_MODEL_URL for LUIS
- App ID and Key for registered bots.

In the case of LUIS, you will need to update the dialog in `dialogs.ts` to work with the appropriate intent and entities.

### The dialogs

- Echo dialog is designed for simple Hello, World demos and to get you started.
- LUIS dialog has the basic code to retrieve an entity

### Running the bot

```
tsc
node app.js
```

## Additional Resources

- [Microsoft Virtual Academy Bots Course](http://aka.ms/botcourse)
- [Bot Framework Documentation](https://docs.botframework.com)
- [LUIS](https://luis.ai)
- [QnA Maker](https://qnamaker.ai)


#Privcay
privacy policy

It's an open source code and chat bot

Credit

This document was created using a Contractology template available at http://www.contractology.com. No warranties

This website is provided “as is” without any representations or warranties, express or implied. Azadeh Khojandi makes no representations or warranties in relation to this website or the information and materials provided on this website. Without prejudice to the generality of the foregoing paragraph, Azadeh Khojandi does not warrant that: this website will be constantly available, or available at all; or the information on this website is complete, true, accurate or non-misleading. Nothing on this website constitutes, or is meant to constitute, advice of any kind. Limitations of liability

Azadeh Khojandi will not be liable to you (whether under the law of contract, the law of torts or otherwise) in relation to the contents of, or use of, or otherwise in connection with, this website: [to the extent that the website is provided free-of-charge, for any direct loss;] for any indirect, special or consequential loss; or for any business losses, loss of revenue, income, profits or anticipated savings, loss of contracts or business relationships, loss of reputation or goodwill, or loss or corruption of information or data. These limitations of liability apply even if Azadeh Khojandi has been expressly advised of the potential loss. Exceptions

Nothing in this website disclaimer will exclude or limit any warranty implied by law that it would be unlawful to exclude or limit; and nothing in this website disclaimer will exclude or limit Azadeh Khojandi liability in respect of any: death or personal injury caused by Azadeh Khojandi's negligence; fraud or fraudulent misrepresentation on the part of Azadeh Khojandi; or matter which it would be illegal or unlawful for Azadeh Khojandi to exclude or limit, or to attempt or purport to exclude or limit, its liability. Reasonableness

By using this website, you agree that the exclusions and limitations of liability set out in this website disclaimer are reasonable. If you do not think they are reasonable, you must not use this website. Other parties

[You accept that, as a limited liability entity, Azadeh Khojandi has an interest in limiting the personal liability of its officers and employees. You agree that you will not bring any claim personally against Azadeh Khojandi officers or employees in respect of any losses you suffer in connection with the website.] you agree that the limitations of warranties and liability set out in this website disclaimer will protect Azadeh's officers, employees, agents, subsidiaries, successors, assigns and sub-contractors as well as Azadeh Khojandi. Unenforceable provisions

If any provision of this website disclaimer is, or is found to be, unenforceable under applicable law, that will not affect the enforceability of the other provisions of this website disclaimer. You must retain the "Credit" section in this document. If you wish to use the document without the "Credit" section (e.g. to project a more professional image) then you can get a license to do so here: http://www.contractology.com/free-document-license-website-disclaimer.html It is an infringement of our copyright to use the document without the "Credit" section and without paying the license fee.
