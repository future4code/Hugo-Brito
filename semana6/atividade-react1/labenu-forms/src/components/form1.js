import React from "react";
import styled from "styled-components";


class form1 extends React.Component {

    render(){ 

        return (

            <div>
        
            <h2>Etapa 1 - Dados Gerais</h2>
        
            <label> 1. Qual o seu nome?</label>
            <input type='text' value = {this.state.fName} onChange={this.handleFNameChange} />
            <br/>
            <label> 2. Qual a sua idade?</label>
            <input type='text' />
            <br/>
            <label> 3. Qual o seu e-mail?</label>
            <input type='text' />
            <br/>
            <label> 4. Qual a sua escolaridade?</label>
        
            </div>
        )
  
    };
};

export default form1;