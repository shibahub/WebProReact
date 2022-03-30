import React from 'react';


class LOGIN extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
      username: "",
      password: "",
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e)
  {
        const target=e.target;
        const value=target.value;
        const elementname=target.name;
        this.setState({[elementname]:value,});
        //console.log(elementname)
       

  }
  handleSubmit(e)
  {
      //alert('A form was submitted: ' + this.state);
      alert(`Welcome : ${this.state.username}`);
      e.preventDefault();
      //console.log(e.elementname)
      this.selectAll();
      
      //document.querySelector("#output").innerHTML = "";
      
      
      
  }
  selectAll() {
    //let APi_key = "";
    let rooturl = "http://localhost:3030/logincheck/"+this.state.username+'&'+this.state.password;
    fetch(rooturl,
        {
          method: "GET",
         /*body: JSON.stringify({
            
            username: this.state.username,
            password:  this.state.password
        }),*/
          headers: {
            "content-type": "application/json",
            "accept": "application/json"
          },
        })
        .then((response) => response.json())
        .then((data) => {
              console.log(data.data[0])
              if (data.data[0].urole==='admin')
              {
                window.location.replace('http://localhost:3000/admin');
              }
              else
              {
                window.location.replace('http://localhost:3000/');
              }
  
        });
}
  render() 
  {
    return (
        <>
        <div class="container">
      
        <div class="card">
            <form class="formnaja" onSubmit={this.handleSubmit} >
        
                <h1>Log in</h1>
                <input class="textb" type="text" placeholder="username" required id="username" name="username" value={this.state.username}
                 onChange={this.handleChange}/>
                <input class ="textb" type="password" placeholder="Password" id="password" name="password" pattern="[a-z,A-Z,0-9]{3,}" title="follow the formatletters @[a-zA-Z0-9]3 or more letters" required value={this.state.password}
                onChange={this.handleChange}/>
                
                
                <input class="submitb" type="submit" value="Log in"/>            
            </form>
        </div>
      </div>
      </>
      
    )
   
  }
}

export default LOGIN;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
