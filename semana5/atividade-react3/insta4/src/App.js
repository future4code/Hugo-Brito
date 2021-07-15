import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  
  state = {
    array: [
      { 
        nomeUsuario:'Hugo', 
        fotoUsuario:'https://picsum.photos/50/50?a=1',
        fotoPost:'https://picsum.photos/200/150?a=1',
      },

      {
        nomeUsuario:'Felipe',
        fotoUsuario:'https://picsum.photos/50/50?a=2',
        fotoPost:'https://picsum.photos/200/150?a=2',
      },

      {
        nomeUsuario: 'Vini',
        fotoUsuario:'https://picsum.photos/50/50?a=3',
        fotoPost:'https://picsum.photos/200/?a=3',
      
      },
    ]
  }
  
  render() {
    return (

      <MainContainer>

        {
          this.state.array.map(objeto => {

            return (

              <Post 
              nomeUsuario = {objeto.nomeUsuario} 
              fotoUsuario = {objeto.fotoUsuario}
              fotoPost = {objeto.fotoPost}
              />

            )

          } )

        }

      </MainContainer>
    );
  }
}

export default App;
