import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import fotoPerfil from './img/p&B.jpeg'
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={fotoPerfil} 
          nome=" Hugo Brito" 
          descricao="Ex integrante da Cia, foi estagiário do Snowden, participou da construção da GameStop e hoje é praticante de Esgrima."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

          <div className="page-section-container">
           
            <CardPequeno imagem="https://png.pngtree.com/element_our/md/20180517/md_5afd688996524.jpg"
            descricao="E-mail: hugo@gmail.com.br" />
            <CardPequeno imagem="https://img2.gratispng.com/20180328/kdq/kisspng-computer-icons-location-symbol-clip-art-location-5abb46d3a03bf7.0339588015222228036563.jpg"
            descricao="Endereço: Avenida Brasil" />

          </div>


      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://media-exp3.licdn.com/dms/image/C4D0BAQEKJcexquG_Gg/company-logo_200_200/0/1625156081121?e=2159024400&v=beta&t=N6Mgk168WovaC-ukI3oq_yZkESpMsLF7EftJb3cpUlk" 
          nome="Virgin Company" 
          descricao="Analista da Virgin Galactic para captação de investimento " 
        />
        
        <CardGrande 
          imagem="https://i.pinimg.com/originals/c1/cf/d7/c1cfd775dd9496a79ec76f89e7f8ed1d.jpg" 
          nome="Heineken Company" 
          descricao=" Analista Sr. de degustação de cerveja." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
