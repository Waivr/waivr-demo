import { Outlet } from 'react-router-dom';

const DemoLayout = () => {
  return (
    <div>
      demo layout
      <Outlet />
    </div>
  );
};

export default DemoLayout;
