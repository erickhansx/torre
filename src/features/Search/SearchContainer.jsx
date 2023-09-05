import { useContext, useEffect, useState } from 'react';
import { getSearch } from '../../services/apiTorre';
import User from '../User/User';
import AppContext from '../../AppContext';
import Loader from '../../ui/Loader';
import useDebounce from '../../helpers/useDebounce';

const SearchContainer = () => {
  const { searchResult, setSearchResult, query } = useContext(AppContext);
  const [currentPage, setCurrentPage] = useState(1);
  const { isLoading, setIsLoading } = useContext(AppContext);
  const debouncedQuery = useDebounce(query, 500);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchResult?.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    let storedData = localStorage.getItem('current');
    if (storedData && storedData !== 'undefined') {
      setSearchResult(JSON.parse(storedData));
    }
  }, []);

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
    if (debouncedQuery === '') return;
    setIsLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;

    async function retrieveData() {
      try {
        const data = await getSearch(debouncedQuery, signal);
        setSearchResult(data);
        localStorage.setItem('current', JSON.stringify(data));
      } catch (error) {
        console.error('There was an error fetching the users:', error);
      } finally {
        setIsLoading(false);
      }
    }

    retrieveData();

    return () => controller.abort();
  }, [debouncedQuery]);

  return (
    <div className="w-full flex flex-col items-center lg:max-w-[50%] justify-center">
      {isLoading && <Loader />}
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
