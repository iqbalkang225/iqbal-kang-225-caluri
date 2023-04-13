export const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST,
  },
}

export const searchByName = name =>
  `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/products/search?query=${name}`

export const searchById = id => `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/products/${id}`
