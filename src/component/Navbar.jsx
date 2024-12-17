import React,{Component} from "react";


class Navbar extends Component {
   render() {
    return (
      <header>
         <nav className="head">
         <i className="fa-solid fa-bars"></i>
         <h1 id="burger">BURGER KING</h1>
         <i className="fa-solid fa-user"></i>
         <button id="but">
         {/* <i class="fa-solid fa-cart-shopping" id="cart"></i> view cart */}
         <i className="fa-solid fa-bag-shopping"  id="cart"></i> view cart
         </button>
         </nav>
      </header>
    )
    
   }
}
export default Navbar;