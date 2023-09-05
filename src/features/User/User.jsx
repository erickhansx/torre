import { useContext, useState } from 'react';
import { postRecent } from '../../services/apiTorre';
import AppContext from '../../AppContext';

const User = ({ user }) => {
  const [isChecked, setIsChecked] = useState(false);
  const { name, professionalHeadline: headline, imageUrl: image } = user;
  const { setRecentSearches } = useContext(AppContext);

  const handleOnClick = () => {
    postRecent(name);
    setRecentSearches((prevSearches) => {
      const nextSearches = [...prevSearches];
      nextSearches.unshift({ term: name });
      return nextSearches;
    });
    window.open(`https://torre.ai/${user.username}`, '_blank');
  };

  const handleIschecked = () => {
    setIsChecked((prevChecked) => {
      const nextChecked = !prevChecked;
      if (nextChecked) {
        const userData = {
          name,
          headline,
          imageUrl: image,
          ardaId: user.ardaId,
        };
        fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user: userData }),
        });
      }

      return nextChecked;
    });
  };

  return (
    <div className="flex w-[90%] text-text-color-d2 justify-between bg-black py-8 my-4 px-4 rounded-md">
      <div className="flex w-[60%] cursor-pointer" onClick={handleOnClick}>
        <img
          src={`${image}`}
          alt="profile image"
          className="max-w-[50px] max-h-[50px] rounded-full border-gray-600 border-8"
        />
        <div className="ml-4">
          <h1 className="md:text-lg sm:tracking-wide sm:text-sm text-xs ">
            {name}
          </h1>
          <span className="md:text-base sm:tracking-wide text-xs text-white ">
            {headline}
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex gap-2 bg-yellow-950/30 text-yellow-400/30 py-2 px-4 rounded-full max-w-[70%] items-center justify-center mb-3">
          <span>Favorite?</span>
          <input
            type="checkbox"
            className="hover:ring hover:ring-text-color-d2 right-[20%]"
            checked={isChecked}
            onChange={handleIschecked}
          />
        </div>
        <div>
          <button
            onClick={handleOnClick}
            className="border-text-color-d2/80 text-stone-800 border py-2 px-4 rounded-full bg-text-color-d2 hover:ring hover:ring-offset-1"
          >
            Message
          </button>
          <button
            onClick={handleOnClick}
            className="border-stone-800 text-text-color-d2 border py-2 px-6 rounded-full bg-stone-800 hover:ring hover:ring-offset-1"
          >
            Signal
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
