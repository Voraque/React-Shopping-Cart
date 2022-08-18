import './App.css';
import Cart from './Cart'

const items = [
  {id: 1, name: 'EMP Grenade', price: 150, qty: 3 },
  {id: 2, name: 'Sober Time Slap Patch', price: 325, qty: 2 },
  {id: 3, name: 'Data Chip', price: 5, qty: 50 },
  {id: 4, name: 'Defiance EX Shocker', price: 250, qty: 1 }
];

function App() {
  return (
    <>
    <Cart initialItems={items}/>
    </>
  );
}

export default App;
