
import './App.css';
import {useState , useEffect } from 'react';
import Home from './components/pages/home';
import NavBar from './components/layout/navbar';
import CarrinhoContext from './components/context/carrinhoContext';

function App() {


const [produtos, setProdutos] = useState();
const [active, setTrue] = useState(false);
useEffect(() => {
  fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=15&sortBy=id&orderBy=ASC',{
    method: 'GET',
    headers: {
        'content-type' : 'application/json'
    }
  }).then(resp => resp.json())
  .then((data) => {
      setProdutos(data.products);
      setTrue(true)
  })
  .catch(err => console.log(err))
},[])

const [carrinho , setCarrinho ] = useState([])
  
  return (

    <CarrinhoContext.Provider value={{carrinho, setCarrinho}}>
      <div className="App">
       <NavBar />
          <Home dados={produtos} status={active}/>   
      }
      </div>
    </CarrinhoContext.Provider>

  );
}

export default App;
