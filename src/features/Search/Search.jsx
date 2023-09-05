import { useContext } from 'react';
import SearchContainer from './SearchContainer';
import SearchInput from './SearchInput';
import AppContext from '../../AppContext';
const Search = () => {
  const { query, setQuery } = useContext(AppContext);

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="text-yellow-50 min-h-[85dvh] flex flex-col justify-center items-center">
      <SearchInput onChange={onChange} query={query} />
      <SearchContainer query={query} />
    </div>
  );
};

export default Search;
