import React from 'react';
import styled from 'styled-components';

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
class ABOUT extends React.Component{
 
  render() 
  {
    return (
    <>
    <div class="sp">
    <h1><b>ABOUT US</b></h1>
  </div>
  <div class="container">

    <div class="card" >
      <img src="https://wl-brightside.cf.tsp.li/resize/728x/jpg/bdc/314/9fbf43534ebd4f4afa93db20da.jpg" class="card-img-top" alt="card"/>
      <div class="card-body">
        <h4><b>6288021 PIMSUANG KANJANATAWEWAT</b></h4>
        <section class="des">Email: pimsuang.kan@student.mahidol.ac.th</section><br/>
        <p><button>more</button></p>
      </div>
    </div>
    <div class="card" >
      <img src="https://www.dogthailand.net/data/attachment/forum/201511/25/0903298zzaaaj8ncooziaa.jpg" class="card-img-top" alt="card"/>
      <div class="card-body">
        <h4><b>6288055 NITHINEE TRIRONNARITH</b></h4>
        <section class="des">Email: nithinee.tri@student.mahidol.ac.th</section><br/>
        <p><button>more</button></p>
      </div>
    </div>
    <div class="card" >
      <img src="https://pbs.twimg.com/profile_images/1386338074368507908/BKlCbIz__400x400.jpg" class="card-img-top" alt="card"/>
      <div class="card-body">
        <h4><b>6288095 PHUWANAT MEEYUTEM</b></h4>
        <section class="des">Email: phuwanat.mee@student.mahidol.ac.th</section><br/>
        <p><button>more</button></p>
      </div>
    </div>
    <div class="card" >
      <img src="https://www.aprpets.org/sites/americaspetregistry/uploads/images/breeds/dogs/Shiba-Inu.jpg" class="card-img-top" alt="card"/>
      <div class="card-body">
        <h4><b>6288098 NAWADOL KUCHAIPOOM</b></h4>
        <section class="des">Email: nawadol.kuc@student.mahidol.ac.th</section><br/>
        <p><button>more</button></p>
      </div>
    </div>
  </div>


    </>
    
      )
    
  }
}
export default ABOUT;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals