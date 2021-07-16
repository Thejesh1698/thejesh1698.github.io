import React from "react";
import TechStacks from "./TechStacks";
import Projects from "./Projects";
import University from "./University";
import ResumePdf from "./ResumePdf";
import Certificates from "./Certificates";
import Professional from "./Professional";
import MyStory from "./MyStory";

const Editor = (props) => {
    const components_dict = {
        "techStacks" : <TechStacks/>,
        "projects": <Projects/>,
        "university": <University/>,
        "resumePdf": <ResumePdf/>,
        "certificates": <Certificates/>,
        "professional": <Professional/>,
        "myStory": <MyStory/>
    }
    return (
        <div className="editor-wrapper full-box">
            <div className="editor-main full-box">
                {props.currentTab !== undefined ? components_dict[props.currentTab] : null}
            </div>
        </div>
    );
}

export default Editor;