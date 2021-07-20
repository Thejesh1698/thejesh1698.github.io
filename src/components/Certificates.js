import React, {useState} from "react";
import {certificatesDict} from "../assets/jsons/constants";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Certificates = () => {

    const [activeImage, setActiveImage] = useState({
        "Hacker Rank": "0",
        "Coursera": "0",
        "Examly.io": "0",
        "Scatter": "0",
    });

    return (
        <div className="certificates-wrapper full-box">
            {Object.keys(certificatesDict).map((value, index) => {
                let local_jsx = <></>;

                for (let obj in certificatesDict[value]) {
                    local_jsx = <>{local_jsx}
                        <div className={"certificates-item " + (activeImage[value] === obj ? "active" : "")}
                             style={{
                                 backgroundImage: activeImage[value] === obj ?
                                     `url(${certificatesDict[value][obj].url})` :
                                     `linear-gradient(to bottom, ${certificatesDict[value][obj].primaryColor}, 
                                     ${certificatesDict[value][obj].secondaryColor})`,
                                 backgroundPosition: value === 'Coursera' ? "center" : "left"
                             }}
                             key={value + obj}
                             onClick={(e) => {
                                 let local_var = {...activeImage};
                                 local_var[value] = obj;
                                 setActiveImage(local_var);
                             }
                             }
                        >
                            {activeImage[value] === obj ? null : <div className="label">
                                <FontAwesomeIcon icon={certificatesDict[value][obj].icon}
                                                 style={{color: certificatesDict[value][obj].color}}/>
                            </div>}
                        </div>
                    </>;
                }
                return <div className="certificates-category">
                    <div className="certificates-items-wrapper" key={value}>{local_jsx}</div>
                </div>;
            })}
        </div>
    );
}

export default Certificates;