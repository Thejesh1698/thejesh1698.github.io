import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faGithub,
    faGoogle,
    faInstagram,
    faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import {useQuery, gql, useMutation} from "@apollo/client";

const ADD_IPADDRESS = gql`
  mutation ($ipaddress: String!) {
     insert_ipaddresses(
        objects:[{
          ipaddress: $ipaddress
        }]
      )
      {
        returning{
          id
        }
      }
  }
`;

const GET_IPADDRESSES = gql`
   {
  ipaddresses {
    id
  }
}
`;

const Footer = ({showMailForm, setShowMailForm}) => {


    const [addIpaddress, {data1}] = useMutation(ADD_IPADDRESS);
     const {loading, error, data} = useQuery(GET_IPADDRESSES);

    const [letterT, setLetterT] = useState(false);
    const [letterH1, setLetterH1] = useState(false);
    const [letterE1, setLetterE1] = useState(false);
    const [letterJ, setLetterJ] = useState(false);
    const [letterE2, setLetterE2] = useState(false);
    const [letterS, setLetterS] = useState(false);
    const [letterH2, setLetterH2] = useState(false);
    const [userTracker, setUserTracker] = useState("");

    useEffect(() => {
        getVisitorCount()
    }, []);

    const getVisitorCount = async () => {
        await axios.get("https://website-visits-counter.glitch.me/visitorCount").then((response) => {
            setUserTracker(response.data)
            addIpaddress({variables: {ipaddress: response.data}}).then(response =>{}).catch(error=>{});
        }).catch((error) => {});
    }

    useEffect(() => {
        const handleScroll = () => {
            let baseValue = Math.max(document.body.scrollHeight, document.body.offsetHeight,
                document.documentElement.clientHeight, document.documentElement.scrollHeight,
                document.documentElement.offsetHeight) - window.innerHeight - 77;
            if (window.scrollY < (baseValue - (6 * 29))) {
                if (letterT) {
                    setLetterT(false);
                }
            } else {
                if (!letterT) {
                    setLetterT(true);
                }
            }

            if (window.scrollY < (baseValue - (5 * 29))) {
                if (letterH1) {
                    setLetterH1(false);
                }
            } else {
                if (!letterH1) {
                    setLetterH1(true);
                }
            }

            if (window.scrollY < (baseValue - (4 * 29))) {
                if (letterE1) {
                    setLetterE1(false);
                }
            } else {
                if (!letterE1) {
                    setLetterE1(true);
                }
            }

            if (window.scrollY < (baseValue - (3 * 29))) {
                if (letterJ) {
                    setLetterJ(false);
                }
            } else {
                if (!letterJ) {
                    setLetterJ(true);
                }
            }

            if (window.scrollY < (baseValue - (2 * 29))) {
                if (letterE2) {
                    setLetterE2(false);
                }
            } else {
                if (!letterE2) {
                    setLetterE2(true);
                }
            }

            if (window.scrollY < (baseValue - 29)) {
                if (letterS) {
                    setLetterS(false);
                }
            } else {
                if (!letterS) {
                    setLetterS(true);
                }
            }

            if (window.scrollY < baseValue) {
                if (letterH2) {
                    setLetterH2(false);
                }
            } else {
                if (!letterH2) {
                    setLetterH2(true);
                }
            }
        }

        window.addEventListener('scroll', handleScroll, {passive: true});

        return () => window.removeEventListener("scroll", handleScroll);

    }, [letterE1, letterE2, letterH1, letterH2, letterJ, letterS, letterT]);

    return (
        <>
            <div className="footer-wrapper full-box">
                <div className="footer-outer full-box">
                    <div className="footer-main full-box">
                        <div className="footer-my-name">
                            <span className={"footer-letter " + (letterT ? "visible" : "")}>T</span>
                            <span className={"footer-letter " + (letterH1 ? "visible" : "")}>h</span>
                            <span className={"footer-letter " + (letterE1 ? "visible" : "")}>e</span>
                            <span className={"footer-letter " + (letterJ ? "visible" : "")}>j</span>
                            <span className={"footer-letter " + (letterE2 ? "visible" : "")}>e</span>
                            <span className={"footer-letter " + (letterS ? "visible" : "")}>s</span>
                            <span className={"footer-letter " + (letterH2 ? "visible" : "")}>h</span>
                        </div>

                        <div className="footer-info full-width">
                            {/*<div className="footer-feet-left"> Made with <span style={{color: "red", margin: "0 0.5rem"}}>&#9829;</span> in April, 2021 !</div>*/}
                            {/*<div className="footer-feet-left">We are stronger &#60;u&#62;nited than &#60;div&#62;ided !</div>*/}
                            <div className="footer-feet-left">Better an oops than a what if &nbsp;:p</div>
                            <div className="footer-feet-center">
                                <div className="footer-social-links">
                                    <a href="https://www.linkedin.com/in/nannapaneni-thejesh-820346132/"
                                       className="linked-in">
                                        <FontAwesomeIcon icon={faLinkedinIn}/>
                                    </a>
                                    <a href="https://github.com/Thejesh1698" className="github">
                                        <FontAwesomeIcon icon={faGithub}/>
                                    </a>
                                    <div className="google"
                                         onClick={() => setShowMailForm(1 - showMailForm)}>
                                        <FontAwesomeIcon icon={faGoogle}/>
                                    </div>
                                    <a href="https://www.facebook.com/thejesh.mittu/" className="facebook">
                                        <FontAwesomeIcon icon={faFacebook}/>
                                    </a>
                                    <a href="https://www.instagram.com/it_is_just_mittu/" className="instagram">
                                        <FontAwesomeIcon icon={faInstagram}/>
                                    </a>
                                </div>
                            </div>
                            <div
                                className="footer-feet-right"> {data !== undefined ? data.ipaddresses.length : 0} {data !== undefined && data.ipaddresses.length === 1 ?
                                "human left his/her footprint here !" : "humans left their footprints here !"}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
