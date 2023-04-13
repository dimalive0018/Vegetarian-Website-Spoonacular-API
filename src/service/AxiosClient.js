import axios from "axios";

export const base = axios.create({
    baseURL: `https://api.spoonacular.com/recipes/`
})

export const random = axios.create({
    baseURL: `https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_API_KEY}&number=10&tags=vegetarian`
});