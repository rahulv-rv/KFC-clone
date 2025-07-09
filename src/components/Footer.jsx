import { Component } from "react";

export default class Footer extends Component
{
    render()
    {
        return <>
            <footer className="footer">
                <div className="main-footer">
                    <div className="footer-logo">
                        <img src="https://images.ctfassets.net/wtodlh47qxpt/25FSYFuEtGct8NSrtpKe6d/b602f6fe0bf294e6a6dff5d7648bf594/KFC_Logo.svg?h=120&w=120&fm=webp&fit=fill" alt="footer-logo" style={{width:"60px"}}/>
                    </div>
                    <div className="kfc-india">
                        <ul>
                            <li><b>KFC India</b></li>
                            <li><a href="">About KFC</a></li>
                            <li><a href="">KFC Care</a></li>
                            <li><a href="">Careers</a></li>
                            <li><a href="">Our Golden Past</a></li>
                            <li><a href="">Responsible</a></li>
                            <li><a href="">Disclosure</a></li>
                        </ul>
                    </div>
                    <div className="legal">
                        <ul>
                            <li><b>Legal</b></li>
                            <li><a href="">Tearms & Conditions</a></li>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Disclaimer</a></li>
                            <li><a href="">Caution Notice</a></li>
                        </ul>
                    </div>
                    <div className="kfc-food">
                        <ul>
                            <li><b>KFC Food</b></li>
                            <li><a href="">Menu</a></li>
                            <li><a href="">Order Lookup</a></li>
                            <li><a href="">Gift Card</a></li>
                            <li><a href="">Nutrition & Allergen</a></li>
                        </ul>
                    </div>
                    <div className="support">
                        <ul>
                            <li><b>Support</b></li>
                            <li><a href="">Get Help</a></li>
                            <li><a href="">Contact Us</a></li>
                            <li><a href="">KFC Feedback</a></li>
                            <li><a href="">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="find-kfc" >
                        📍<a href="" style={{textDecoration:"underline"}}>Find A KFC</a>
                    </div>
                    <div className="store-buttons" >
                        <a href="">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="google"/>    
                        </a>
                        <a href="">
                            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="" />
                        </a>
                    </div>
                </div>
            </footer>
            <div className="copyright">
                <p>Copyright © KFC Corporation 2025 All rights reserved build pwa-2502-0-4_2e890229</p>
            </div>
        </>
    }
}