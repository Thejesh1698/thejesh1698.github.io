import React, {useEffect, useState} from "react";
import Footer from "./Footer"
import LandingPage from "./LandingPage";
import DetailsPage from "./DetailsPage";
import MailForm from "./MailForm";
import {isMobile} from "react-device-detect";
import MobileConstruction from "../pages/MobileConstruction";

const MainComponent = () =>{

    const [tailLeft, setTailLeft] = useState(typeof window !== `undefined` ? window.innerWidth / 2 : 0);
    const [tailTop, setTailTop] = useState(typeof window !== `undefined` ? window.innerWidth / 2 : 0);
    const [tailOpacity, setTailOpacity] = useState(0);
    const [showMailForm, setShowMailForm] = useState(0);

    const moveTail = (e) => {
        setTailLeft(e.pageX + 5);
        setTailTop(e.pageY + 5);
        setTailOpacity(1);
    }

    useEffect(() => {
        if (typeof window !== `undefined`) {
            window.addEventListener('mousemove', moveTail)

            return () => {
                window.removeEventListener('mousemove', moveTail)
            }
        }
    }, []);

    console.log(isMobile);
    return (
        <>
            {isMobile ? <MobileConstruction/> :
                <>
                    <div className="outer-body-wrapper">
                        <div className="outer-wrapper">
                            <div className="main-wrapper">
                                {/*<Header/>*/}
                                <LandingPage/>
                                <div className="sidebar-editor-footer full-box">
                                    <div className="sidebar-editor full-box">
                                        <DetailsPage/>
                                    </div>
                                    <Footer setShowMailForm={setShowMailForm} showMailForm={showMailForm}/>
                                </div>
                            </div>
                        </div>
                        {showMailForm === 1 &&
                        <MailForm setShowMailForm={setShowMailForm}/>
                        }
                    </div>
                    <div className="mouseTail"
                         style={{left: tailLeft + "px", top: tailTop + "px", opacity: tailOpacity}}/>
                </>
            }

        </>
    );
}

export default MainComponent;