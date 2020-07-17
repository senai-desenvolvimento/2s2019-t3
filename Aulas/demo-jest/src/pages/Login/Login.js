import React, {Component} from 'react';

import './Login.css';

export default class Login extends Component{
  
  constructor(){
      super();
      this.state = {
          email : '',
          senha : '',
          erroMensagem : '',
          isLoading: false
      }
      
  }

  render(){
    return (
      <div className="App">
          <form className='container'>
            <div className='container-head'>
                <h1>CodeTur</h1>
            </div>
            <div className='container-body'>
                <input 
                  placeholder='Inserir login...' 
                  type='text' 
                  className='input'
                  name="email"
                  required
                />
                
                <input 
                  placeholder='Senha...' 
                  type='password' 
                  className='input'
                  name="senha"
                  required
                />

                <button 
                  className='btn-primary' 
                  type='submit'  
                >      
                Entrar
                </button>
               
            </div>
        </form>
      </div>
    );
  }
}

