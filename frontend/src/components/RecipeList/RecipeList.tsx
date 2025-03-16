import { Recipe } from '@/pages/HomePage';
import { Link } from 'react-router-dom';

interface RecipeListProps {
  recipes: Recipe[];
}

const RecipeList = ({ recipes }: RecipeListProps) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5">
      {recipes?.map(({ idMeal, strMeal, strMealThumb }) => (
        <Link
          to={`/${idMeal}`}
          key={idMeal}
          className="border rounded-lg overflow-hidden shadow cursor-pointer hover:shadow-lg sm:hover:scale-105"
        >
          <img
            src={`${strMealThumb}`}
            alt={strMeal}
            width={240}
            height={240}
            className="w-full"
          />
          <h2 className="flex justify-center items-center text-xl hover:text-cyan-300 min-h-12">
            {strMeal.length > 20 ? strMeal.slice(0, 22) + '...' : strMeal}
          </h2>
        </Link>
      ))}
    </ul>
  );
};

export default RecipeList;
