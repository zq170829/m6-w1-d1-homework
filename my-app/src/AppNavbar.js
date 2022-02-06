import React, {Component} from "react";
import { Navbar, NavbarBrand} from "reactstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class AppNavbar extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Navbar>
                <NavbarBrand tag={Link} to="/">

                </NavbarBrand>
            </Navbar>
        )
    }
}

export default AppNavbar;