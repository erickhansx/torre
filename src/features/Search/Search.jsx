import { useState } from 'react';
import SearchContainer from './SearchContainer';
import SearchInput from './SearchInput';
const Search = () => {
  const [query, setQuery] = useState('');
  const onChange = (e) => {
    setQuery(e.target.value);
  };
  console.log(query);

  return (
    <div className="text-yellow-50 min-h-[85dvh] flex flex-col justify-center">
      <SearchInput onChange={onChange} query={query} />
      <SearchContainer query={query} />
    </div>
  );
};

export default Search;
