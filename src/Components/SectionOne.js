import React from 'react';
import './SectionOne.css';
import IconOnline from './img/icon-online.svg';
import IconBudgeting from './img/icon-budgeting.svg';
import IconOnboarding from './img/icon-onboarding.svg';
import IconApi from './img/icon-api.svg';


function SectionOne() {
    return (
        <div className="Container-SectionOne">
            
            <div className="Container-SectionOne-Child">

                <span className="Container-SectionOne-Child1">Why choose Easybank?</span>
                
                <p className="Container-SectionOne-Child1">
                    We leverage Open Banking to turn your bank account into your financial hub. Control 
                    your finances like never before.
                </p>


            </div>

            <div className="Container-SectionOne-Child">
                
                <div className="Container-SectionOne-Child2">

                    <div id="Container-SectionOne-Child2-Circle1"></div>

                    <div className="Container-SectionOne-Child2-Text">

                        <span className="Container-SectionOne-Child2-Text1">Online Banking</span>

                        <p className="Container-SectionOne-Child2-Text2">
                            Our modern web and mobile applications allow you to keep track of your finances 
                            wherever you are in the world.
                        </p>

                    </div>

                </div>

                
                <div className="Container-SectionOne-Child2">

                    <div id="Container-SectionOne-Child2-Circle2"></div>

                    <div className="Container-SectionOne-Child2-Text">

                        <span className="Container-SectionOne-Child2-Text1">Simple Budgeting</span>

                        <p className="Container-SectionOne-Child2-Text2">
                            See exactly where your money goes each month. Receive notifications when you’re 
                            close to hitting your limits.
                        </p>

                    </div>

                </div>
                
                <div className="Container-SectionOne-Child2">

                    <div id="Container-SectionOne-Child2-Circle3"></div>
                    
                    <div className="Container-SectionOne-Child2-Text">

                        <span className="Container-SectionOne-Child2-Text1">Fast Onboarding</span>

                        <p className="Container-SectionOne-Child2-Text2">
                            We don’t do branches. Open your account in minutes online and start taking control 
                            of your finances right away.
                        </p>

                    </div>
                
                </div>
                
                <div className="Container-SectionOne-Child2">

                    <div id="Container-SectionOne-Child2-Circle4"></div>
                    
                    <div className="Container-SectionOne-Child2-Text">
                        
                        <span className="Container-SectionOne-Child2-Text1">Open API</span>

                        <p className="Container-SectionOne-Child2-Text2">
                            Manage your savings, investments, pension, and much more from one account. Tracking 
                            your money has never been easier.
                        </p>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default SectionOne
