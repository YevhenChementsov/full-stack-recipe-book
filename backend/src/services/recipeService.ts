import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const BASE_URL = process.env.BASE_URL;

interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strArea: string;
  strCategory: string;
  strInstructions: string;
  [key: string]: string;
}

export const fetchRecipes = async (
  ingredient?: string,
  country?: string,
  category?: string
): Promise<Recipe[]> => {
  let url = `${BASE_URL}/search.php?s=`;

  if (ingredient) {
    url = `${BASE_URL}/filter.php?i=${ingredient}`;
  } else if (country) {
    url = `${BASE_URL}/filter.php?a=${country}`;
  } else if (category) {
    url = `${BASE_URL}/filter.php?c=${category}`;
  }

  const response = await axios.get(url);
  return response.data.meals || [];
};

export const fetchRecipeById = async (id: string): Promise<Recipe | null> => {
  const response = await axios.get(`${BASE_URL}/lookup.php?i=${id}`);
  return response.data.meals?.[0] || null;
};
