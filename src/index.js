import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import "./index.css";
import Sdata from "./Sdata";

ReactDOM.render(
<React.Fragment>
  <h1 className="heading_style">List of top 5 netflix series in 2020</h1>

<Card 
  imgsrc={Sdata[0].imgsrc}
  title={Sdata[0].title}
  sname={Sdata[0].sname}
  links={Sdata[0].links}

/>
<Card 
  imgsrc={Sdata[1].imgsrc}
  title={Sdata[1].title}
  sname={Sdata[1].sname}
  links={Sdata[1].links}

/>
<Card 
  imgsrc={Sdata[2].imgsrc}
  title={Sdata[2].title}
  sname={Sdata[2].sname}
  links={Sdata[2].links}

/>

<Card 
  imgsrc={Sdata[3].imgsrc}
  title={Sdata[3].title}
  sname={Sdata[3].sname}
  links={Sdata[3].links}

/>

<Card 
  imgsrc={Sdata[4].imgsrc}
  title={Sdata[4].title}
  sname={Sdata[4].sname}
  links={Sdata[4].links}

/>
</React.Fragment>,
document.getElementById('root')
);