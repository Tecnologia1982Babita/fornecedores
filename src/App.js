import React, { Component } from 'react';
//import api from './api';
//import Header from "./components/header/Header";
import Routes from './routes';
//import TabelaFornecedor from './components/tabelaFornecedor/TabelaFornecedor';
import "react-datepicker/dist/react-datepicker.css";
//import  './App.scss';

/*class App extends Component{

  state = {
    usuarios: [],


  }

async componentDidMount(){
  const response = await api.get('/usuarios'); 

  //console.log(response.data);

  this.setState({usuarios: response.data})
} 

  render(){

    const {usuarios} = this.state;

    console.log(usuarios);

    return(
      <div>
        <h1>Venda Diária</h1>
        <ul style={{listStyleType: "none", margin:0, padding:0}}>
         {usuarios.map(usuarios => (
           <li key={usuarios.lojas_nome}>
             <h2>Loja: {usuarios.lojas_nome}</h2>
             <p>Valor: {usuarios.total}</p>
           </li>

         ))}cd re 
        </ul>
      </div>
    );
  };
};

export default App;*/


//teste
export default class App extends Component {
  render() {
    return (
        <div>
          <Routes/>
        </div>
    );
  }
}

///scrip pm2 aws
//pm2 start --name frontthinkfornecedoresfinal npm -- start