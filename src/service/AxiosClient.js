import axios from "axios";

export const base = axios.create({
    baseURL: `https://api.spoonacular.com/recipes/`
})

export const random = axios.create({
    baseURL: `https://api.spoonacular.com/recipes/random?apiKey=07bd69f8eeda4cf7bad20b62c75044fb
&number=10&tags=vegetarian`
});
