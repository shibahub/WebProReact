
import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const MyNav= styled.nav`
  display: flex;
  flex-direction: row;
  
  background-color: #2E4053;
  `;
const MyUl= styled.ul`
list-style-type: none;
display: flex;

`;/* For styling <li> */
const MyLi= styled.li`
display: block;
padding: 14px 10px;
color: white;
display:block;
`;
const MyLink= styled(NavLink)`
text-decoration: none;
color: white;


`;
const H1 = styled.h1`
  padding-left: 50px;
  padding-top: 50px;
  color: white;
`;
const Divyai = styled.div
`
background: #2E4053;
`;
class NavBar extends Component 
{
  render()
  {
    return(
      <Divyai>
      <H1>ShopMe</H1>
      
    <MyNav>
      
      <MyUl>
        <MyLi><MyLink to="/">Shopme 
          </MyLink></MyLi>
        <MyLi><MyLink to="/search">Search
          </MyLink></MyLi>
          <MyLi><MyLink to="/login">Login
          </MyLink></MyLi>
          <MyLi><MyLink to="/aboutus">about us
          </MyLink></MyLi>
      </MyUl>
    </MyNav>
    </Divyai>
    );
  }
}
export default NavBar;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
