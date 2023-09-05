const fakeUsers = [
  {
    name: 'erick hans martinez',
    profession: 'Software Developer',
  },
  {
    name: 'Diego Canales',
    profession: 'Artist',
  },
];

const SearchContainer = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {fakeUsers.map((user) => (
        <div key={user.name}>
          {user.name}
          {user.profession}
        </div>
      ))}
    </div>
  );
};

export default SearchContainer;
