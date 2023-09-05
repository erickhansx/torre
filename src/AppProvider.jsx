import { useState } from 'react';
import AppContext from './AppContext';

export default function AppProvider({ children }) {
  const [query, setQuery] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [users, setUsers] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <AppContext.Provider
      value={{
        query,
        setQuery,
        favorites,
        setFavorites,
        users,
        setUsers,
        searchResult,
        setSearchResult,
        currentPage,
        setCurrentPage,
        onChange,
        isLoading,
        setIsLoading,
        recentSearches,
        setRecentSearches,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
