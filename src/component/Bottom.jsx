import React,{Component} from "react";
export default class Bottom extends Component {
    render() {
        return (
           <>
            <div id="last">
                <p>TM & Copyright 2024 Burger King Company LLC. All Rights Reserved.|<u> Do Not Sell Or Share My Personal Information</u></p>
            </div>
            <div id="bottom">
                <div>
                <ul>
                    <li><i className="fa-solid fa-house"></i></li>Home
                </ul>
                </div>
                <div>
                <ul>
                    <li><i className="fa-solid fa-burger"></i></li>Menu
                </ul>
                </div>
                <div>
                <ul>
                    <li><i className="fa-solid fa-tag"></i></li>Offers
                </ul>
                </div>
                <div>
                <ul>
                    <li><i className="fa-solid fa-crown"></i></li>Rewards
                </ul>
                </div>
            </div>
           </>
        )
    }
}