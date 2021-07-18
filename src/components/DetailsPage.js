import React, {useState} from "react";
import Sidebar from "./Sidebar"
import Editor from "./Editor"

const DetailsPage = (props) => {

    const [currentTab, setCurrentTab] = useState(undefined);
    return (
        <>
            <Sidebar setCurrentTab={setCurrentTab}/>
            <Editor currentTab={currentTab} isUsingTrackpad={props.isUsingTrackpad}/>
        </>
    );
}

export default DetailsPage;