import { Request, Response } from "express";
import { HttpError } from "../helpers/HttpError";
import { fetchRecipeById, fetchRecipes } from "../services/recipeService";

export const getRecipes = async (req: Request, res: Response) => {
  const { ingredient, country, category } = req.query;

  try {
    const recipes = await fetchRecipes(
      ingredient as string,
      country as string,
      category as string
    );
    res.json({
      status: "success",
      code: 200,
      recipes,
    });
  } catch (error) {
    throw HttpError(500, "Failed to fetch recipes");
  }
};

export const getRecipeById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const recipe = await fetchRecipeById(id);
    if (recipe) {
      res.json(recipe);
    } else {
      res.status(404).json({ error: "Recipe not found" });
    }
  } catch (error) {
    throw HttpError(500, "Failed to fetch recipe details");
  }
};
