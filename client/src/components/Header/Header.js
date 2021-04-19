import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import {link, useHistory} from 'react-router-dom'

function Header() {
    let user = JSON.parse(localStorage.getItem('user'))
console.log (user);

const history=useHistory();
    function logOut()
    {
localStorage.clear();
history.push('/login')

    }
    return(
        <nav class="navbar navbar-dark bg-primary">
            
            <span className="h3">JOT IT DOWN </span>
            
            <nav>
                
<NavDropdown title={user && user.name} >

                <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                </NavDropdown>
            </nav>
           
        </nav>
       
        
    )
}
export default Header;