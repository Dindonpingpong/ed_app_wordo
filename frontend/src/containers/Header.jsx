import React from 'react';
import { Col, Container, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavItem, NavLink, Row, UncontrolledDropdown } from 'reactstrap';

const Header = () => {
    const links = ['friends', 'login', 'profile', 'settings'];
    const navsLinks = links.map((item, key) =>
        <NavItem><NavLink style={{ color: 'gray' }} href={`/${item}/`} key={key}>{item}</NavLink></NavItem>
    );

    return (
        <Container>
            <Navbar color="light" light>
                <NavbarBrand href="/" className="mr-auto">Wordo</NavbarBrand>
                <Nav className="mr-auto">
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle style={{ color: 'gray' }} nav caret>
                            Game
                            </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                <NavLink style={{ color: 'gray' }} href='/game/'>
                                    New Game
                                    </NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink style={{ color: 'gray' }} href='/saved/'>
                                    Saved games
                                    </NavLink>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    {navsLinks}
                </Nav>
            </Navbar>
        </Container>
    )
}

export default Header;