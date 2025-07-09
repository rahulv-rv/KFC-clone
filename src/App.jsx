import { Component } from "react";
import Header from "./components/Header";
import Image from "./components/Image";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Corousel from "./components/Corousel";
import data from "./components/data"
import Rectangles from "./components/Rectangles";
import CarouselCards from "./components/CarouselCards";

class App extends Component
{
    render()
    {
        return <>
            <Header />
            <Image />
            <Menu />
            <div style={{width:"1100px",margin:"0 auto 20px"}}><img src="https://online.kfc.co.in/static/media/Finger_lickInDesk.a7d05386.svg" alt="Finger_lickInDesk" style={{width:"100%"}}/></div>
            <Rectangles />
            <h1 className="offer-heading">SAVE MORE AS YOU ORDER</h1>
            <CarouselCards data={data} />
            <Footer />
        </>
    }
}

export default App