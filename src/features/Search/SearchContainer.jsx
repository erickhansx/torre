import { useContext, useEffect, useState } from 'react';
import { getSearch } from '../../services/apiTorre';
import User from '../User/User';
import AppContext from '../../AppContext';

const SearchContainer = () => {
  const { searchResult, setSearchResult, query } = useContext(AppContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchResult?.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    // Get stored data only on the initial component render
    let storedData = localStorage.getItem('current');
    if (storedData) {
      setSearchResult(JSON.parse(storedData));
    }
  }, []); // Note the empty dependency array

  const nextPage = () => {
    if (currentPage < Math.ceil(searchResult?.length / itemsPerPage)) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (query === '') return;
    const controller = new AbortController();
    const signal = controller.signal;
    async function retrieveData() {
      const data = await getSearch(query, signal);
      setSearchResult(data);
      // Update local storage only when you get new search results
      localStorage.setItem('current', JSON.stringify(data));
    }
    retrieveData();
    return () => controller.abort();
  }, [query]);

  return (
    <div className="w-full flex flex-col items-center lg:max-w-[50%] justify-center">
      {Array.isArray(currentItems) &&
        currentItems.map((user) => <User user={user} key={user.ardaId} />)}
      {currentItems?.length < 1 &&
        currentItems.map((user) => <User user={user} key={user.ardaId} />)}{' '}
      <div className="pagination-controls">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {Math.ceil(searchResult?.length / itemsPerPage)}
        </span>
        <button
          onClick={nextPage}
          disabled={
            currentPage === Math.ceil(searchResult?.length / itemsPerPage)
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SearchContainer;
