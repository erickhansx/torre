import { Link, useLocation } from 'react-router-dom';

const NavTabs = () => {
  const location = useLocation();

  const isSelected = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="flex w-full items-end justify-center text-text-color-d2">
      <Link
        to={'/'}
        className={` py-4 px-14 text-center w-[25%] border-t-2 border-text-color-d2/30 rounded-t-xl hover:bg-stone-900 active:bg-slate-800 transition-all duration-300 ${
          isSelected('/') ? 'bg-primary' : ''
        }`}
      >
        Search
      </Link>
      <Link
        to={'/favorites'}
        className={` py-4 px-14 text-center w-[25%] border-t-2 border-text-color-d2/30 rounded-t-xl hover:bg-stone-900 active:bg-slate-800 transition-all duration-300 ${
          isSelected('/favorites') ? 'bg-primary' : ''
        }`}
      >
        Favorites
      </Link>
    </div>
  );
};

export default NavTabs;
