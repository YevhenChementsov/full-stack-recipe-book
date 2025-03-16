import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import RecipeFilter from '@/components/RecipeFilter/RecipeFilter';
import RecipeList from '@/components/RecipeList/RecipeList';
import { fetchRecipes } from '../api/recipeService';

export interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strArea: string;
  strCategory: string;
  strInstructions: string;
  [key: string]: string;
}

const HomePage = () => {
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        const ingredient = searchParams.get('ingredient');
        const country = searchParams.get('country');
        const category = searchParams.get('category');

        const data = await fetchRecipes(
          ingredient || undefined,
          country || undefined,
          category || undefined,
        );
        setFilteredRecipes(data);
      } catch (err) {
        console.log(err);
        setError('Failed to fetch recipes');
      } finally {
        setLoading(false);
      }
    };

    loadRecipes();
  }, [searchParams]);

  const handleFilter = async (filterType: string, filterValue: string) => {
    try {
      let data: Recipe[] = [];
      if (filterType === 'ingredient') {
        data = await fetchRecipes(filterValue);
      } else if (filterType === 'country') {
        data = await fetchRecipes(undefined, filterValue);
      } else if (filterType === 'category') {
        data = await fetchRecipes(undefined, undefined, filterValue);
      } else {
        data = await fetchRecipes();
      }
      setFilteredRecipes(data);
    } catch (err) {
      console.log(err);
      setError('Failed to apply filter');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <RecipeFilter onFilter={handleFilter} />
      <h1 className="font-bold text-3xl tracking-wider">{`Our Best Recipes...`}</h1>
      <RecipeList recipes={filteredRecipes} />
    </>
  );
};

export default HomePage;
