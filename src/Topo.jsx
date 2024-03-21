import React, { useState } from "react";
import "./styles.css";
import Slideshow from './Slideshow';

function Topo() {
  const [secaoAtual, setSecaoAtual] = useState('institucional');

  const cliqueSecao = (secao) => {
    setSecaoAtual(secao);
  };

  return (
    <header><br></br>
      <img src="atacadão.png" alt="logo" className="logo" /> <br></br>
      <div className="caixa-de-entrada">
      <input type="text" placeholder="Pesquise seus produtos" font-size width={12} /><br></br>
    </div>
    <br></br>
    
      <nav>
        <ul>
        <li><a href="https://www.atacadao.com.br/institucional/quem-somos" className='botao-menu'>Institucional</a></li>
          <li><a href="https://www.atacadao.com.br/institucional/atendimento" className='botao-menu'>Atendimento</a></li>
          <li><a href="https://www.atacadao.com.br/institucional/nossas-lojas" className='botao-menu'>Nossas Lojas</a></li>
          <li><a href="https://www.atacadao.com.br/institucional/nossas-lojas" className='botao-menu'>Folhetos</a></li>
          <li><a href="https://www.cartaoatacadao.com.br/" className='botao-menu'>Cartão Atacadão</a></li>
        </ul>
      </nav>
      <br></br>
      <Slideshow />

      <div className='secao'>
        {secaoAtual === 'institucional' && <h1>Seja bem-vindo!!</h1>}
        {secaoAtual === 'atendimento' && <h1>Atendimento</h1>}
        {secaoAtual === 'nossas lojas' && <h1>Nossas Lojas</h1>}
        {secaoAtual === 'folhetos' && <h1>Folhetos</h1>}
        {secaoAtual === 'cartao atacadao' && <h1>Cartão Atacadão</h1>}
      </div>
      
      <div className='imagens-abaixo-do-slideshow'>
        <img src="imagem1.webp" alt="Imagem 1" />
        <img src="imagem2.webp" alt="Imagem 2" />
        <img src="imagem3.webp" alt="Imagem 3" />
        <img src="imagem4.webp" alt="Imagem 4" />
        <img src="imagem5.webp" alt="Imagem 5" />
  
      </div> <br /><br />
  <h2>Mercearia</h2>

    <div className='imagens-produtos'>
      <div> 
         <img src="Bombom.webp" alt="Bombom" />
   <p>Bombom Nestlé<br /> Especialidades  Caixeta <br />com 251g
R$ 10,79</p>
    <button>Adicionar</button>
    </div>
  
    <div><img src="cafe.webp" alt="cafe" />
    <p>Café Melitta <br /> Caixeta com 500g <br />
R$ 15,48</p>
    <button>Adicionar</button>
    </div>
    <div> <img src="feijao.webp" alt="feijao" />
    <p>Feijão Kicaldo <br /> 1 Pacote com 1kg <br 
    />R$ 7,48

</p>
    <button>Adicionar</button>
    </div>
   <div><img src="leite condesado.webp" alt="leite condesado" />
   <p>Leite Condensado <br /> Italac <br /> R$ 3,99 </p>
   <button>Adicionar</button>
   </div>
    <div> <img src="oleo.webp" alt="oleo" />
    <p>Óleo de Soja <br /> Liza Pet com <br /> 900ml
R$ 5,29</p>
    <button>Adicionar</button>
    </div>
    
   

  </div>
</header>
  );
}

export default Topo;
