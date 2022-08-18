import './App.css';
import Cart from './Cart'

const items = [
  { id: 1, name: 'Data Chip', price: 5, qty: 50 },
  { id: 2, name: 'EMP Grenade', price: 125, qty: 3 },
  { id: 3, name: 'Defiance EX Shocker', price: 250, qty: 1 },
  { id: 4, name: 'Sober Time Slap Patch', price: 325, qty: 2 }
];

function App() {
  return (
    <>
      <Cart initialItems={items} />
    </>
  );
}

export default App;
