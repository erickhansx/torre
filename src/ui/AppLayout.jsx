import { Outlet } from 'react-router-dom';
import NavTabs from './NavTabs';

const AppLayout = () => {
  return (
    <div className="pt-14">
      <NavTabs />
      <div className="bg-stone-600">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
