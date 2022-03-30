import React from 'react';
import styled from 'styled-components';
import '../App.css';
const Diveiei=styled.div`

margin:50px;
padding:20px;`
;
const Divnaja=styled.fieldset`
background-color: gray;

padding:30px;`
const Divla=styled.div
`margin:10px
display:flex`;
;

class SEARCH extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
      menu: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e)
  {
        const target=e.target;
        const value=target.value;
        //const elementname=target.name;
        this.setState({menu:value})

  }
  handleSubmit(e)
  {
      //alert('A form was submitted: ' + this.state);
      e.preventDefault();
      this.selectAll();
      document.querySelector("#output").innerHTML = "";
      
      
  }
  selectAll() {
    console.log(this.state.menu);
    //let APi_key = "";
    let rooturl = "http://localhost:3030/allproducts/"+this.state.menu;
    fetch(rooturl,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
            "accept": "application/json"
          },
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            let eiei = ''
            document.querySelector("#output").innerHTML += `<br><h1 style="color:black">Product list of "${this.state.menu}"</h1><ul>`;
            eiei += "<div class='container'>"
            data.data.forEach(each => {
              
              eiei += "<div class='card' style='width: 18rem;'>";
              eiei += "<img src='" + each.pic + "' class='card-img-top' alt='card'>"
              eiei += "<div class='card-body'>"
              eiei += "<h4><b>" + each.Pname + "</b></h4>";
              eiei += "<section class='price'>$" + each.price + "</section><br>";
              eiei += "<section class='des'>" + each.pinfo + "</section><br>";
              eiei += `<p><a href="http://localhost:3000/product?key=${each.PID}"><button>More detail</button></a></p>`
              eiei += "</div>"
              eiei += "</div>"
            });
            //output += "</div>"
           

            document.getElementById('output').innerHTML += eiei + "</div>";
        })
        .catch((err) => {
            console.log(err);
        });
}
 
  render() 
  {
    return (
    <>
    <div class="container" id='top'style={{height:'500px;'}}>
    
    <form onSubmit={this.handleSubmit}>
          <h1>SHOPEME</h1>
          <input  class="sbox" type="text" id="q" name="keyword" placeholder="Seach...." required value={this.state.menu}
                onChange= {this.handleChange}/>
          <button class="submit" type="submit">Search</button>
      </form>
    </div>
    <div id="output">

    </div>
    <footer>        
    <div class="foo">
        <a href="#top"><h4>Back to Top</h4></a>
        
      </div>
  
      </footer>
    </>
    
      )
    
  }
}
export default SEARCH;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals