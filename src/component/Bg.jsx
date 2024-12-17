import React,{Component} from "react";
export default class Bg extends Component {
    render() {
        return (
            <div className="Bg">
                <h1 id="order">Start your <br />BK® order.</h1>
                <button id="but1"><i className="fa-solid fa-bag-shopping"  id="cart1"></i> Order Pickup</button>
                <button id="but2"><i className="fa-solid fa-bicycle" id="cart2"></i> Order Delivery</button>
                <div className="item">
                    <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/992ab9282f7352ad6d92ce74d86446c8ad758336-800x450.png?w=1125&q=90&fit=max&auto=format" alt="" id="bgimg" />
                </div>
            </div>
        )
    }
}