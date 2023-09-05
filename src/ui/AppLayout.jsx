import { Outlet, useNavigation } from 'react-router-dom';
import NavTabs from './NavTabs';
import Loader from './Loader';

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  return (
    <div className="pt-14">
      {isLoading && <Loader />}
      <NavTabs />
      <div className="bg-primary">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
