import React, { Component } from 'react';
import { NavbarLogo, NavbarNav, NavbarUl, NavbarA, NavbarLi, NavbarLink } from './_navbar';

class NavBar extends Component  {
    state = {
        isTop: true
    };

    // https://stackoverflow.com/questions/44612364/toggle-class-based-on-scroll-react-js -- Adding scroll functionality to change the background of the navbar on scroll
    // TODO: Need to figure out how to change theming. Should be easy with a ternary operator; follow example provided above
    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            if(isTop !== this.state.isTop) {
                this.setState({ isTop })
            }
        });
    }

    render() {
        return (
        <div>
            <header>
                <NavbarNav>
                    <NavbarLogo moveInTop>
                        Citizens for Paul Johnson
                    </NavbarLogo>
                    <div>
                        <NavbarUl>
                            <NavbarLi><NavbarLink to="/" >Home</NavbarLink></NavbarLi>
                            <NavbarLi><NavbarA to="/" >About</NavbarA></NavbarLi>
                            <NavbarLi><NavbarA to="/" >Issues</NavbarA></NavbarLi>
                            <NavbarLi ><NavbarLink  to="/contact">Contact Me</NavbarLink></NavbarLi>
                        </NavbarUl>
                    </div>
                </NavbarNav>
            </header>
        </div>
        )
    }
}

export default NavBar;