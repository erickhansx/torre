const SearchInput = ({ onChange, query }) => {
  return (
    <div className="w-full flex justify-center items-center">
      <input
        type="text"
        placeholder="Search..."
        className="w-[30%]  rounded-full py-2 px-4 text-black "
        onChange={onChange}
        value={query}
      />
    </div>
  );
};

export default SearchInput;
