import { FiSearch } from 'react-icons/fi';
import './styles.css';
import { useState } from 'react';
import api from './services/api';


function App() {

const [input, setInput] = useState('')
const [cep, setCep] = useState({});

async function handleSearch(){
  if(input == ''){
    alert("Preencha algum CEP")
    return
  }

  try{
   const response = await api.get(`${input}/json`);
   setCep(response.data)
   setInput("");

  }catch{
    alert("Erro ao buscar")
    setInput("")
  }
}
  return (
    <div className="container">
      <h1 className='title'>Buscador CEP  </h1>

      <div className="containerInput">
      <input onChange={(e) => setInput(e.target.value) } value={input} className='input' placeholder="Digite seu CEP" type="text">
        
      </input>

      <button onClick={handleSearch} className="buttonSearch">
      <FiSearch size={25} color="#fff"/>
      </button>
    </div>

    <main className='main'>
    <h2>CEP: {cep.cep}</h2>
    <span>{cep.logradouro}</span>
    <span>{cep.bairro}</span>
    <span>{cep.localidade} - {cep.uf}</span>
    
      
    
    

    
    </main>
    </div>

    
  );
}

export default App;
