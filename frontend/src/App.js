import { StickyNavbar } from './components/StickyNavbar';
import './App.css';
import { Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <div className="container bg-gray-50 mx-auto h-full">
      <StickyNavbar />
      <div className="p-10">
        <Outlet />
      </div>
    </div>
  );
}
