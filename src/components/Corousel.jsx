import { Component } from "react";

export default class Corousel extends Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return (
            <>
                <div className="corousel-card">
                    <div className="corousel-card-img">
                        <img src={this.props.imgSrc} alt={this.props.imgAlt} />
                    </div>
                    <div className="corousel-card-body">
                        <p className="corousel-card-header"><b>{this.props.header}</b></p>
                        <p>{this.props.description}</p>
                        <p><u>{this.props.details}</u></p>
                        <button>{this.props.button}</button>
                    </div>
                </div>
            </>
        )
    }
}