import React,{Component} from "react";
import Navbar from "./component/Navbar"; 
import Bg from "./component/Bg";
import Cards from "./component/Cards";
import "./Style.css";
import cardData from "./data";
import Footer from "./component/Footer";
import Bottom from "./component/Bottom";
export default class App extends Component {
    render() {
        return (
            < >
             <Navbar/>
            <Bg/>
            <div className="cards" style={{display:"flex", flexWrap:"wrap"}}>
            {cardData.map(data => <Cards key={data.imgSrc}
            imgSrc={data.imgSrc}
            alt={data.alt}
            head={data.head}
            paraDes={data.paraDes}
            but={data.but}
            />)}
            </div>
            <Footer/>
            <Bottom/>
            </>
        )
    }
}