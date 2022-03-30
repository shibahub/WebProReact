import React from "react";
import '../App.css';






class DETAIL extends React.Component {

    componentDidMount() {
        this.detail_product()
    }

    detail_product() {


        var temp = window.location.search
        var key = temp.split("=");
        key = key[1];
        console.log(key)

        fetch("http://localhost:3030/allproductsdetail/" + key, {
            method: "GET",
            headers: {
                "content-type": "application/json",
                accept: "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                let eiei = '';
                    eiei+="<div class='detail'>"
                    eiei+='<div class="gridnaja">'
                    eiei+="<img src='"+data.data.pic+"'/>";
                    eiei+="</div>"
                    eiei+='<div class="gridnaja2">'
                    eiei+="<div id='eiei'>"
                    eiei+=`<h1>Product Name: ${data.data.Pname}</h1>`
                    
                    eiei+='</div>'
                    eiei+="<div id='eiei2'>"
                    eiei+=`<h3>Detail of the product: ${data.data.pinfo}</h3>`
                    eiei+='</div>'
                    eiei+="<div id='eiei3'>"
                    eiei+=`<h2><mark>Price: $${data.data.price}<mark></h2>`
                    eiei+='</div>'
                    eiei+='<a href=""><button>Add to chrat</button></a>'
                    eiei+='<a href=""><button>Purchase</button></a>'
                    eiei+="</div>"
                  //eiei += "<img src='" + data.data.pic + "'/>"
      
                  eiei += "</div>"
                  eiei += "</div>"
                //output += "</div>"
               
    
                document.getElementById('result').innerHTML += eiei + "</div>";
            })
            .catch((err) => {
                console.log(err);
            });
    }



    render() {
        return (
            <>
                <section class="sec">
                
                    <div id="result">
                    
                    </div>

                </section>
                <footer>        
            <div class="foo">
                <a href="#top"><h4>Back to Top</h4></a>
                
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
        );
    }
}

export default DETAIL;