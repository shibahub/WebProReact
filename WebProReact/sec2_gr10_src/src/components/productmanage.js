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
const A = styled.a
    `
text-decoration: none;
`
const MyForm = styled.form`background-color: #F2F3F4;text-align: left;padding: 20px;`;


class PMAN extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            PID: "",
            pic: "",
            Pname: "",
            pinfo: "",
            price: "",
        }
       this.handleChange = this.handleChange.bind(this);
       this.search=this.search.bind(this);
       this.insert=this.insert.bind(this);
       this.update=this.update.bind(this);
       this.delete=this.delete.bind(this);
    }
    insert() {
        /* Call WS to insert a new student */
        let product_data = {
            product: {
                PID: this.state.PID,
                pic: this.state.pic,
                Pname: this.state.Pname,
                pinfo: this.state.pinfo,
                price: this.state.price,
            },
          };
        let rooturl = "http://localhost:3030/product";
        fetch(rooturl,
            {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                },
                body: JSON.stringify( product_data )
            })
            .then((response) => response.json())
            .then((data) => {
                alert("Insert successfully")
                
            })
            .catch((err) => {
                console.log(err);
            });

    }
    update() {
        let product_data = {
            product: {
                PID: this.state.PID,
                pic: this.state.pic,
                Pname: this.state.Pname,
                pinfo: this.state.pinfo,
                price: this.state.price,
            },
          };
        let rooturl = "http://localhost:3030/product";
        fetch(rooturl,
            {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                },
                body: JSON.stringify( product_data )
            })
            .then((response) => response.json())
            .then((data) => {
                alert("Update successfully")
                
            })
            .catch((err) => {
                console.log(err);
            });
    }
    delete() {/* Call WS to delete the student */
        
        let product_data = {
              PID: this.state.PID
        }
        let rooturl = "http://localhost:3030/product";
        fetch(rooturl,
            {
                method: "DELETE",
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                },
                body: JSON.stringify( product_data )
            })
            .then((response) => response.json())
            .then((data) => {
                alert("product deleted");
            })
            .catch((err) => {
                console.log(err);
            });
    }

    search()
    {
       
        let rooturl = "http://localhost:3030/product/"+this.state.PID;
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
                if(data.data!=null){
                    this.setState({PID: data.data.PID,
                                   pic: data.data.pic,
                                   Pname: data.data.Pname,
                                   pinfo: data.data.pinfo,
                                   price: data.data.price,
                                });
                }
                
                document.querySelector("#result").innerHTML="";
                let output = "";
                output += `<div  class="eiei"><h1 style="color:black"> user ID: ${this.state.PID} </h1>`;
                output += "<table class='table'>";
                output += "<thead>";
                output += "<tr>";
                output +=
                    "<th scope='col'>#</th><th scope='col'>imgURl</th><th scope='col'>Product name</th><th scope='col'> Product info </th> <th scope='col'>Price</th>";
                output += "</tr>";
                output += "</thread>";
                output += "<tbody>";
                    output += "<tr>";
                    output += "<td>" + data.data.PID + "</td>";
                    output += "<td>" + data.data.pic + "</td>";
                    output += "<td>" + data.data.Pname + "</td>";
                    output += "<td>" + data.data.pinfo + "</td>";
                    output += "<td>" + data.data.price + "</td>";

                output += "</tbody>";
                output += "</table></div>";
                let result = document.querySelector("#result");
                result.innerHTML += output;
                
                
                

            })
            .catch((err) => {
                console.log(err);
            });
    }
    selectAll() {
        /* Call WS to get all students */
        
        let rooturl = "http://localhost:3030/products";
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
                console.log(data.data);
                document.querySelector("#output").innerHTML="";
                let output = "";
                output += `<div  class="eiei"><h1 style="color:black"> user List </h1>`;
                output += "<table class='table'>";
                output += "<thead>";
                output += "<tr>";
                output +=
                    "<th scope='col'>#</th><th scope='col'>imgURl</th><th scope='col'>Product name</th><th scope='col'> Product info </th> <th scope='col'>Price</th>";
                output += "</tr>";
                output += "</thread>";
                output += "<tbody>";
                data.data.forEach((i) => {
                    output += "<tr>";
                    output += "<td>" + i.PID + "</td>";
                    output += "<td>" + i.pic + "</td>";
                    output += "<td>" + i.Pname + "</td>";
                    output += "<td>" + i.pinfo + "</td>";
                    output += "<td>" + i.price + "</td>";
                    output += "<tr>";
                });
                output += "</tbody>";
                output += "</table></div>";
                let result = document.querySelector("#output");
                result.innerHTML += output;

            })
            .catch((err) => {
                console.log(err);
            });
    }
    handleChange(e) {
        const target=e.target;
        const value=target.value;
        const elementname=target.name;
        this.setState({[elementname]:value})
    }

    render() {
        return (<>
            <a href="http://localhost:3000/admin"><button class="back">Back to admin page</button></a>
            
            <div>
                <MyForm onSubmit={this.handleSubmit} style={{width:"auto"}}>
                <h1 style={{ color: "black" }} id="top">Product management</h1>
                    <label>ProductID: </label>
                    <input name="PID" id="name" type="text" value={this.state.PID} onChange={this.handleChange}  placeholder="xxxxxx"/><br />
                    <label>PictureURL: </label>
                    <input name="pic" type="text" value={this.state.pic} onChange={this.handleChange}  placeholder="xxxxxx"/><br />
                    <label>Name: </label>
                    <input name="Pname" type="text" value={this.state.Pname} onChange={this.handleChange}  placeholder="xxxxxx"/><br />
                    <label>Detail: </label>
                    <input name="pinfo" type="text" value={this.state.pinfo} onChange={this.handleChange}  placeholder="xxxxxx"/><br />
                    <label>Price: </label>
                    <input name="price" type="text" value={this.state.price} onChange={this.handleChange}  placeholder="xxxxxx"/><br />
                    <button type="button" onClick={this.insert}>Insert</button>
                    <button type="button" onClick={this.update}>Update</button>
                    <button type="button" onClick={this.delete}>Delete</button>
                    <button type="button" onClick={this.search}>Select</button>
                    <button type="button" onClick={this.selectAll}>search all</button>
                </MyForm>
                <MyForm>
                    <h2>Search by ID</h2>
                <label>UserID: </label>
                    <input name="UID" type="text" value={this.state.UID} onChange={this.handleChange.bind(this)}  placeholder="xxxxxx" /><br />
                    
                    <button type="button" onClick={this.search}>search</button>
                    <div id="result"></div>
                </MyForm>
                <div id="output">
                </div>
                <footer>
                    <a href="#top">go to top</a>
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
            </div>
        </>);
    }




}
export default PMAN;


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

