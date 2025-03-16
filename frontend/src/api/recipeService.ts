import axios from 'axios';

const BASE_URL = 'http://localhost:3001/recipes';

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
  category?: string,
): Promise<Recipe[]> => {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        ingredient,
        country,
        category,
      },
    });
    return response.data.recipes || [];
  } catch (error) {
    console.error('Failed to fetch recipes:', error);
    throw new Error('Failed to fetch recipes');
  }
};

export const fetchRecipeById = async (id: string): Promise<Recipe | null> => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data.recipe || null;
  } catch (error) {
    console.error('Failed to fetch recipe by ID:', error);
    throw new Error('Failed to fetch recipe by ID');
  }
};
