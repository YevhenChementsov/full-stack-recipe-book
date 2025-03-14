import express from 'express';
import { getRecipeById, getRecipes } from '../controllers/recipeController';
import { ctrlWrapper } from '../helpers/ctrlWrapper';

type Router = express.Router;

const router: Router = express.Router();

router.get('/', ctrlWrapper(getRecipes));
router.get('/:id', ctrlWrapper(getRecipeById));

export default router;
