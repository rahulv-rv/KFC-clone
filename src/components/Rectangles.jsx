import { Component } from "react";

export default class Rectangles extends Component
{
    render()
    {
        return <>
            <div style={{display:"flex",gap:"16px",marginLeft:"178px"}}>
                <div className="rect"></div>
                <div className="rect"></div>
                <div className="rect"></div>
            </div>
        </>
    }
}