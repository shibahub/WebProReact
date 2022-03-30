import React from 'react';
import styled from 'styled-components';

import '../App.css';
const Divcon = styled.div
`
display: flex;
justify-content: center;
flex-direction: row;
flex-wrap: wrap;

`


class ADMIN extends React.Component{
  render() 
  {
    return (
      <>
      
      <div class="admin">
    <h1>Hi! Admin ⭐</h1>
    <a href="http://localhost:3000/productmanage"><button>Product</button></a>
    <a href="http://localhost:3000/usermanage"><button>User</button></a>
    <a href="http://localhost:3000/"><button>Homepage</button></a>

  </div>
  <footer>
    <div class="foo">


    </div>
    <article class="containerft">
      <article class="columnft"></article>
      <a href="aboutus"><button>about us</button></a>
    </article>

    <article class="columnft">
      <button>email</button>
    </article>

    <article class="columnft">
      <button>address</button>
    </article>
  </footer>

      </>
      
    )

      

  }
}  
export default ADMIN;


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

