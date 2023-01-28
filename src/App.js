import './App.css';
import NavBar from './components/NavBar/NavBar';
import Price from './components/Price/Price';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 className='text-4xl underline'>this is tailwind css</h1>
      <p>these are tailwind paragraph</p>
      <Price></Price>
    </div>
  );
}

export default App;
