import './App.css';
import { CategoryDropdown } from './components/CategoryDropdown';
import { Movie } from './components/Movie';

function App() {
  return (
    <div class="container bg-cyan-100 mx-auto">
      <CategoryDropdown />

      <Movie 
        title='Lśnienie'
        category='Horror'
        production_year='1999'
        price='35'
      />

    </div>
  );
}

export default App;
