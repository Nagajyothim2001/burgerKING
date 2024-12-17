import React,{Component} from "react";
export default class Cards extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div className="final-card">
                    <div className="cards-container">
                        <img src={this.props.imgSrc} 
                        alt={this.props.alt} />
                    <div className="container-cards">
                        <h3>{this.props.head}</h3>
                        <p>{this.props.paraDes}</p>
                        <h5><u>See Terms</u></h5>
                        <button>{this.props.but}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}