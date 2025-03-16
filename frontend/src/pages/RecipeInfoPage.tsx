import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchRecipeById } from '../api/recipeService';

interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strArea: string;
  strCategory: string;
  strInstructions: string;
  [key: string]: string;
}

const RecipeInfoPage = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const loadRecipe = async () => {
      try {
        const data = await fetchRecipeById(id!);
        setRecipe(data);
      } catch (err) {
        console.log(err);
        setError('Failed to fetch recipe details');
      } finally {
        setLoading(false);
      }
    };

    loadRecipe();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!recipe) return <div>Recipe not found</div>;

  return (
    <div className="p-4 gap-4 flex flex-col">
      <h1 className="text-3xl font-bold text-center">{recipe.strMeal}</h1>
      <Link
        to={`/?country=${recipe.strArea}`}
        className=" text-xl font-semibold hover:text-cyan-300 inline-flex justify-center"
      >
        Country:{recipe.strArea}
      </Link>
      <div className="flex flex-col md:flex-row gap-4 mt-4">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full md:w-1/2 rounded-lg"
        />
        <div className="w-full flex gap-4 flex-col">
          <h2 className="text-2xl font-semibold text-center">Instructions:</h2>
          <p>{recipe.strInstructions}</p>
        </div>
      </div>
      <Link
        to={`/?category=${recipe.strCategory}`}
        className="text-xl font-semibold hover:text-cyan-300"
      >
        Category: {recipe.strCategory}
      </Link>
    </div>
  );
};

export default RecipeInfoPage;
