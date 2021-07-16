import React from "react";
import {internshipsPythonCode, scatterPythonCode, wintWealthPythonCode} from "../assets/jsons/constants";

const Professional = (props) => {
    return (
        <div className="professional-tab-wrapper full-box">
            <div className="professional-tab-main full-box">
                <div className="wint-wealth-exp">
                    <div className="exp-card-header">
                        Wint Wealth
                    </div>
                    <div className="exp-card-body" dangerouslySetInnerHTML={{__html: wintWealthPythonCode}}/>
                </div>
                <div className="scatter-exp">
                    <div className="exp-card-header">
                        Scatter
                    </div>
                    <div className="exp-card-body" dangerouslySetInnerHTML={{__html: scatterPythonCode}}/>
                </div>
                <div className="internship-exp">
                    <div className="exp-card-header">
                        Internships
                    </div>
                    <div className="exp-card-body" dangerouslySetInnerHTML={{__html: internshipsPythonCode}}/>
                </div>
            </div>
        </div>
    );
}

export default Professional;