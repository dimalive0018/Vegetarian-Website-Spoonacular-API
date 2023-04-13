import axios from "axios";

export const base = axios.create({
    baseURL: `https://api.spoonacular.com/recipes/`
})

export const random = axios.create({
    baseURL: `https://api.spoonacular.com/recipes/random?apiKey=${process.env.API_KEY}&number=10&tags=vegetarian`
});