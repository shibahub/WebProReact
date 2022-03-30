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


class HomePage extends React.Component {

  render() {
  
  

  
    return (
      <>
   
    
        <div class="sp"><h1><b>special for today</b></h1></div>
        <div class="container">

          <div class="card" style={{ width: '18rem;' }}>
            <img src="https://images-na.ssl-images-amazon.com/images/I/81KGsbq8ekL._AC_SY500_.jpg" class="card-img-top" alt="card" />
            <div class="card-body">
              <h4><b>Legend of Zelda: Breath of the Wild</b></h4>
              <section class="price"> 1680฿ </section><br />
              <section class="des">Step into a world of discorvery, exploration, and adventure in The Legend of Zelda.</section><br />
              <p><a href="http://localhost:3000/product?key=1" ><button>More detail</button></a></p>
            </div>
          </div>
          <div class="card" style={{ width: '18rem;' }}>
            <img src="https://dl.lnwfile.com/ryaclu.jpg" class="card-img-top" alt="card" />
            <div class="card-body">
              <h4><b>Pokemon Shield</b></h4>
              <section class="price"> 1690฿ </section><br />
              <section class="des">Pokemon Shield introduce the Galar region and more Pokemon to discover!</section><br />
              <p><a href="http://localhost:3000/product?key=2" ><button>More detail</button></a></p>
            </div>
          </div>
          <div class="card" style={{ width: '18rem;' }}>
            <img src="https://image.api.playstation.com/vulcan/img/rnd/202010/2119/wl4DB5QGzlEHAXy1KLUVgOAu.png" class="card-img-top" alt="card" />
            <div class="card-body">
              <h4><b>Detroit: Become Human</b></h4>
              <section class="price"> 1200฿ </section><br />
              <section class="des">Puts the destiny of both mankind and androids in your hands, taking you to a future where machines have become more intelligent than human.</section><br />
              <p><a href="http://localhost:3000/product?key=4" ><button>More detail</button></a></p>
            </div>
          </div>
          <div class="card" style={{ width: '18rem;' }}>
            <img src="http://gamestore.com.pk/wp-content/uploads/2020/01/81ptcMaPW6L._AC_SL1500_-1.jpg" class="card-img-top" alt="card" />
            <div class="card-body">
              <h4><b>Monster Hunter World: Iceborne</b></h4>
              <section class="price"> 1200฿ </section><br />
              <section class="des">Iceborne expands the possibilities of Monster Hunter: World's vast breathtaking universe.</section><br />
              <p><a href="http://localhost:3000/product?key=5" ><button>More detail</button></a></p>
            </div>
          </div>
          <div class="card" style={{ width: '18rem;' }}>
            <img src="https://images-na.ssl-images-amazon.com/images/I/91ZuqTChZAL._SL1500_.jpg" class="card-img-top" alt="card" />
            <div class="card-body">
              <h4><b>Rune Factory</b></h4>
              <section class="price"> 1200฿ </section><br />
              <section class="des">Rune Factory (ルーンファクトリー, Rūn Fakutorī) is a role-playing simulation video game series developed by Neverland Co., Ltd. for the Nintendo DS, Nintendo 3DS, Nintendo Switch, Wii and the PlayStation 3 video game consoles, and a spin-off of the Harvest Moon/Story of Season video game series.</section><br />
              <p><a href="http://localhost:3000/product?key=6" ><button>More detail</button></a></p>
            </div>
          </div>
          <div class="card" style={{ width: '18rem;' }}>
            <img src="https://images-na.ssl-images-amazon.com/images/I/519LgOv9z7L._AC_UL600_SR426,600_.jpg" class="card-img-top" alt="card" />
            <div class="card-body">
              <h4><b>Twilight Princess</b></h4>
              <section class="price"> 1200฿ </section><br />
              <section class="des">In the tallest tower, he and Midna find a cloaked young woman. She immediately explains to Link how Hyrule came to be shrouded in Twilight, and reveals her true ...</section><br />
              <p><a href="http://localhost:3000/product?key=7" ><button>More detail</button></a></p>
            </div>
          </div>
          <div class="card" style={{ width: '18rem;' }}>
            <img src="https://images-na.ssl-images-amazon.com/images/I/71tmtmIgbhL._SL1500_.jpg" class="card-img-top" alt="card" />
            <div class="card-body">
              <h4><b>Minecarft</b></h4>
              <section class="price"> 1200฿ </section><br />
              <section class="des">Prepare for an adventure of limitless possibilities as you build, mine, battle mobs, and explore the ever-changing Minecraft landscape.</section><br />
              <p><a href="http://localhost:3000/product?key=8" ><button>More detail</button></a></p>
            </div>
          </div>
        </div>
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
      
    )
  }
}
export default HomePage


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

