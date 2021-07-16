import React from 'react'
import UnderConstruction from "../components/svgs/UnderConstruction";


const MobileConstruction = () => {

    return (
        <div className="mobile-construction-wrapper full-box">
            <div className="mobile-construction-main full-box grid-wrapper">
                <div className="mobile-construction-img full-width">
                    <UnderConstruction/>
                </div>
                <div className="mobile-construction-info full-width">
                    Mobile design is in progress. It is coming soon!<br/>
                    Please try to access it in laptop or desktop till then.
                </div>
            </div>
        </div>
    );
}

export default MobileConstruction;