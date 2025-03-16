import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface FilterProps {
  onFilter: (filterType: string, filterValue: string) => void;
}

const RecipeFilter = ({ onFilter }: FilterProps) => {
  const [filterType, setFilterType] = useState('all');
  const [filterValue, setFilterValue] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const params = new URLSearchParams();
    if (filterType !== 'all' && filterValue) {
      params.set(filterType, filterValue);
    }
    navigate(`/?${params.toString()}`);

    onFilter(filterType, filterValue);
  };

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className="flex space-x-4 justify-center"
    >
      <select
        className="p-2 border rounded bg-cyan-300 text-white"
        value={filterType}
        onChange={e => setFilterType(e.target.value)}
      >
        <option value="all">All</option>
        <option value="ingredient">Ingredient</option>
        <option value="country">Country</option>
        <option value="category">Category</option>
      </select>
      <input
        type="text"
        className="p-2 border rounded"
        placeholder="Enter filter value"
        value={filterValue}
        onChange={e => setFilterValue(e.target.value)}
      />
      <button
        className="p-2 bg-cyan-300 rounded font-medium text-white"
        type="submit"
      >
        Apply Filter
      </button>
    </form>
  );
};

export default RecipeFilter;
