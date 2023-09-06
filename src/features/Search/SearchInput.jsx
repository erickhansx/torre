import { useContext } from 'react';
import AppContext from '../../AppContext';
import Recent from '../Recent/Recent';

const SearchInput = ({ onChange }) => {
  const { query } = useContext(AppContext);
  return (
    <>
      <div className="w-full flex justify-center items-center mt-8">
        <input
          type="text"
          placeholder="Search..."
          className="w-[30%]  rounded-full py-2 px-4 text-black "
          onChange={onChange}
          value={query}
        />
      </div>
      <Recent />
    </>
  );
};

export default SearchInput;
