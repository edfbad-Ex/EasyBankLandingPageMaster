import React from 'react';
import './Banner.css';
import BannerMockup from './img/image-mockups.png';

function Banner() {
    return (
        <div className="Container-Banner">

            <div className="Banner">

                <div className="Banner-Text">

                    <ul className="Banner-Text-Content">

                        <li className="Banner-Text-Content-Child">
                            <span>Next generation digital banking</span>
                        </li>

                        <li className="Banner-Text-Content-Child">
                            
                            <p>
                                Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
                            </p>

                        </li>
                        
                        <li className="Banner-Text-Content-Child">

                            <button className="Button-Request-Invite2">Request invite</button>

                        </li>

                    </ul>

                </div>
            
                <div className="Banner-Image">

                    <img src={BannerMockup} className="Banner-Mockup" alt="Logo" />

                </div>

            </div>
            
        </div>
    )
}

export default Banner
