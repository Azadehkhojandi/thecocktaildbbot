import * as request from "request"
import {ICocktail} from "./icocktail"
export class thecocktaildb {
    public static getcocktails(cocktailname: string, max: number = 5): Promise<ICocktail[]> {


        return new Promise((resolve, reject) => {

            const path = `http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailname}`;

            request(path, function (error, response, body) {
                let cocktails: ICocktail[]=[];
                let ingredients: string[] = [];
                if (error) {
                    console.error(error);
                    reject(error);
                }
                let result = JSON.parse(body);


                if (result != undefined && result.drinks != undefined && result.drinks.length > 0) {
                    var top5 = result.drinks.filter(function (drink) {
                        return drink.strDrinkThumb != null;
                    }).slice(0, max);

                    top5.forEach(element => {


                        for (let i = 1; i <= 15; i++) {
                            var ingredient = element[`strIngredient${i}`] + ' ' + element[`strMeasure${i}`];

                            ingredients.push(ingredient);

                        }



                        var cocktail :ICocktail= {
                            title: element.strDrink,
                            instructions: element.strInstructions,
                            ingredients: ingredients.filter(i => i.replace('\n\r', '') !== ''),
                            image: element.strDrinkThumb
                        }


                        cocktails.push(cocktail);


                    });
                }
                resolve(cocktails)

            });




        });


    }
}