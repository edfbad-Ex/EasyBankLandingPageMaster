import React from 'react';
import './NavBar.css';
import Logo from './img/logo.svg';

function NavBar() {
    return (
        <div className="Container-NavBar">

            <div className="NavBar">
                
                <div className="NavBar-Child">

                    <img src={Logo} className="NavBar-Logo" alt="Logo" />

                </div>
                
                <div className="NavBar-Child">

                    <ul className="NavBar-Links">

                        <li className="NavBar-Links-Childs">

                            <span className="NavBar-Links-Child">Home</span>

                        </li>

                        <li className="NavBar-Links-Childs">

                            <span className="NavBar-Links-Child">About</span>

                        </li>
                        
                        <li className="NavBar-Links-Childs">

                            <span className="NavBar-Links-Child">Contact</span>                

                        </li>
                        
                        <li className="NavBar-Links-Childs">

                            <span className="NavBar-Links-Child">Blog</span>

                        </li>
                        
                        <li className="NavBar-Links-Childs">

                            <span className="NavBar-Links-Child">Careers</span>

                        </li>
                    
                    </ul>

                </div>
                
                <div className="NavBar-Child">

                    <button className="Button-Request-Invite1">Request invite</button>

                </div>
            
            </div>
            
        </div>
    )
}

export default NavBar
