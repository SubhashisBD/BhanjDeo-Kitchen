import React from "react";
import ReactDOM from "react-dom/client";

/**
 * *Header
 *  -Logo
 *  -Navbar
 * *Body
 *  -SearchBar
 *  -RestaurantContainer
 *    - RestaurantCard
 * *Footer
 *  -Copyright
 * -Links
 * -Address
 * -Contact
 */

const Header = () =>{
    return(
        <div className="header">
            <div className="logo-container">
                 <img className="logo" src="https://www.istockphoto.com/illustrations/food-delivery-logo.png" alt="logo" />
            </div>
            <div className="nav-items" >
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
            
        </div>
    )
};

const RestaurantCard =( )=>{
    return(
        <div className="res-card">
            <img className="res-logo"src="https://b.zmtcdn.com/data/pictures/4/21133754/a2c77aac050988d6597f341bc8bc4798_featured_v2.jpg?output-format=webp"/>
            <h3>Meghna Foods</h3> 
            <h4>Biryani,North Indian,Asian</h4>
            <h4>4.4 start</h4>
            <h4>38 minutes </h4>
        </div>
    )
}

const Body =()=>{
    return(
    <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
            <RestaurantCard/>
            <RestaurantCard/>
        </div>
    </div>
    )
}

const AppLayout =() => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>) 