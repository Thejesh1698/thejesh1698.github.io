import React from "react";
import {prettifyDate} from "../assets/jsons/constants";

const MyStory = (props) => {
    return (
        <div className="my-story-wrapper full-box">
            <div className="my-story-main">
                <div className="watermark-quote my-story-quote-one" style={{
                    top: "-4.5rem", left: "3rem", WebkitTextStrokeWidth: "2px",
                    WebkitTextStrokeColor: "#9bd3cb"
                }}>&#10075;</div>
                <div className="watermark-quote my-story-quote-two" style={{
                    top: "-5rem", left: "6.5rem", WebkitTextStrokeWidth: "2px",
                    WebkitTextStrokeColor: "#9bd3cb"
                }}>&#10075;</div>
                <div className="my-story-inner full-box">
                    <p className="disclaimer">Disclaimer: To all those who expect it to be inspirational,
                        please do scroll down or
                        click on any of the tabs in the left :P </p>
                    <p>If someone asked me to use two words to describe the path I have lead in my life till now, I
                        would
                        have said hardship and perseverance. I realized that growing up in this day and age is difficult
                        for
                        anyone. But I have never shied away from any challenge that has been put before. Rather, I
                        welcomed
                        it; I strived to be better than I was, to understand those around me and myself. </p>
                    <p>I am a {prettifyDate("12/16/1998","", true)}-year-old Software Developer (No matter front-end or back-end or ML, in the end, it all
                        comes down to 0 and 1 ;) from India. The way life turns is unimaginable.
                        Little did I know, a few years back that there would be a stage where I would create a website
                        for
                        my own. My dreams started with me wanting to become an Archaeologist after realizing the
                        adventurous path the job profile follows but it has gradually switched to backend developer and
                        then
                        to Full Stack(more biased towards backend though :P).</p>
                    <p>I always have been an inquisitive kid. Something like "better an oops than a what if" style! It is
                        with
                        this mind where I ended up building this portfolio. Thought started to create an
                        innovative "code editor" templated portfolio. Not sure what to call it now :P but yeah, I am
                        more
                        than happy with the outcome! I am a damn big foodie. Extremely passionate about not
                        starving to death.</p>
                    <p>>>>Select name from Hobbies order by favourite desc limit 1. <br/>This would for sure print "Badminton"!!
                        yeah,
                        an
                        absolute badminton geek here. Give me a holiday and you would find me in badminton
                        court for 5 continuous hours approx. where 3 is the least every day.</p>
                </div>
            </div>
        </div>
    );
}

export default MyStory;