import React from "react";
import {projectDict} from "../assets/jsons/constants";

const Projects = (props) => {

    return (
        <div className="projects-wrapper full-box">
            <div className="projects-main full-box">
                <div className="horizontal-scroll-group">
                    {projectDict.map((value, index) => {
                        return (
                            <div className="project-card">
                                <div className="project-card-header">
                                    <div className="project-card-title">{value.title}</div>
                                    <div className="project-card-name">{value.name}</div>
                                    <div className="project-card-duration">Duration: {value.duration}</div>
                                    <div className="project-card-techs">Technologies used: {value.techs}</div>
                                </div>
                                <div className="project-card-body">{value.description}</div>
                                <div className="project-card-footer">
                                    Link: &nbsp;
                                    {value.link ? value.link !== "#" ?
                                        <a href={value.link} target="_blank"
                                           rel="noreferrer">{value.link}</a> : "Will be Available Soon !" :
                                        " Couldn't find it for you unfortunately :/"}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="projects-footer full-width">Got some interesting ideas ? Let's connect to build them together :)</div>
            </div>
        </div>
    );
}

export default Projects;