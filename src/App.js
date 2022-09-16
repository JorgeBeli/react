import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <header className='navbar__wraper'>
        <Navbar/>
      </header>
      <main>
        <ItemListContainer greeting={'Our Products'}/>
      </main>
    </>
  );
}

export default App;