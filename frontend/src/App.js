import { StickyNavbar } from './components/StickyNavbar';
import './App.css';
import { MovieList } from './components/MovieList';
import { MovieDetails } from './components/MovieDetails';
import { CartTable } from './components/CartTable';

function App() {
  return (
    <div className="container bg-gray-50 mx-auto h-full">
      <StickyNavbar />
      <div className="p-10">
        <CartTable />
        {/* <MovieList /> */}
      </div>
    </div>
  );
}

export default App;
