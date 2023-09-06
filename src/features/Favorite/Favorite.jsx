import { useContext, useEffect } from 'react';
import AppContext from '../../AppContext';

const Favorite = () => {
  const { favorites, setFavorites } = useContext(AppContext);

  useEffect(() => {
    const getFavorites = async () => {
      const response = await fetch('https://torre-api.onrender.com/users');
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
    <div className="text-text-color-d2-50 min-h-[85dvh] flex flex-col justify-center items-center">
      <div className="flex flex-col items-center">
        {favorites.map((user) => (
          <div
            className="flex w-[90%] text-color-d2 justify-between bg-black py-8 my-4 px-4 rounded-md"
            key={user.id}
          >
            <div className="flex w-[60%] ">
              <img
                src={`${user.imageUrl}`}
                alt="profile image"
                className="max-w-[50px] max-h-[50px] rounded-full border-gray-600 border-8"
              />
              <div className="ml-4">
                <h1 className="md:text-lg sm:tracking-wide sm:text-sm text-xs text-text-color-d2 ">
                  {user.name}
                </h1>
                <span className="md:text-base sm:tracking-wide text-xs text-white ">
                  {user.headline}
                </span>
              </div>
            </div>
            <div>
              <div>
                <button className="border-text-color-d2 text-text-color-d2 border py-2 px-4 rounded-full bg-text-color-d2-400 hover:ring hover:ring-offset-1">
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
