import React, {useEffect, useRef, useState, useCallback} from "react";
import {techStacks, prettifyDate} from "../assets/jsons/constants";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const TechStacks = (props) => {

    const [currentTech, setCurrentTech] = useState(7);
    const [scrollDirection, setScrollDirection] = useState(true);  // true is right, false is left
    const carouselGroupRef = useRef(null);
    const currentTechRef = React.useRef(currentTech);
    const scrollDirectionRef = React.useRef(scrollDirection);
    const [carouselPoint, setCarouselPoint] = useState(-1);
    const carouselWrapperRef = useCallback(node => {
        if (node !== null) {
            setCarouselPoint(node.getBoundingClientRect().width / 2);
        }
    }, []);
    // const [hoveredStack, setHoveredStack] = useState({});
    const [scrollDownUnit, setScrollDownUnit] = useState(0);
    const scrollDownUnitRef = React.useRef(scrollDownUnit);
    const [scrollUpUnit, setScrollUpUnit] = useState(0);
    const scrollUpUnitRef = React.useRef(scrollUpUnit);
    const isUsingTouchPadRef = React.useRef(props.isUsingTrackpad);

    useEffect(() => {
        carouselGroupRef.current.addEventListener('wheel', carouselScroll);
        carouselGroupRef.current.addEventListener('touchstart', touchPadScrollStart);
        carouselGroupRef.current.addEventListener('touchend', touchPadScrollEnd);

        // return () => {
        //     carouselGroupRef.current.removeEventListener('wheel', carouselScroll, { passive: false });
        // }
    }, []);

    useEffect(() => {
        isUsingTouchPadRef.current = props.isUsingTrackpad;
    }, [props.isUsingTrackpad]);

    let touchStartX = 0;

    const carouselScroll = (event) => {
        event.preventDefault();
        if (event.wheelDelta >= 0) { // 'Scroll up'
            if (currentTechRef.current > 1) {
                if(isUsingTouchPadRef.current){
                    scrollUpUnitRef.current = scrollUpUnitRef.current + 1;
                    if(scrollUpUnitRef.current === 20){
                        carouselScrollUp();
                        scrollUpUnitRef.current = 0;
                        setScrollUpUnit(scrollUpUnitRef.current);
                    }
                    else{
                        setScrollUpUnit(scrollUpUnitRef.current);
                    }
                }
                else{
                    carouselScrollUp();
                }
            }
        } else { // 'Scroll down'
            if (currentTechRef.current < 11) {
                if(isUsingTouchPadRef.current){
                    scrollDownUnitRef.current = scrollDownUnitRef.current - 1;
                    if(scrollDownUnitRef.current === -20){
                        carouselScrollDown();
                        scrollDownUnitRef.current = 0;
                        setScrollDownUnit(scrollDownUnitRef.current);
                    }
                    else{
                        setScrollDownUnit(scrollDownUnitRef.current);
                    }
                }
                else{
                    carouselScrollDown();
                }
            }
        }
    }

    const touchPadScrollStart = (event) => {
        event.preventDefault();
        touchStartX = event.changedTouches[0].screenX;
    }

    const touchPadScrollEnd = (event) => {
        let touchEndX = event.changedTouches[0].screenX;
        if (touchEndX < touchStartX) {
            //swiped left
            carouselScrollDown();
        } else if (touchEndX > touchStartX) {
            //swiper right
            carouselScrollUp();
        }
        touchStartX = 0;
    }

    const carouselScrollUp = () => {
        currentTechRef.current = currentTechRef.current - 1;
        setCurrentTech(currentTechRef.current);
        scrollDirectionRef.current = false;
        setScrollDirection(scrollDirectionRef.current);
        // changeBackgroundColour(techStacks[currentTechRef.current-1].primary_color, techStacks[currentTechRef.current-1].secondary_color);
    }

    const carouselScrollDown = () => {
        currentTechRef.current = currentTechRef.current + 1;
        setCurrentTech(currentTechRef.current);
        scrollDirectionRef.current = true;
        // changeBackgroundColour(techStacks[currentTechRef.current-1].primary_color, techStacks[currentTechRef.current-1].secondary_color);
    }

    // const changeBackgroundColour = (primary_color, secondary_color) => {
    //     setHoveredStack({
    //         "primary_color": primary_color,
    //         "secondary_color": secondary_color
    //     });
    // }

    return (
        <div className="tech-stacks-wrapper full-box"
             // style={{backgroundImage: hoveredStack ? "linear-gradient(to bottom right, #" + hoveredStack.primary_color + ", #fd154b )" : "inherit"}}
            >
            <div className="tech-stacks-main full-box">
                <div className="carousel-wrapper full-box" ref={carouselWrapperRef}>
                    <div className="carousel-group scrollContainer" ref={carouselGroupRef}>
                        {carouselPoint !== -1 && techStacks.map((value, index) => {
                            return (
                                <div key={value.tech}
                                     className="carousel-item "
                                     style={{
                                         transform: `translate3d(${currentTech === index + 1 ?
                                             carouselPoint - 40 : currentTech > index + 1 ?
                                                 carouselPoint - 120 * (currentTech - index) :
                                                 carouselPoint + 120 * (index - currentTech + 2)}px,
                                                         0px, ${currentTech === index + 1 ? "-0.5px" : "-350px"}) 
                                                         rotateX(0deg) rotateY(${currentTech === index + 1 ?
                                             scrollDirection ? "-0.1" : "0.1" : currentTech > index + 1 ? "60" : "-60"}deg)`,
                                         "zIndex": `${currentTech === index + 1 ? "3000" : currentTech > index + 1 ?
                                             3000 - 120 * (currentTech - index) : 3000 - 120 * (index - currentTech + 2)}`,
                                         "backgroundImage": `linear-gradient(#${value.primary_color},#${value.secondary_color})`
                                     }}
                                >
                                    {value.font_awesome_icon !== null ? <FontAwesomeIcon icon={value.font_awesome_icon}
                                                                                         className="carousel-item-watermark"/> : null}
                                    <div className="carousel-item-header">
                                        <div className="carousel-item-name">{value.tech}</div>
                                        <div className="carousel-item-level">Level {value.level} </div>
                                        <div
                                            className="carousel-item-experience">Exposure: {prettifyDate(value.experienceFrom, value.experienceTo)}</div>
                                    </div>
                                    <div className="carousel-item-body"><span
                                        dangerouslySetInnerHTML={{__html: value.description}}/></div>
                                </div>);
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TechStacks;