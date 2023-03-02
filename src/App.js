import Product from './Components/Product';
import './App.css';


function App() {
  const product=[
    {
      id:1,
      title:'Product 1',
      price:'$10',
      description:'First product'
    },
    {
      id:2,
      title:'Product 2',
      price:'$20',
      description:'Second product'
    }
  ]
  return (
    <div className="App">
      <h1>My Demo Shop</h1>
      <Product item={product} />
    </div>
  );
}

export default App;
