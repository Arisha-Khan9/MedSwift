import { useState } from 'react';
import { IoSearch } from 'react-icons/io5';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch(query);
    }
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden w-full max-w-2xl">
      {/* 🔎 Search Icon */}
      <span className="px-3 text-blue-500 text-lg">
        <IoSearch />
      </span>

      {/* 🔍 Input Field */}
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Search products..."
        className="flex-grow p-2 focus:outline-none"
      />

      {/* 🔘 Search Button (Now Inside the Bar) */}
      <button
        onClick={() => onSearch(query)}
        className="p-2 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
