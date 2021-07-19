import React, {useEffect, useState} from "react";
import Footer from "./Footer"
import LandingPage from "./LandingPage";
import DetailsPage from "./DetailsPage";
import MailForm from "./MailForm";
import MobileConstruction from "../pages/MobileConstruction";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: process.env.GATSBY_HASURA_GRAPHQL_URL,
        headers: {'content-type' : 'application/json', 'x-hasura-admin-secret': process.env.GATSBY_HASURA_ADMIN_SECRET},
    }),
});

const MainComponent = () => {

    const [tailLeft, setTailLeft] = useState(typeof window !== `undefined` ? window.innerWidth / 2 : 0);
    const [tailTop, setTailTop] = useState(typeof window !== `undefined` ? window.innerWidth / 2 : 0);
    const [tailOpacity, setTailOpacity] = useState(0);
    const [showMailForm, setShowMailForm] = useState(0);
    const [isUsingTrackpad, setIsUsingTrackpad] = useState(true);

    const moveTail = (e) => {
        setTailLeft(e.pageX + 5);
        setTailTop(e.pageY + 5);
        setTailOpacity(1);
    }

    const detectTrackPad = (e) => {
        let isTrackpad = false;
        if (e.wheelDeltaY) {
            if (e.wheelDeltaY === (e.deltaY * -3)) {
                isTrackpad = true;
            }
        }
        else if (e.deltaMode === 0) {
            isTrackpad = true;
        }
        if(isTrackpad){
            window.removeEventListener('mousewheel', detectTrackPad)
            window.removeEventListener('DOMMouseScroll', detectTrackPad)
        }
        setIsUsingTrackpad(isTrackpad);
    }

    useEffect(() => {
        if (typeof window !== `undefined`) {
            window.addEventListener('mousemove', moveTail)
            window.addEventListener("mousewheel", detectTrackPad, false);
            window.addEventListener("DOMMouseScroll", detectTrackPad, false);

            return () => {
                window.removeEventListener('mousemove', moveTail)
                window.removeEventListener('mousewheel', detectTrackPad)
                window.removeEventListener('DOMMouseScroll', detectTrackPad)
            }
        }
    }, []);

    return (
        <>
            {
                typeof window !== 'undefined'
                    ? window.innerWidth <= 1200 ? <MobileConstruction/>
                    : <>
                        <div className="outer-body-wrapper">
                            <div className="outer-wrapper">
                                <div className="main-wrapper">
                                    {/*<Header/>*/}
                                    <LandingPage/>
                                    <div className="sidebar-editor-footer full-box">
                                        <div className="sidebar-editor full-box">
                                            <DetailsPage isUsingTrackpad={isUsingTrackpad}/>
                                        </div>
                                        <ApolloProvider client={client}>
                                            <Footer setShowMailForm={setShowMailForm} showMailForm={showMailForm}/>
                                        </ApolloProvider>
                                    </div>
                                </div>
                            </div>
                            {showMailForm === 1 &&
                            <MailForm setShowMailForm={setShowMailForm}/>
                            }
                        </div>
                        <div className="mouseTail"
                             style={{left: tailLeft + "px", top: tailTop + "px", opacity: tailOpacity}}/>
                    </> : null
            }
        </>
    );
}

export default MainComponent;