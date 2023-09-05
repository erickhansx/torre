import { useEffect, useState } from 'react';

const Favorite = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const getFavorites = async () => {
      const response = await fetch('http://localhost:3000/users');
      const data = await response.json();
      setFavorites(data);
      console.log(data);
    };
    getFavorites();

    return () => {
      console.log('cleanup');
    };
  }, []);

  return (
    <div className="text-yellow-50 min-h-[85dvh] flex flex-col justify-center items-center">
      <h1 className="text-3xl">Favorites</h1>
      <div className="flex flex-col items-center">
        {favorites.map((user) => (
          <div
            className="flex w-[90%] text-yellow-300 justify-between bg-black py-8 my-4 px-4 rounded-md"
            key={user.id}
          >
            <div className="flex w-[60%]">
              <img
                src={`${user.imageUrl}`}
                alt="profile image"
                className="max-w-[50px] max-h-[50px] rounded-full border-gray-600 border-8"
              />
              <div className="ml-4">
                <h1 className="md:text-lg sm:tracking-wide sm:text-sm text-xs ">
                  {user.name}
                </h1>
                <span className="md:text-base sm:tracking-wide text-xs text-yellow-300/40 ">
                  {user.headline}
                </span>
              </div>
            </div>
            <div>
              <div className="flex gap-2">
                <span>Favorite?</span>
                <input
                  type="checkbox"
                  className="hover:ring hover:ring-yellow-300 right-[20%]"
                />
              </div>
              <div>
                <button className="border-yellow-300 text-stone-800 border py-2 px-4 rounded-full bg-yellow-400 hover:ring hover:ring-offset-1">
                  Message
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorite;
