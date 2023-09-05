import { useEffect, useState } from 'react';
import { getRecent } from '../../services/apiTorre';

const Recent = () => {
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    async function retrieveRecent() {
      const data = await getRecent();
      setRecentSearches(data.slice(-10));
    }
    retrieveRecent();
  }, []);

  return (
    <div className="flex flex-col items-center max-w-[80%]">
      <h1 className="font-thin text-sm">Recent Searches:</h1>
      <ul className="flex gap-1 font-thin">
        {recentSearches.map((search, index) => (
          <li key={index} className="bg-yellow-100/20 lg:rounded-full md:px-2">
            {search.term.slice(0, 7) + '...'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recent;
