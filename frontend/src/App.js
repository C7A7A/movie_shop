import { StickyNavbar } from './components/StickyNavbar';
import './App.css';
import { MovieList } from './components/MovieList';

function App() {
  return (
    <div className="container bg-gray-50 mx-auto h-full">
      <StickyNavbar />
      <div className="p-10">
        <MovieList />
      </div>
    </div>
  );
}

export default App;
