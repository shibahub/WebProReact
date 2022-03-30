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


class UMAN extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            UID: "",
            fname: "",
            lname: "",
            Email: "",
            address: "",
            pnumber: "",
            DOB: "",
            username: "",
            pword: "",
            urole: "user",
        }
        this.handleChange = this.handleChange.bind(this);
        this.search = this.search.bind(this);
        this.insert = this.insert.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }
    insert() {
        /* Call WS to insert a new student */
        let user_data = {
            user: {
                UID: this.state.UID,
                fname: this.state.fname,
                lname: this.state.lname,
                Email: this.state.Email,
                address: this.state.address,
                pnumber: this.state.pnumber,
                DOB: this.state.DOB,
                username: this.state.username,
                pword: this.state.pword,
                urole: this.state.urole
            },
        };
        let rooturl = "http://localhost:3030/user";
        fetch(rooturl,
            {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                },
                body: JSON.stringify(user_data)
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
        let user_data = {
            user: {
                UID: this.state.UID,
                fname: this.state.fname,
                lname: this.state.lname,
                Email: this.state.Email,
                address: this.state.address,
                pnumber: this.state.pnumber,
                DOB: this.state.DOB,
                username: this.state.username,
                pword: this.state.pword,
                urole: this.state.urole
            },
        };
        let rooturl = "http://localhost:3030/user";
        fetch(rooturl,
            {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                },
                body: JSON.stringify(user_data)
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

        let user_data = {
            UID: this.state.UID
        }
        let rooturl = "http://localhost:3030/user";
        fetch(rooturl,
            {
                method: "DELETE",
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                },
                body: JSON.stringify(user_data)
            })
            .then((response) => response.json())
            .then((data) => {
                alert("user deleted");
            })
            .catch((err) => {
                console.log(err);
            });
    }

    search() {

        let rooturl = "http://localhost:3030/user/" + this.state.UID;
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
            
                var tmp = data.data.DOB.split("T");
                var tmp2=tmp[0];
                if (data.data != null) {
                    this.setState({
                        UID: data.data.UID,
                        fname: data.data.fname,
                        lname: data.data.lname,
                        Email: data.data.Email,
                        address: data.data.address,
                        pnumber: data.data.pnumber,
                        DOB: tmp2,
                        username: data.data.username,
                        pword: data.data.pword,
                        urole: data.data.urole
                    });
                }
                document.querySelector("#result").innerHTML = "";
                let output = "";
               
                output += `<div  class="eiei"><h1 style="color:black"> user ID: ${this.state.UID} </h1>`;
                output += "<table class='table'>";
                output += "<thead>";
                output += "<tr>";
                output +=
                    "<th scope='col'>#</th><th scope='col'>First name</th><th scope='col'> Last name </th> <th scope='col'> Email </th> <th scope='col'> Address </th> <th scope='col'> Phone number </th>  <th scope='col'>Date of birth</th> <th scope='col'>Username</th> <th scope='col'> Password </th> <th scope='col'> Role </th>";
                output += "</tr>";
                output += "</thread>";
                output += "<tbody>";
                output += "<tr>";
                output += "<td>" + data.data.UID + "</td>";
                output += "<td>" + data.data.fname + "</td>";
                output += "<td>" + data.data.lname + "</td>";
                output += "<td>" + data.data.Email + "</td>";
                output += "<td>" + data.data.address + "</td>";
                output += "<td>" + data.data.pnumber + "</td>";
                output += "<td>" + tmp2 + "</td>";
                output += "<td>" + data.data.username + "</td>";
                output += "<td>" + data.data.pword + "</td>";
                output += "<td>" + data.data.urole + "</td>";
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

        let rooturl = "http://localhost:3030/users";
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
                
                document.querySelector("#output").innerHTML = "";
                let output = "";
                output += `<div  class="eiei"><h1 style="color:black"> user List </h1>`;
                output += "<table class='table'>";
                output += "<thead>";
                output += "<tr>";
                output +=
                    "<th scope='col'>#</th><th scope='col'>First name</th><th scope='col'> Last name </th> <th scope='col'> Email </th> <th scope='col'> Address </th> <th scope='col'> Phone number </th>  <th scope='col'>DOB</th> <th scope='col'>Username</th> <th scope='col'> Password </th> <th scope='col'> Role </th>";
                output += "</tr>";
                output += "</thread>";
                output += "<tbody>";
                data.data.forEach((element) => {
                    var tmp = element.DOB.split("T");
                    var tmp2=tmp[0];
                    output += "<tr>";
                    output += "<td>" + element.UID + "</td>";
                    output += "<td>" + element.fname + "</td>";
                    output += "<td>" + element.lname + "</td>";
                    output += "<td>" + element.Email + "</td>";
                    output += "<td>" + element.address + "</td>";
                    output += "<td>" + element.pnumber + "</td>";
                    output += "<td>" + tmp2 + "</td>";
                    output += "<td>" + element.username + "</td>";
                    output += "<td>" + element.pword + "</td>";
                    output += "<td>" + element.urole + "</td>";
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
        const target = e.target;
        const value = target.value;
        const elementname = target.name;
        this.setState({ [elementname]: value })
    }

    render() {
        return (<>
            <a href="http://localhost:3000/admin"><button class="back">Back to admin page</button></a>

            <div>
                <MyForm onSubmit={this.handleSubmit}>
                    <h1 style={{ color: "black" }} id="top">User management</h1>
                    <label>UserID: </label>
                    <input name="UID" id="name" type="text" value={this.state.UID} onChange={this.handleChange}   placeholder="xxxxxx"/><br />
                    <label>Fristname: </label>
                    <input name="fname" type="text" value={this.state.fname} onChange={this.handleChange}  placeholder="xxxxxx"/><br />
                    <label>Lastname: </label>
                    <input name="lname" type="text" value={this.state.lname} onChange={this.handleChange}  placeholder="xxxxxx" /><br />
                    <label>Email: </label>
                    <input name="Email" type="text" value={this.state.Email} onChange={this.handleChange}  placeholder="xxx@xxx"/><br />
                    <label>Address: </label>
                    <input name="address" type="text" value={this.state.address} onChange={this.handleChange}  placeholder="xxxxxx"/><br />
                    <label>Phone number: </label>
                    <input name="pnumber" type="text" value={this.state.pnumber} onChange={this.handleChange} placeholder="xxxxxxxxxx"/><br />
                    <label>Date of birth: </label>
                    <input name="DOB" type="date" value={this.state.DOB} onChange={this.handleChange} /><br />
                    <label>Username: </label>
                    <input name="username" type="text" value={this.state.username} onChange={this.handleChange} placeholder="xxxxxxx"/><br />
                    <label>Password: </label>
                    <input name="pword" type="text" value={this.state.pword} onChange={this.handleChange} placeholder="xxxxxxx"/><br />
                    <label>Role: </label>
                    <select name="urole" type="text" value={this.state.urole} onChange={this.handleChange}><br />
                        <option value="user">user</option>
                        <option value="admin">admin</option>
                    </select><br />
                    <button type="button" onClick={this.insert}>Insert</button>
                    <button type="button" onClick={this.update}>Update</button>
                    <button type="button" onClick={this.delete}>Delete</button>
                    <button type="button" onClick={this.search}>Select</button>
                    <button type="button" onClick={this.selectAll}>search all</button>
                </MyForm>
                <MyForm>
                    <h2>Search by ID</h2>
                    <label>UserID: </label>
                    <input name="UID" type="text" value={this.state.UID} onChange={this.handleChange.bind(this)} placeholder="xxxxxxx"/><br />

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
export default UMAN;


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

