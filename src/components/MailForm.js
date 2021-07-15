import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import CoffeeImageInMailForm from "./svgs/CoffeeImageInMailForm";
import {send} from 'emailjs-com';

function MailForm(props) {

    const [yourName, setYourName] = useState(undefined);
    const [yourEmail, setYourEmail] = useState(undefined);
    const [yourMessage, setYourMessage] = useState(undefined);
    const [sendText, setSendText] = useState("Send");

    const sendMail = () => {
        if (yourName === undefined) {
            setYourName("");
        }

        if (yourEmail === undefined) {
            setYourEmail("");
        }

        if (yourMessage === undefined) {
            setYourMessage("");
        }

        if (yourName && yourEmail && yourMessage) {
            setSendText("Hold on!");
            send('contact_service', 'contact_form', {
                "name": yourName,
                "email": yourEmail,
                "message": yourMessage
            }, process.env.GATSBY_EMAILJS_USERID)
                .then((result) => {
                        setSendText("Sent!");
                        setTimeout(() => {
                            setSendText("Send");
                            setYourName(undefined);
                            setYourEmail(undefined);
                            setYourMessage(undefined);
                        }, 1500);
                        console.log(result);
                    },
                    (error) => {
                        setSendText("Send");
                        console.log(error);
                    });
        }
    }

    const validateEmail = (email, ignoreFirst = false) => {
        if (ignoreFirst) {
            return true
        }
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    return (
        <div id="mail-form-wrapper">
            <div className="mail-form">
                <div className="coffee-close" onClick={() => props.setShowMailForm(0)}><FontAwesomeIcon
                    icon={faTimes}/>
                </div>
                <div className="coffee-img-div">
                    <CoffeeImageInMailForm
                        happy={yourName !== "" && validateEmail(yourEmail, yourEmail === undefined) && yourMessage !== ""}/>
                </div>
                <div className="coffee-header full-width">Let's Talk!</div>
                <div className="full-width coffee-input-info">Your Name</div>
                <div className="full-width coffee-input-div">
                    <input type="text"
                           className={"full-width " + (yourName === undefined ? "" : yourName ? "green-border" : "red-border")}
                           placeholder="Put that special name here !"
                           onChange={(e) => {
                               setYourName(e.target.value)
                           }}
                    />
                    {yourName === undefined ? null : yourName ?
                        <div className="input-success-info">Wow! &nbsp;That's a great name {yourName} :)</div>
                        :
                        <div className="input-error-info">I need a name to call you :/</div>
                    }
                </div>
                <div className="full-width coffee-input-info">Your Email</div>
                <div className="full-width coffee-input-div">
                    <input type="text"
                           className={"full-width " + (yourEmail === undefined ? "" : validateEmail(yourEmail) ? "green-border" : "red-border")}
                           placeholder="Your email please !"
                           onChange={(e) => {
                               setYourEmail(e.target.value)
                           }}
                    />
                    {yourEmail === undefined ? null : validateEmail(yourEmail) ?
                        <div className="input-success-info">Awesome! &nbsp;You got it correct this time :)</div>
                        :
                        <div className="input-error-info">I can't send a mail without a proper email id :/</div>
                    }
                </div>
                <div className="full-width coffee-input-info">Your Message</div>
                <div className="full-width coffee-input-div">
                            <textarea
                                placeholder="Type your message here. Do not worry, it's gonna be end-to-end encrypted :P"
                                className={"full-width " + (yourMessage === undefined ? "" : yourMessage ? "green-border" : "red-border")}
                                onChange={(e) => {
                                    setYourMessage(e.target.value)
                                }}
                            />
                    {yourMessage === undefined ? null : yourMessage ? null :
                        <div className="input-error-info">We need something to talk right? :/</div>
                    }
                </div>
                <div className="full-width coffee-send-div">
                    <button onClick={sendMail}>{sendText}</button>
                </div>
            </div>
        </div>
    );
}

export default MailForm;