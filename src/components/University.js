import React, {useEffect, useState} from "react";
import {universities, universityJavaCode} from "../assets/jsons/constants";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";
import RocketLoader from "./Loaders/RocketLoader";

const University = () => {

    const [showFooter, setShowFooter] = useState(0);
    const [activeUniversity, setActiveUniversity] = useState(0);
    const [activeImage, setActiveImage] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        setTimeout(() => setIsLoading(false), 500)
    },[]);

    useEffect(()=>{
        setTimeout(() => setIsLoading(false), 500)
    },[activeUniversity]);

    return (
        <div className="university-java-wrapper full-box">
            <div className="university-java-main full-box">
                <div className={"university-left-wing full-height " + (!showFooter ? "active" : "")}>
                    {isLoading ? <RocketLoader message={"calling getUniversityDetails() api!"}/> : <>{Object.keys(universities).map((key, value) => {
                        return <div className="university-card"
                                    style={{display: activeUniversity === parseInt(key) ? "block" : "none"}}>
                            <div className="university-card-thumbnail full-width">
                                <div className="carousel-outer full-box">
                                    {universities[key].thumbnail_urls.map((url, index) => {
                                        return <img className="carousel-image full-box" src={url} alt="vit_pics"
                                                    style={{display: activeImage === index ? "block" : "none"}}/>
                                    })}
                                    <div className="carousel-navigation full-width">
                                        {universities[key].thumbnail_urls.map((url, index) => {
                                            return <div
                                                className={"carousel-navigation-item " + (activeImage === index ? "active" : "")}
                                                onClick={() => {
                                                    setActiveImage(index)
                                                }}/>
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className="university-card-header full-width">
                                {universities[key].name}
                                <button className="university-footer-button" onClick={() => {
                                    setShowFooter(1 - showFooter)
                                }} style={{paddingTop: !showFooter ? "0.2rem" : null}}><FontAwesomeIcon
                                    icon={showFooter ? faChevronUp : faChevronDown}/>
                                </button>
                            </div>
                            <div className="university-card-footer full-width"
                                 style={{display: showFooter ? "block" : "none"}}>
                                {Object.keys(universities[key].footer).map((innerKey, index) => {
                                    return <div>
                                        <div
                                            className="university-footer-left">{innerKey}</div>
                                        <div>:</div>
                                        <div
                                            className="university-footer-right">{universities[key].footer[innerKey]}</div>
                                    </div>
                                })}
                            </div>
                            <div className="university-card-flip"/>
                        </div>
                    })}
                        <div className="university-left-navigator">
                            <div className="university-navigator-up"
                                 style={{display: activeUniversity > 0 ? "" : "none"}}
                                 onClick={() => {
                                     setIsLoading(true);
                                     setShowFooter(0);
                                     setActiveUniversity(activeUniversity - 1)
                                 }}><FontAwesomeIcon icon={faChevronUp}/></div>
                            <div className={"university-navigator-item " + (activeUniversity === 0 ? "active" : "")}
                                 onClick={() => {
                                     setIsLoading(true);
                                     setShowFooter(0);
                                     setActiveUniversity(0)
                                 }}/>
                            <div className={"university-navigator-item " + (activeUniversity === 1 ? "active" : "")}
                                 onClick={() => {
                                     setIsLoading(true);
                                     setShowFooter(0);
                                     setActiveUniversity(1)
                                 }}/>
                            <div className={"university-navigator-item " + (activeUniversity === 2 ? "active" : "")}
                                 onClick={() => {
                                     setIsLoading(true);
                                     setShowFooter(0);
                                     setActiveUniversity(2)
                                 }}/>
                            <div className="university-navigator-down"
                                 style={{display: activeUniversity < 2 ? "" : "none"}}
                                 onClick={() => {
                                     setIsLoading(true);
                                     setShowFooter(0);
                                     setActiveUniversity(activeUniversity + 1)
                                 }}><FontAwesomeIcon icon={faChevronDown}/></div>
                        </div>
                    </>}
                </div>
                <div className="university-right-wing full-height">
                    <div className="ide-outer full-box">
                        <div className="exp-card-body" dangerouslySetInnerHTML={{__html: universityJavaCode}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default University;