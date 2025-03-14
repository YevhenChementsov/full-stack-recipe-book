import { Request, Response } from 'express';
import { HttpError } from '../helpers/HttpError';
import { fetchRecipeById, fetchRecipes } from '../services/recipeService';

export const getRecipes = async (req: Request, res: Response) => {
  const { ingredient, country, category } = req.query;

  const recipes = await fetchRecipes(
    ingredient as string,
    country as string,
    category as string,
  );

  res.json({
    status: 'success',
    code: 200,
    recipes,
  });
};

export const getRecipeById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const recipe = await fetchRecipeById(id);

  if (!recipe) {
    throw HttpError(404, 'Recipe not found');
  }

  res.json({
    status: 'success',
    code: 200,
    recipe,
  });
};
