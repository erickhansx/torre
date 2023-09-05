import { useEffect, useState } from 'react';

const User = ({ user }) => {
  const [isChecked, setIsChecked] = useState(false);
  const { name, professionalHeadline: headline, imageUrl: image } = user;

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
    <div className="flex w-[90%] text-yellow-300 justify-between bg-black py-8 my-4 px-4 rounded-md">
      <div className="flex w-[60%]">
        <img
          src={`${image}`}
          alt="profile image"
          className="max-w-[50px] max-h-[50px] rounded-full border-gray-600 border-8"
        />
        <div className="ml-4">
          <h1 className="md:text-lg sm:tracking-wide sm:text-sm text-xs ">
            {name}
          </h1>
          <span className="md:text-base sm:tracking-wide text-xs text-yellow-300/40 ">
            {headline}
          </span>
        </div>
      </div>
      <div>
        <div className="flex gap-2">
          <span>Favorite?</span>
          <input
            type="checkbox"
            className="hover:ring hover:ring-yellow-300 right-[20%]"
            checked={isChecked}
            onChange={handleIschecked}
          />
        </div>
        <div>
          <button className="border-yellow-300 text-stone-800 border py-2 px-4 rounded-full bg-yellow-400 hover:ring hover:ring-offset-1">
            Message
          </button>
          <button className="border-stone-800 text-yellow-300 border py-2 px-6 rounded-full bg-stone-800 hover:ring hover:ring-offset-1">
            Signal
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
