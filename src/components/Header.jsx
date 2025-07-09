import { Component } from "react";

class Header extends Component
{
    render()
    {
        return <>
            <div className="main-header">
                <div className="location">
                    <p>📍 Allow location access for local store menu and promos</p>
                    <button>Set Location</button>
                </div>
                <header className="header">
                    <div className="head-left">
                        <img src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg" alt="kfc-logo" />
                        <a href="">Menu</a>
                        <a href="">Deals</a>
                    </div>
                    <div className="head-right" style={{width:"200px"}}>
                        <div >
                            <button className="button">
                                <img src="//images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg" alt="account-icon" style={{marginRight:"15px"}}/>
                                Sign In
                            </button>
                        </div>
                        <div className="cart" style={{width:"50%"}}>
                            <img src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg" alt="cart-bucket" />
                        </div>
                    </div>
                </header>
            </div>
        </>
    }
}

export default Header