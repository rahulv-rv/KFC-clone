import { Component } from "react";

export default class Menu extends Component
{
    render()
    {
        return <>
            <div className="categories" style={{width:"1100px",margin:"auto"}}>
                <div className="heading" style={{width:"1100px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <h1 style={{width:"50%"}}>BROWSE MENU CATEGORIES</h1>
                    <hr style={{width:"50%",color:"lightgray"}}/>
                </div>
                <div className="cards">
                    <div className="card-categories" style={{display:"flex",gap:"25px"}}>
                        <div className="left">
                            <div className="card card-1">
                                <img src="https://images.ctfassets.net/wtodlh47qxpt/3FKqwvgXKVq5yEhGjNpVyV/d2ea446076c8aa56fc3caaa7ab2c3e8e/KFC-BOGO-Gold-Burger-Category-23MAY_3.jpg?fm=webp&fit=fill" alt="kfc-bogo" />
                                <div className="card1-data">
                                    <h1>GOLD: BUY 1 GET 1</h1>
                                </div>
                            </div>
                        </div>
                        <div className="right" style={{width:"50%",display:"flex",gap:"25px",flexWrap:"wrap"}}>
                            <div className="card card-2">
                                <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/no-image.jpg" alt="zingerb1g1" />
                                <div className="card-data">
                                    <h1>ZINGER: BUY 1 GET 1</h1>
                                </div>
                            </div>
                            <div className="card card-3">
                                <img src="https://images.ctfassets.net/wtodlh47qxpt/3c6YNbEbbgvJ9srLDJxOfs/1d327228858c6242867d73a9a77159ed/Full_house_Popcorn_-_465x327.jpg?fm=webp&fit=fill" alt="popcorn" />
                                <div className="card-data">
                                    <h1>EPIC BUCKET OF THE DAY</h1>
                                </div>
                            </div>
                            <div className="card card-4">
                                <img src="https://images.ctfassets.net/wtodlh47qxpt/4AcPJzGNNxfXiF1rWvlydj/2a8548a717ff678fbfb0d881b7367ba8/KFC-Gold-Burger-White-Category-23MAY_4.jpg?fm=webp&fit=fill" alt="gold-burger" />
                                <div className="card-data">
                                    <h1>GOLD EDITION</h1>
                                </div>
                            </div>
                            <div className="card card-5">
                                <img src="https://images.ctfassets.net/wtodlh47qxpt/7zQ4a4xD9BW9Qyl03WlTqR/bbcea04b544b8700ea7fe7834d85feb7/KFC-Box-Meals.jpg?fm=webp&fit=fill" alt="box-meal" />
                                <div className="card-data">
                                    <h1>BOX MEALS</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-cards" style={{display:"flex",gap:"25px",flexWrap:"wrap",marginTop:"25px"}}>
                        <div className="card card-6">
                            <img src="https://images.ctfassets.net/wtodlh47qxpt/5iYMlSgO8gr09Rjbn185qs/8f330ee5eb94ba4eff4f4552e361218d/KFC-Variety-Bucket.jpg?fm=webp&fit=fill" alt="variety-buckets" />
                            <div className="card-data">
                                <h1>VARIETY BUCKETS</h1>
                            </div>
                        </div>
                        <div className="card card-7">
                            <img src="https://images.ctfassets.net/wtodlh47qxpt/2A4wJjZ8ZvCyj7RSxI3iTk/f403b8ceb2f120bf7ef36d5a913ddf6f/KFC-White-Chicken-Bucket.jpg?fm=webp&fit=fill" alt="chicken-buckets" />
                            <div className="card-data">
                                <h1>CHICKEN BUCKETS</h1>
                            </div>
                        </div>
                        <div className="card card-8">
                            <img src="https://images.ctfassets.net/wtodlh47qxpt/3NdeHBtjjYPHMAoOTpEZ0w/d6c6fadd15bcfa8f6bc969aa02207f0c/KFC-Burger.jpg?fm=webp&fit=fill" alt="burger" />
                            <div className="card-data">
                                <h1>BURGERS</h1>
                            </div>
                        </div>
                        <div className="card card-9">
                            <img src="https://images.ctfassets.net/wtodlh47qxpt/5VQAImh8fghx8cYtmjRBxu/050c6b65545546ecca314321a5dddc15/CAT89?fm=webp&fit=fill" alt="snacks" />
                            <div className="card-data">
                                <h1>SNACKS</h1>
                            </div>
                        </div>
                        <div className="card">
                            <img src="https://images.ctfassets.net/wtodlh47qxpt/3XJELuUtdk0lTpnGRWnJvW/bc0cf7c981fb86e85a8b75be1fdc5f39/KFC-Value-Lunch.jpg?fm=webp&fit=fill" alt="value-lunch" />
                            <div className="card-data">
                                <h1>VALUE LUNCH SPECIAL</h1>
                            </div>
                        </div>
                        <div className="card">
                            <img src="https://images.ctfassets.net/wtodlh47qxpt/7tEmaFwdTOKmVNf724nD21/cb386eac4c508bce817d3daa22a1d3b6/KFC-rice-bowl.jpg?fm=webp&fit=fill" alt="rice-bowl" />
                            <div className="card-data">
                                <h1>RICE BOWLZ</h1>
                            </div>
                        </div>
                        <div className="card">
                            <img src="https://images.ctfassets.net/wtodlh47qxpt/1cS5c1DDcmYuwT0g2edC3f/48712d8b753b8cb6c6abd662398fec70/KFC-Beverages.jpg?fm=webp&fit=fill" alt="beverages" />
                            <div className="card-data">
                                <h1>BEVERAGES & DESSERTS</h1>
                            </div>
                        </div>
                        <div className="card">
                            <img src="https://images.ctfassets.net/wtodlh47qxpt/169o6qKazOgakFLMKkHUGY/d9d657af816a140bdaf3f5a7d64e3ef7/KFC-Veg.jpg?fm=webp&fit=fill" alt="veg" />
                            <div className="card-data">
                                <h1>VEG</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    }
}