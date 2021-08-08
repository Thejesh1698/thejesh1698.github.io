import React  from "react"
import NotFoundAlien from "../components/svgs/NotFoundAlien";
import {errorEmojis} from "../assets/jsons/constants";

const NotFound = (props) => {

    const emojiIndex = 0;

    return (
        <div className="alien-outer-wrapper full-box">
            <div className="alien-main full-box">
                <div className="alien-header full-width">

                </div>
                <div className="alien-body full-width">
                    <div className="grid-wrapper full-box">
                        <NotFoundAlien/>
                        <div className="alien-right-wing full-box">
                            <div className="alien-emoji-wrapper"
                                 dangerouslySetInnerHTML={{__html: errorEmojis[emojiIndex]}}
                                 style={{fontSize: emojiIndex == 8 ? "12rem" : "15rem"}}/>
                            <div className="alien-text-wrapper">
                                {/*<div className="alien-error-tag">Page not found</div>*/}
                                <div className="alien-error-header">Oh No! Error 404</div>
                                <div className="alien-error-description">Maybe aliens have stolen this page. They might
                                    take you too, please go back to
                                    homepage!
                                </div>
                                <div><a className="alien-back-button" href="/">Back to Portfolio</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFound;