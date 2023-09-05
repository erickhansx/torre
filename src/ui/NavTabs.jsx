import { Link } from 'react-router-dom';

const NavTabs = () => {
  return (
    <div className="flex w-full items-end justify-center text-yellow-300">
      <Link
        to={'/'}
        className="bg-stone-600 py-4 px-14 text-center w-[25%] border-t-2 border-yellow-100 rounded-t-xl hover:bg-stone-900 active:bg-slate-800 transition-all duration-300"
      >
        Search
      </Link>
      <div className="bg-stone-600 py-4 px-14 text-center w-[25%] border-t-2 border-yellow-100 rounded-t-xl hover:bg-stone-900 active:bg-slate-800 transition-all duration-300">
        Profile
      </div>
      <div className="bg-stone-600 py-4 px-14 text-center w-[25%] border-t-2 border-yellow-100 rounded-t-xl hover:bg-stone-900 active:bg-slate-800 transition-all duration-300">
        Favorites
      </div>
    </div>
  );
};

export default NavTabs;
