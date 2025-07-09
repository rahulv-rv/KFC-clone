import { Component } from "react";

export default class Image extends Component
{
    state = {
        currentImage : 1
    };
    
    componentDidMount() {
        this.interval = setInterval(() => {
        this.setState(prev => ({
            currentImage: prev.currentImage === 1 ? 2 : 1
        }));
        }, 5000);
    };

    componentWillUnmount() {
        clearInterval(this.interval);
    };

    setImage = (num) => {
        this.setState({ currentImage: num });
    };

    render()
    {
        const { currentImage } = this.state;
        const bgImage = currentImage === 1
        ? "url('https://images.ctfassets.net/wtodlh47qxpt/1uSyjSRYgrbOyx0pEtwTlB/9bdfd02d6551342c114227e31053c949/KFC-CARRYMINATI-2880-X-1260-8April-F5A__1_.jpg')"
        : "url('https://images.ctfassets.net/wtodlh47qxpt/7oPeoPgaADykhDQb4IpxjR/fc8611839c5f3765f5712aad43ee6803/Double_Down_banner_Size_2880x1260px.jpg')";

        return <>
            <div style={{marginTop:"150px"}}>
                <div className="order-text">
                    <p>LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</p>
                    <button>Start Order</button>
                </div>
                <div className="bg-image" style={{backgroundImage: bgImage, transition:"background-image 0.5s ease-in-out"}}>
                    <div className="buttons">
                        <button onClick={() => this.setImage(1)}>01</button>
                        <button onClick={() => this.setImage(2)}>02</button>
                    </div>
                </div>
            </div>
        </>
    }
}